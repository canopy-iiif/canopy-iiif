import { styled } from "../../stiches.config";

const Figure = styled("figure", {
  backgroundColor: "$mauve8",
  width: "100%",
  height: "150px",
  padding: "0",
  margin: "0",
});

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
  width: "calc(25% - 1rem)",
  position: "relative",
  margin: "0.5rem",

  a: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "$mauve1",
    color: "$mauve12",
    boxShadow: "3px 3px 11px #0002",
    textDecoration: "none !important",
    borderRadius: "3px",
    overflow: "hidden",
  },
});

export { Content, Figure, Wrapper };
