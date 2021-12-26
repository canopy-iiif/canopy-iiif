import { styled } from "../../stiches.config";

const Content = styled("div", {
  padding: "1rem",

  h4: {
    margin: "0",
    fontWeight: "450",
    textDecoration: "none !important",
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
    backgroundColor: "$mauve1",
    color: "$mauve12",
    boxShadow: "3px 3px 11px #0001",
    textDecoration: "none !important",
    borderRadius: "3px",
    overflow: "hidden",
  },
});

export { Content, Wrapper };
