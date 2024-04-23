import Layout from "@components/layout";

const LayoutsWork = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <Layout>{children}</Layout>;
};

export default LayoutsWork;
