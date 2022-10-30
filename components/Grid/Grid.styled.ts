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
  zIndex: "1",
});

export { Item, Wrapper };
