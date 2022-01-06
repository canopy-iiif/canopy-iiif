import { styled } from "../../stiches.config";

const Item = styled("div", {
  padding: "1rem 1rem 0.5rem",
});

const Items = styled("div", {
  display: "flex",
});

const Title = styled("h3", {
  margin: "1rem 1rem 0",
  fontWeight: "300",
  color: "$mauve10",
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0 1rem 1rem",
  width: "auto",
  position: "relative",
});

export { Item, Items, Title, Wrapper };
