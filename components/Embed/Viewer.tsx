import Viewer from "@/components/Viewer/Viewer";

const EmbedViewer = ({ id }: { id: string }) => {
  return (
    <Viewer
      id={id}
      options={{
        showTitle: true,
        showIIIFBadge: false,
        showInformationToggle: false,
        renderAbout: false,
      }}
    />
  );
};

export default EmbedViewer;
