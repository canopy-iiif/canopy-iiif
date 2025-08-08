import FrontMatterContext from "@src/context/front-matter";
import Layout from "@components/layout";
import { LayoutFrontMatter } from "@src/customTypes/content";

const LayoutsBasic = ({ children, frontMatter }: LayoutFrontMatter) => {
  return (
    <Layout>
      <FrontMatterContext.Provider value={frontMatter}>
        {children}
      </FrontMatterContext.Provider>
    </Layout>
  );
};

export default LayoutsBasic;
