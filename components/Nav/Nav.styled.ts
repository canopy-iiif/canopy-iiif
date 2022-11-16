import { styled } from "@/stitches";

const Highlight = styled("div", {
  backgroundColor: "$indigo7",
  position: "absolute",
  left: "0",
  height: "calc(($gr1 * 2) + $gr3)",
  borderRadius: "1.618rem",
  transition: "all 100ms ease-in-out",
});

const Items = styled("div", {
  display: "flex",
  alignItems: "center",
  fontSize: "$gr4",
  fontWeight: "800",
  fontFamily: "$bookTight",
  flexGrow: "1",
  justifyContent: "flex-end",

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
  flexGrow: "1",
});

export { Highlight, Items, Wrapper };
