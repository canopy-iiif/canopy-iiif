import Viewer from "@/components/Viewer/Viewer";

const defaultOptions = {
  showTitle: true,
  showIIIFBadge: false,
  informationPanel: {
    open: false,
    renderToggle: false,
  },
};

const EmbedViewer = ({
  iiifContent,
  options = defaultOptions,
}: {
  iiifContent: string;
  options: any;
}) => {
  return <Viewer iiifContent={iiifContent} options={options} />;
};

export default EmbedViewer;
