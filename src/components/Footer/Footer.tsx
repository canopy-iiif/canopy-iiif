import { CollectionLink, FooterContent, FooterStyled } from "./Footer.styled";

import Container from "../Shared/Container";
import IIIF from "@components/SVG/IIIF";
import { LocaleString } from "@hooks/useLocale";
import React from "react";
import ThemeMode from "./ThemeMode";

const { collection } = process.env.CANOPY_CONFIG as any;

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterContent>
          <CollectionLink href={collection} target="_blank">
            <IIIF />
            {LocaleString("footerSourceCollection")}
          </CollectionLink>
          <ThemeMode />
        </FooterContent>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
