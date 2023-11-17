import { getMarkdownContent, getSlugFromFileName } from "@lib/contentHelpers";

import CanopyMDXRemote from "@src/components/MDX";
import { FrontMatterPageProps } from "@customTypes/content";
import { GetStaticPropsContext } from "next";
import LayoutsBasic from "@src/components/Layouts/Basic";
import fs from "fs";
import path from "path";

/**
 * Specifies the relative path of the directory containing the Markdown.
 * This path is relative to the [root]/content/ directory.
 */
const CONTENT_DIRECTORY = "about";

const ContentPageSlug = ({ source, frontMatter }: FrontMatterPageProps) => {
  return (
    <LayoutsBasic
      content={<CanopyMDXRemote {...source} />}
      frontMatter={frontMatter}
    />
  );
};

export async function getStaticPaths() {
  const contentDirectoryPath = path.join(
    process.cwd(),
    `content/${CONTENT_DIRECTORY}`
  );

  const fileNames = fs.readdirSync(contentDirectoryPath);
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: getSlugFromFileName(fileName),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { frontMatter, source } = await getMarkdownContent({
    slug: (params?.slug as string) || "",
    directory: CONTENT_DIRECTORY,
  });

  return {
    props: {
      source,
      frontMatter,
    },
  };
}

export default ContentPageSlug;
