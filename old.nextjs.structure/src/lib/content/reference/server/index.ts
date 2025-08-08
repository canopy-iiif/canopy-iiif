const { resolve } = require("path");
const { readdir } = require("fs").promises;

import { NavigationItem } from "@src/customTypes/navigation";
import fs from "fs";
import matter from "gray-matter";

export async function getReferencingContent({
  manifestId,
  srcDir,
}: {
  manifestId: string;
  srcDir: string[];
}) {
  // Read all files in a directory recursively
  // https://stackoverflow.com/a/5827895/120275

  const referencingContent: NavigationItem[] = [];

  async function getFiles(dir: string, srcDirIndex: number) {
    const dirents = await readdir(dir, { withFileTypes: true });

    // This will crawl a nested directory structure
    const files = await Promise.all(
      dirents.map((dirent: any) => {
        const res = resolve(dir, dirent.name);
        const fileName = res.split(dir)[1];
        const slug = fileName.replace(/\.mdx$/, "");

        // Return a new recursive call, keep digging into nested directories in /pages
        if (dirent.isDirectory()) return getFiles(res, srcDirIndex);

        // Read the file contents
        const source = fs.readFileSync(res, "utf8");

        // Read the frontmatter for an individual file
        const { data } = matter(source);

        // If the page's frontmatter includes the manifestId, add to the array
        if (data.referencedManifests?.includes(manifestId)) {
          const path = `/${data.navigation}${slug}`;
          referencingContent.push({
            text: data.title ? data.title : path,
            path,
          });
        }
        return res;
      })
    );
    return files.flat();
  }

  for (let i = 0; i < srcDir.length; i++) {
    await getFiles(`${srcDir[i]}`, i);
  }

  return referencingContent;
}
