import { styled } from "@/stitches";
import Masonry from "react-masonry-css";

const Item = styled("div", {
  paddingBottom: "$gr4",
  zIndex: "1",
});

const Wrapper = styled(Masonry, {
  display: "flex",
  width: "auto",
  position: "relative",
  padding: "$gr4",
  zIndex: "1",

  ".canopy-grid-column": {
    marginLeft: "$gr4",

    "&:first-child": {
      marginLeft: "0",
    },
  },
});

export { Item, Wrapper };
