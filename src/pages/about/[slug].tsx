import { getMarkdownContent, getMarkdownPaths } from "@lib/contentHelpers";

import CanopyMDXRemote from "@src/components/MDX";
import { FrontMatterPageProps } from "@customTypes/content";
import { GetStaticPropsContext } from "next";
import LayoutsBasic from "@src/components/Layouts/Basic";

/**
 * Specifies the relative path of the directory containing the Markdown.
 * This path is relative to the [root]/content/ directory. Modify this value
 * to change the directory that is used to generate pages.
 */
const CONTENT_DIRECTORY = "about";

/**
 * This is a page that is generated from a Markdown file.
 */
const ContentPageSlug = ({ source, frontMatter }: FrontMatterPageProps) => {
  return (
    <LayoutsBasic
      content={<CanopyMDXRemote {...source} />}
      frontMatter={frontMatter}
    />
  );
};

/**
 * This function is called at build time by Next.js. It specifies the paths
 * that should be generated into HTML at build time. It is used to generate
 * the static pages that are generated from Markdown files.
 */
export async function getStaticPaths() {
  return {
    paths: getMarkdownPaths(CONTENT_DIRECTORY),
    fallback: false,
  };
}

/**
 * This function is called at build time by Next.js. It specifies the props
 * that should be passed to the page component. It is used to pass the props
 * that are used to render the static pages that are generated from Markdown
 * files.
 */
export async function getStaticProps({ params }: GetStaticPropsContext) {
  return {
    props: await getMarkdownContent({
      slug: (params?.slug as string) || "",
      directory: CONTENT_DIRECTORY,
    }),
  };
}

export default ContentPageSlug;
