import { styled } from "@/stitches";

/* eslint sort-keys: 0 */

const AsideStyled = styled("aside", {
  position: "fixed",
  width: "300px",
  marginTop: "$gr4",

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

const ContentStyled = styled("div", {});

const ContentWrapper = styled("div", {
  position: "relative",
  width: "100%",
  padding: "$gr4 0",

  variants: {
    aside: {
      true: {
        [`${ContentStyled}`]: {
          marginLeft: "300px",

          "@md": {
            marginLeft: "240px",
          },

          "@xs": {
            marginLeft: "0",
          },
        },
      },
    },
  },

  "@md": {
    padding: "$gr2 0",
  },
});

export { AsideStyled, ContentStyled, ContentWrapper };
