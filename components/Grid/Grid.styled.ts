import { styled } from "../../stiches.config";
import Masonry from "react-masonry-css";

const Item = styled("div", {
  padding: "1rem 1rem 0.5rem",
  zIndex: "1",
});

const Wrapper = styled(Masonry, {
  display: "flex",
  margin: "0 1rem",
  width: "auto",
});

export { Item, Wrapper };
