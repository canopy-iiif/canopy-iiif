import React from "react";
import Slider from "@/components/Viewer/Slider";

interface RelatedProps {
  collections: string[];
  title?: string;
}

const Related: React.FC<RelatedProps> = ({
  collections,
  title = "Related Works",
}) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {collections.map((id) => (
        <Slider collectionId={id} key={id} />
      ))}
    </section>
  );
};
export default Related;
