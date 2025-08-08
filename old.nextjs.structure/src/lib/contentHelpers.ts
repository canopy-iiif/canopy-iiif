const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");

import { GrayMatterFile } from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

async function getMarkdownContent({
  slug,
  directory = "",
}: {
  slug: string;
  directory?: string;
}) {
  const filePath = path.join(
    `content/${directory ? `${directory}/` : ""}`,
    `${slug}.mdx`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data }: GrayMatterFile<string> = matter(fileContents);

  // Prepare the source for MDXRemote
  const mdxSource = await serialize(content, {
    scope: data,
    parseFrontmatter: true,
  });

  return {
    source: mdxSource,
    frontMatter: data,
  };
}

function getSlugFromFileName(fileName: string) {
  return fileName.replace(/\.mdx$/, "");
}

function getMarkdownPaths(directory: string) {
  const contentDirectoryPath = path.join(process.cwd(), `content/${directory}`);
  const fileNames = fs.readdirSync(contentDirectoryPath);
  return fileNames
    .filter((filename: string) => {
      return path.extname(filename).toLowerCase() === ".mdx";
    })
    .map((fileName: string) => {
      return {
        params: {
          slug: getSlugFromFileName(fileName),
        },
      };
    });
}

export { getMarkdownContent, getMarkdownPaths, getSlugFromFileName };
