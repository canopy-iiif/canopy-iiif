import {styled} from "@styles/stitches.ts";

const CardStyled = styled("div", {
  paddingBottom: "$gr4",
  zIndex: "1",

  "@xxs": {
    paddingBottom: "$gr2",
  },

  "@xs": {
    paddingBottom: "$gr2",
  },

  "@sm": {
    paddingBottom: "$gr3",
  },

  "@md": {
    paddingBottom: "$gr3",
  },
});

export { CardStyled };