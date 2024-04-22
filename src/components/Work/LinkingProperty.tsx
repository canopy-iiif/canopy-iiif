import React from "react";
import {
  Homepage,
  PartOf,
  Rendering,
  SeeAlso
} from "@samvera/clover-iiif/primitives";
import { LocaleString } from "@hooks/useLocale";
import { styled } from "@styles/stitches";

const LinkingProperty = ({ value, kind }: { value: any, kind: string }) => {
  return (
    <StyledLinkingProperty>
      {kind === "homepage" && (
        <>
          <dt>{LocaleString("primitiveHomepage")}</dt>
          <dd>
            <Homepage homepage={value}/>
          </dd>
        </>
      )}
      {kind === "partOf" && (
        <>
          <dt>{LocaleString("primitivePartOf")}</dt>
          <dd>
            <PartOf partOf={value}/>
          </dd>
        </>
      )}
      {kind === "rendering" && (
        <>
          <dt>{LocaleString("primitiveRendering")}</dt>
          <dd>
            <Rendering rendering={value}/>
          </dd>
        </>
      )}
      {kind === "seeAlso" && (
        <>
          <dt>{LocaleString("primitiveSeeAlso")}</dt>
          <dd>
            <SeeAlso seeAlso={value}/>
          </dd>
        </>
      )}
    </StyledLinkingProperty>
  );
};

export default LinkingProperty;

const StyledLinkingProperty = styled("dl", {
    a: {
      color: "var(--accent-11)",
      textDecoration: "none",
    },
    li: {
      padding: "0",
    },
  }
);