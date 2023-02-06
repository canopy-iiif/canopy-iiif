import React from "react";
import IIIF from "@/components/SVG/IIIF";
import ThemeMode from "./ThemeMode";
import { CollectionLink, FooterContent, FooterStyled } from "./Footer.styled";
import Container from "../Shared/Container";

const { collection } = process.env.CANOPY_CONFIG;

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterContent>
          <CollectionLink href={collection} target="_blank">
            <IIIF />
            Source Collection
          </CollectionLink>
          <ThemeMode />
        </FooterContent>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
