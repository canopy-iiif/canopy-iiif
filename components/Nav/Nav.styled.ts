import { styled } from "@/stitches";

const Items = styled("div", {
  display: "flex",
  fontFamily: "$bookTight",
  flexGrow: "0",

  variants: {
    orientation: {
      horizontal: {
        justifyContent: "flex-end",
        fontWeight: "800",
      },
      vertical: {
        flexDirection: "column",
        alignItems: "flex-start",
        fontWeight: "500",
        padding: "0",

        a: {
          color: "$slate10",
          padding: "$gr1 0 $gr2",
          marginBottom: "0",

          [`&.active`]: {
            fontWeight: "800",
            color: "$indigo12 !important",
          },

          [`&:hover`]: {
            color: "$indigo11",
          },
        },
      },
    },
  },

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
    transition: "$canopyAll",

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
  flexDirection: "row",
  alignItems: "center",
  zIndex: "1",
  flexGrow: "0",
  fontSize: "$gr4",

  nav: {
    fontSize: "$gr3",
    paddingLeft: "$gr3",
    marginBottom: "$gr2",
    borderLeft: "1px solid $slate6",
  },
});

export { Items, Wrapper };
