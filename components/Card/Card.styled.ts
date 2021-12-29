import { styled } from "../../stiches.config";

const Content = styled("div", {
  padding: "1rem 0",

  h4: {
    margin: "0",
    fontWeight: "775",
    fontSize: "1.1rem",
    textDecoration: "none !important",
  },

  span: {
    display: "block",
    margin: "0.25rem 0 0",
    fontSize: "0.8333rem",
    color: "$mauve10",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  width: "100%",
  position: "relative",

  a: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    color: "$mauve12",
    textDecoration: "none !important",
  },
});

export { Content, Wrapper };
