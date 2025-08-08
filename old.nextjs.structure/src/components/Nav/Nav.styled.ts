import { styled } from "@styles/stitches";

const Items = styled("div", {
  display: "flex",
  fontFamily: "$sans",
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
          color: "var(--gray-11)",
          padding: "$gr1 0 ",
          marginBottom: "0",

          [`&.active`]: {
            color: "var(--gray-12) !important",
            fontWeight: "700",
          },

          [`&:hover`]: {
            color: "var(--accent-10)",
          },
        },
      },
    },
  },

  "@sm": {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0 $gr3 $gr3",
  },

  a: {
    padding: "$gr1 $gr2",
    display: "inline-flex",
    color: "var(--gray-12)",
    borderRadius: "2rem",
    position: "relative",
    transition: "$canopyAll",
    fontSize: "$gr3",

    "@sm": {
      padding: "0",
      transition: "none",
    },

    [`&:hover`]: {
      color: "var(--accent-10)",
    },

    [`&.active`]: {
      color: "var(--accent-11)",
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
  fontWeight: "500",

  nav: {
    margin: "$gr1 0 $gr2",
    padding: "0 $gr3",
    borderLeft: "3px solid var(--gray-4)",
    fontWeight: "400",

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
