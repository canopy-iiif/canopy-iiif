import { getMarkdownContent, getMarkdownPaths } from "@lib/contentHelpers";

import CanopyMDXRemote from "@src/components/MDX";
import { FrontMatterPageProps } from "@customTypes/content";
import { GetStaticPropsContext } from "next";
import LayoutsBasicSidebar from "@src/components/Layouts/BasicSidebar";
import { buildContentSEO } from "@src/lib/seo";

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
    <LayoutsBasicSidebar frontMatter={frontMatter}>
      <CanopyMDXRemote source={source} />
    </LayoutsBasicSidebar>
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
  const slug = params?.slug as string;
  const path = `/${CONTENT_DIRECTORY}/${slug}`;
  const { frontMatter, source } = await getMarkdownContent({
    slug,
    directory: CONTENT_DIRECTORY,
  });
  const seo = buildContentSEO(frontMatter, path);

  return {
    props: { frontMatter, seo, source },
  };
}

export default ContentPageSlug;
