import React from "react";
import Slider from "@/components/Viewer/Slider";
import { RelatedStyled } from "./Related.styled";

interface RelatedProps {
  collections: string[];
  title?: string;
}

const Related: React.FC<RelatedProps> = ({
  collections,
  title = "Related Works",
}) => {
  return (
    <RelatedStyled>
      {title && <h2>{title}</h2>}
      {collections.map((id) => (
        <Slider collectionId={id} key={id} />
      ))}
    </RelatedStyled>
  );
};
export default Related;
