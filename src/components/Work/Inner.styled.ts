import { styled } from "@styles/stitches";

const WorkData = styled("div", {});

const StyledWorkInner = styled("section", {
  maxWidth: "1280px",
  margin: "auto",
  position: "relative",
  paddingTop: "$gr3",

  h1: {
    fontFamily: "$display",
    fontSize: "$gr7",
    letterSpacing: "-0.025em",
    lineHeight: "1.1em",
    margin: "$gr3 0",

    "@sm": {
      fontSize: "$gr5",
      marginBottom: "$gr4",
    },
  },

  ".work-summary": {
    fontSize: "$gr5",
    fontWeight: "300",
    marginBottom: "$gr3",

    "@sm": {
      fontSize: "$gr4",
      marginBottom: "$gr4",
    },
  },

  "dl, .work-summary": {
    img: {
      maxHeight: "$gr5 !important",
      margin: "$gr1 0",

      "@sm": {
        maxHeight: "$gr4 !important",
      },
    },
    ul: {
      listStyle: "none",
      listStyleType: "none",
      margin: "0",
      paddingInlineStart: "0px",
    }
  },

  aside: {
    width: "38.2%",
    flexShrink: 0,
    padding: "$gr3 0 $gr2 $gr6",
  },
});

export { StyledWorkInner, WorkData };
