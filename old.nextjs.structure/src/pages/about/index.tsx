import CanopyMDXRemote from "@src/components/MDX";
import { FrontMatterPageProps } from "@customTypes/content";
import LayoutsBasicSidebar from "@src/components/Layouts/BasicSidebar";
import { buildContentSEO } from "@src/lib/seo";
import { getMarkdownContent } from "@lib/contentHelpers";

/**
 * Specifies the relative path of the directory containing the Markdown.
 * This path is relative to the [root]/content/ directory. Modify this value
 * to change the directory that is used to generate the page.
 */
const CONTENT_DIRECTORY = "about";

/**
 * This is a page that is generated from a Markdown file.
 */
const ContentPage = ({ source, frontMatter }: FrontMatterPageProps) => {
  return (
    <LayoutsBasicSidebar frontMatter={frontMatter}>
      <CanopyMDXRemote source={source} />
    </LayoutsBasicSidebar>
  );
};

/**
 * This function is called at build time by Next.js. It specifies the props
 * that should be passed to the page component. It is used to pass the props
 * that are used to render the static pages that are generated from Markdown
 * files.
 */
export async function getStaticProps() {
  const path = `/${CONTENT_DIRECTORY}`;
  const { frontMatter, source } = await getMarkdownContent({
    slug: "index",
    directory: CONTENT_DIRECTORY,
  });
  const seo = buildContentSEO(frontMatter, path);

  return {
    props: { frontMatter, seo, source },
  };
}

export default ContentPage;
