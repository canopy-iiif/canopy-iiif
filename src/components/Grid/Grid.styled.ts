import Masonry from "react-masonry-css";
import { styled } from "@/src/styles/stitches";

const GridItem = styled("div", {
  paddingBottom: "$gr5",
  zIndex: "1",

  "@xxs": {
    paddingBottom: "$gr3",
  },

  "@xs": {
    paddingBottom: "$gr3",
  },

  "@sm": {
    paddingBottom: "$gr4",
  },

  "@md": {
    paddingBottom: "$gr4",
  },
});

const GridStyled = styled(Masonry, {
  display: "flex",
  width: "auto",
  position: "relative",
  padding: "$gr2 0",
  zIndex: "1",

  ".canopy-grid-column": {
    marginLeft: "$gr5",

    "@xxs": {
      marginLeft: "$gr3",
    },

    "@xs": {
      marginLeft: "$gr3",
    },

    "@sm": {
      marginLeft: "$gr4",
    },

    "@md": {
      marginLeft: "$gr4",
    },

    "&:first-child": {
      marginLeft: "0",
    },
  },
});

export { GridItem, GridStyled };
