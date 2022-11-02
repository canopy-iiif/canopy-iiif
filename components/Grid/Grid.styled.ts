import { styled } from "@/stitches";
import Masonry from "react-masonry-css";

const Item = styled("div", {
  padding: "calc($gr5 / 2)",
  zIndex: "1",
});

const Wrapper = styled(Masonry, {
  display: "flex",
  width: "auto",
  position: "relative",
  padding: "$gr4 $gr2",
  zIndex: "1",

  "@lg": {
    padding: "$gr2",
  },
});

export { Item, Wrapper };
