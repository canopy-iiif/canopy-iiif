import { styled } from "@/stitches";

const Highlight = styled("div", {
  backgroundColor: "$indigo7",
  position: "absolute",
  left: "0",
  height: "calc(($gr1 * 2) + $gr3)",
  borderRadius: "1.618rem",
  transition: "all 100ms ease-in-out",

  "@sm": {
    display: "none",
  },
});

const Items = styled("div", {
  display: "flex",
  alignItems: "center",
  fontSize: "$gr4",
  fontWeight: "800",
  fontFamily: "$bookTight",
  flexGrow: "0",
  justifyContent: "flex-end",

  "@sm": {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "$gr1 $gr4 $gr3",
    fontWeight: "500",
  },

  a: {
    padding: "$gr2 $gr3",
    display: "inline-flex",
    color: "$slate12",
    textDecoration: "none",
    borderRadius: "2rem",
    position: "relative",
    transition: "all 100ms ease-in-out",

    "@sm": {
      padding: "0",
      marginBottom: "$gr2",
      transition: "none",
    },

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
  flexGrow: "0",
});

export { Highlight, Items, Wrapper };
