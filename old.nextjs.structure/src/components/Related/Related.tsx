import React from "react";
import Slider from "@components/Viewer/Slider";

interface RelatedProps {
  collections: string[];
}

const Related: React.FC<RelatedProps> = ({ collections }) => {
  return (
    <>
      {collections.map((id) => (
        <Slider iiifContent={id} key={id} />
      ))}
    </>
  );
};

export default Related;
