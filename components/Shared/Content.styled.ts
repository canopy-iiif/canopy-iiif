import { styled } from "@/stitches";
import { headerHeight } from "@/styles/global";

/* eslint sort-keys: 0 */

const AsideFixedContent = styled("div", {
  position: "fixed",
  width: "300px",
  paddingTop: "calc($gr4 + $gr3)",
  marginTop: "-$gr4",
  maxHeight: `calc(100% - $gr5 - ${headerHeight}px)`,
  overflow: "scroll",

  "@md": {
    width: "240px",
  },

  "@xs": {
    position: "relative",
    width: "100%",
    maxHeight: "auto",
    paddingTop: "0",
    marginTop: "0",
  },
});

const AsideStyled = styled("aside", {
  width: "300px",

  "@md": {
    width: "240px",
  },

  "@xs": {
    position: "relative",
    width: "100%",
    marginTop: "0",
    paddingBottom: "$gr2",
    borderBottom: "1px solid $slate6",
  },
});

const ContentStyled = styled("div", {
  flexShrink: 1,
  width: "calc(100% - 300px)",

  "@md": {
    width: "calc(100% - 240px)",
  },

  "@xs": {
    width: "100%",
  },
});

const ContentWrapper = styled("div", {
  position: "relative",
  width: "100%",
  padding: "$gr4 0",
  display: "flex",

  variants: {
    aside: {
      true: {
        "@xs": {
          flexDirection: "column",
        },
      },
    },
  },

  "@md": {
    padding: "$gr2 0",
  },
});

export { AsideFixedContent, AsideStyled, ContentStyled, ContentWrapper };
