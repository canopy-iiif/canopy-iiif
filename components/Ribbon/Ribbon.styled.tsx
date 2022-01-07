import { styled } from "../../stiches.config";

const Item = styled("div", {
  padding: "1rem 0.5rem 0.5rem",
});

const Items = styled("div", {
  display: "flex",
  overflow: "hidden",
  overflowX: "scroll",
});

const Title = styled("h3", {
  margin: "1rem 0.5rem 0",
  fontWeight: "800",
  color: "$mauve12",
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "1.5rem",
  width: "auto",
  position: "relative",
});

export { Item, Items, Title, Wrapper };
