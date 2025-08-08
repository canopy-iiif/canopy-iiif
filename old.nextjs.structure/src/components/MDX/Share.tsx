import Share from "@components/Viewer/Share";

const MDXShare = ({ iiifContent }: { iiifContent: string }) => {
  return <Share iiifContent={iiifContent} />;
};

export default MDXShare;
