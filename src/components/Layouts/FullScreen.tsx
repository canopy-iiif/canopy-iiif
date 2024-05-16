import Layout from "@components/layout";
import { LayoutFrontMatter } from "@src/customTypes/content";

const LayoutsBasic = ({ children }: LayoutFrontMatter) => {
  return <Layout hasFooter={false}>{children}</Layout>;
};

export default LayoutsBasic;
