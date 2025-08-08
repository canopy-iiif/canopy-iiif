import Scroll from "@components/Viewer/Scroll";

const MDXScroll = ({ iiifContent }: { iiifContent: string }) => {
  return <Scroll iiifContent={iiifContent} options={{ offset: 90 }} />;
};

export default MDXScroll;
