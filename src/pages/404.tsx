import CanopyMDXRemote from "@src/components/MDX";
import LayoutsBasic from "@src/components/Layouts/Basic";
import { MDXRemoteSource } from "@customTypes/content";
import React from "react";
import { getMarkdownContent } from "@src/lib/contentHelpers";

interface PageNotFoundProps {
  frontMatter: {
    [key: string]: any;
  };
  source: MDXRemoteSource;
}

const PageNotFound: React.FC<PageNotFoundProps> = ({ frontMatter, source }) => {
  return (
    <LayoutsBasic
      content={<CanopyMDXRemote {...source} />}
      frontMatter={frontMatter}
    />
  );
};

export async function getStaticProps() {
  const { frontMatter, source } = await getMarkdownContent({
    slug: "404",
    directory: "",
  });

  return {
    props: {
      frontMatter,
      source,
    },
  };
}

export default PageNotFound;
