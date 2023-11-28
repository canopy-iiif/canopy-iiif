import { styled } from "@styles/stitches";

const Items = styled("div", {
  display: "flex",
  fontFamily: "$sans",
  fontWeight: "500",
  flexGrow: "0",

  variants: {
    orientation: {
      horizontal: {
        justifyContent: "flex-end",

        a: {
          whiteSpace: "nowrap",
        },
      },
      vertical: {
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 $gr4",

        a: {
          color: "$slate10",
          padding: "$gr1 0 $gr2",
          marginBottom: "0",

          [`&.active`]: {
            color: "$slate12 !important",
          },

          [`&:hover`]: {
            color: "$indigo12",
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
    margin: "$gr2 0",
    padding: "0 $gr3",
    borderLeft: "2px solid $slate4",

    [`& ${Items}`]: {
      paddingBottom: "0",
    },

    "a:first-child": {
      paddingTop: 0,
    },

    "a:last-child": {
      paddingBottom: 0,
    },
  },
});

export { Items, Wrapper };
