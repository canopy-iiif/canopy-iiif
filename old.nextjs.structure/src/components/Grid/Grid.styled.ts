import Masonry from "react-masonry-css";
import { styled } from "@styles/stitches";

const GridItem = styled("div", {
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

const GridStyled = styled(Masonry, {
  display: "flex",
  width: "auto",
  position: "relative",
  padding: "$gr2 0",
  zIndex: "1",

  ".canopy-grid-column": {
    marginLeft: "$gr4",

    "@xxs": {
      marginLeft: "$gr2",
    },

    "@xs": {
      marginLeft: "$gr2",
    },

    "@sm": {
      marginLeft: "$gr3",
    },

    "@md": {
      marginLeft: "$gr3",
    },

    "&:first-child": {
      marginLeft: "0",
    },
  },
});

export { GridItem, GridStyled };
