import { styled } from "@styles/stitches";

const ResponsiveActions = styled("div", {
  flexGrow: "1",
  display: "none",
  justifyContent: "flex-end",

  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    fontSize: "$gr3",
    height: "calc(($gr1 * 2) + $gr4 + 1px)",
    cursor: "pointer",
  },

  "@sm": {
    display: "flex",
  },
});

const Actions = styled("div", {
  flexGrow: "1",
  display: "flex",
  justifyContent: "flex-end",

  "@sm": {
    flexDirection: "column-reverse",
    backgroundColor: "var(--gray-1)",
    position: "absolute",
    width: "100%",
    padding: "$gr1 0 $gr3",
    overflow: "hidden",
    left: "0",
    top: "-10000px",
    boxShadow: `var(--shadow-4)`,
  },

  variants: {
    showNav: {
      true: {
        top: "calc($gr4 + ($gr2 * 2))",
      },
    },
  },
});

const Content = styled("div", {
  width: "100%",
  padding: "$gr1 $gr5",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  alignItems: "center",
  zIndex: "1",
  boxShadow: `var(--shadow-4)`,
  boxSizing: "border-box",

  "@xl": {
    padding: "$gr1 $gr4",
  },

  "@lg": {
    padding: "$gr1 $gr4",
  },

  "@md": {
    padding: "$gr1 $gr4",
  },

  "@sm": {
    padding: "$gr1 $gr4",
  },

  "@xs": {
    padding: "$gr1 $gr3",
  },

  "@xxs": {
    padding: "$gr1 $gr3",
  },
});

const Wrapper = styled("header", {
  position: "fixed",
  width: "100%",
  zIndex: "10",
  top: "0",
  display: "flex",
  flexDirection: "column",
  transition: "$canopyOpacity",
  opacity: "1",
  backgroundColor: "var(--gray-1)",

  variants: {
    isVisible: {
      false: {
        opacity: "0",
      },
    },
  },
});

export { Actions, Content, ResponsiveActions, Wrapper };
