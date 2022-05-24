import { styled } from "@/stiches.config";
import Masonry from "react-masonry-css";

const Item = styled("div", {
  padding: "1rem 1rem 0.5rem",
  zIndex: "1",
});

const Wrapper = styled(Masonry, {
  display: "flex",
  margin: "0 1rem",
  padding: "2rem 0 ",
  width: "auto",
  position: "relative",
  zIndex: "1",
});

export { Item, Wrapper };
