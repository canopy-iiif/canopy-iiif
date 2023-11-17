import Heading from "../Shared/Heading/Heading";
import React from "react";
import { RelatedStyled } from "./Related.styled";
import Slider from "@components/Viewer/Slider";

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
        <Slider iiifContent={id} key={id} />
      ))}
    </RelatedStyled>
  );
};
export default Related;
