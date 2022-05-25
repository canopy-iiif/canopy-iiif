import { styled } from "@/stiches.config";

const Highlight = styled("div", {
  backgroundColor: "$indigo11",
  background: "linear-gradient(90deg, $indigo10 0%, $indigo11 100%)",
  position: "absolute",
  top: "0.25rem",
  left: "0",
  borderRadius: "2rem",
  height: "2rem",
  transition: "all 100ms ease-in-out",
});

const Items = styled("div", {
  display: "flex",
  alignItems: "center",
  marginRight: "0.5rem",

  a: {
    display: "inline-flex",
    color: "$indigo7",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    marginRight: "0.5rem",
    borderRadius: "2rem",
    fontWeight: "300",
    position: "relative",
    transition: "all 100ms ease-in-out",

    [`&:hover`]: {
      color: "$indigo1 !important",
    },

    [`&.active`]: {
      fontWeight: "500",
      color: "$mauve1",
    },
  },
});

const Wrapper = styled("nav", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  zIndex: "1",
});

export { Highlight, Items, Wrapper };
