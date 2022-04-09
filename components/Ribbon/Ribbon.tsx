import dynamic from "next/dynamic";

const BloomIIIF = dynamic(() => import("@samvera/bloom-iiif"), {
  ssr: false,
});

const Ribbon = ({ label, children }) => {
  const collectionId: string = "http://localhost:5001/api/collection";

  return (
    <>
      <BloomIIIF collectionId={collectionId} />
      <BloomIIIF collectionId={collectionId} />
      <BloomIIIF collectionId={collectionId} />
    </>
  );
};

export default Ribbon;
