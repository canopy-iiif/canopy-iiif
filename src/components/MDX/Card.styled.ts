import {styled} from "@styles/stitches.ts";

const CardStyled = styled("div", {
  paddingBottom: "$gr4",
  zIndex: "1",

  "@md": {
    paddingBottom: "$gr3",
  },

  "@xs": {
    paddingBottom: "$gr2",
  },

export { CardStyled };