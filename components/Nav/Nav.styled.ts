import { styled } from "../../stiches.config";

const Highlight = styled("div", {
  backgroundColor: "$indigo11",
  background: "linear-gradient(90deg, $indigo10 0%, $indigo11 100%)",
  position: "absolute",
  top: "0.375rem",
  left: "0",
  borderRadius: "2rem",
  height: "2rem",
  transition: "all 150ms ease-in-out",
});

const Wrapper = styled("nav", {
  position: "relative",
  zIndex: "1",

  a: {
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
