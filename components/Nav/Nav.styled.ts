import { styled } from "@/stitches";

const Highlight = styled("div", {
  backgroundColor: "$indigo4",
  position: "absolute",
  left: "0",
  height: "calc(($gr1 * 2) + $gr3)",
  borderRadius: "2rem",
  transition: "all 100ms ease-in-out",
});

const Items = styled("div", {
  display: "flex",
  alignItems: "center",
  fontSize: "$gr4",
  fontWeight: "500",
  fontFamily: "$bookTight",

  a: {
    padding: "$gr2 $gr3",
    display: "inline-flex",
    color: "$slate12",
    textDecoration: "none",
    borderRadius: "2rem",
    position: "relative",
    transition: "all 100ms ease-in-out",

    [`&:hover`]: {
      color: "$indigo11 !important",
    },

    [`&.active`]: {
      color: "$indigo11",
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
