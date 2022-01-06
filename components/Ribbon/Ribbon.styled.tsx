import { styled } from "../../stiches.config";

const Item = styled("div", {
  padding: "1rem 1rem 0.5rem",
});

const Items = styled("div", {
  display: "flex",
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0 1rem",
  width: "auto",
  position: "relative",
});

export { Item, Items, Wrapper };
