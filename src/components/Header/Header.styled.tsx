import { slateA } from "@radix-ui/colors";
import { styled } from "@/src/styles/stitches";

const Title = styled("span", {
  display: "flex",
  marginRight: "$gr2",
  fontFamily: "$display",
  fontSize: "$gr6",
  fontWeight: "400",
  letterSpacing: "-0.01em",

  "@sm": {
    marginRight: "0",
  },
});

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
    backgroundColor: "$slate1",
    position: "absolute",
    width: "100%",
    padding: "$gr1 0 $gr3",
    overflow: "hidden",
    left: "0",
    top: "-10000px",
    boxShadow: `1px 2px 2px ${slateA.slateA4}`,
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
  backgroundColor: "$slate1",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  color: "$slate1",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  alignItems: "center",
  zIndex: "1",
  boxShadow: `1px 1px 3px ${slateA.slateA6}`,
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

  [`&  ${Title} a`]: {
    textDecoration: "none",
    color: "$slate12",

    "&:hover, &:focus": {
      color: "$indigo10",
    },
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

  variants: {
    isVisible: {
      false: {
        opacity: "0",
      },
    },
  },
});

export { Actions, Content, ResponsiveActions, Title, Wrapper };
