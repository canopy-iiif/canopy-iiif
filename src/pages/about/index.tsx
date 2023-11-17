import CanopyMDXRemote from "@src/components/MDX";
import { FrontMatterPageProps } from "@customTypes/content";
import LayoutsBasic from "@src/components/Layouts/Basic";
import { getMarkdownContent } from "@lib/contentHelpers";

/**
 * Specifies the relative path of the directory containing the Markdown.
 * This path is relative to the [root]/content/ directory.
 */
const CONTENT_DIRECTORY = "about";

const ContentPage = ({ source, frontMatter }: FrontMatterPageProps) => {
  return (
    <LayoutsBasic
      content={<CanopyMDXRemote {...source} />}
      frontMatter={frontMatter}
    />
  );
};

export async function getStaticProps() {
  const { frontMatter, source } = await getMarkdownContent({
    slug: "index",
    directory: CONTENT_DIRECTORY,
  });

  return {
    props: {
      source,
      frontMatter,
    },
  };
}

export default ContentPage;
