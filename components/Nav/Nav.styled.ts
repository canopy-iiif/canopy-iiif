import { styled } from "@/stitches";

const Highlight = styled("div", {
  backgroundColor: "$indigo10",
  position: "absolute",
  left: "0",
  height: "calc(($gr1 * 2) + $gr3)",
  borderRadius: "2rem",
  transition: "all 100ms ease-in-out",
  boxShadow: "1px 1px 2px #0005",
});

const Items = styled("div", {
  display: "flex",
  alignItems: "center",
  fontSize: "$gr4",
  fontWeight: "300",
  fontFamily: "$sans",

  a: {
    padding: "$gr2 $gr3",
    display: "inline-flex",
    color: "$indigo7",
    textDecoration: "none",
    borderRadius: "2rem",
    position: "relative",
    transition: "all 100ms ease-in-out",

    [`&:hover`]: {
      color: "$indigo1 !important",
    },

    [`&.active`]: {
      color: "$indigo1",
    },
  },
});

const Wrapper = styled("nav", {
  position: "relative",
  display: "flex",
  marginRight: "$gr4",
  alignItems: "center",
  zIndex: "1",
});

export { Highlight, Items, Wrapper };
