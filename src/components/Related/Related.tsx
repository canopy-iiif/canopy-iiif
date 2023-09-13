import React from "react";
import Slider from "@/components/Viewer/Slider";
import { RelatedStyled } from "./Related.styled";
import Heading from "../Shared/Heading/Heading";

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
      {title && <Heading as="h2">{title}</Heading>}
      {collections.map((id) => (
        <Slider collectionId={id} key={id} />
      ))}
    </RelatedStyled>
  );
};
export default Related;
