import { styled } from "../../stiches.config";

const Highlight = styled("div", {
  backgroundColor: "$indigo11",
  background: "linear-gradient(90deg, $indigo10 0%, $indigo11 100%)",
  position: "absolute",
  top: "1rem",
  left: "0",
  borderRadius: "2rem",
  height: "2.5rem",
  transition: "all 150ms ease-in-out",
});

const Wrapper = styled("nav", {
  padding: "1rem 2rem",
  margin: "auto auto 1rem",
  position: "relative",
  zIndex: "1",
  backgroundColor: "$mauve12",
  marginLeft: "-1rem",

  a: {
    fontSize: "1.25rem",
    display: "inline-flex",
    marginRight: "0.5rem",
    color: "$mauve8",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "2rem",
    fontWeight: "300",
    position: "relative",
    transition: "all 150ms ease-in-out",

    [`&:hover`]: {
      color: "$indigo1 !important",
    },

    [`&.active`]: {
      fontWeight: "650",
      color: "$mauve1",
    },
  },
});

export { Highlight, Wrapper };
