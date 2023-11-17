import { styled } from "@styles/stitches";

const WorkData = styled("div", {});

const StyledWorkInner = styled("section", {
  maxWidth: "1280px",
  margin: "auto",
  position: "relative",
  paddingTop: "$gr3",

  ".work-summary": {
    fontSize: "$gr5",
    fontFamily: "$sans",
    fontWeight: "300",
    color: "$slate11",
    marginBottom: "$gr4",

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
  },

  aside: {
    width: "38.2%",
    flexShrink: 0,
    padding: "$gr3 0 $gr2 $gr6",
  },
});

export { StyledWorkInner, WorkData };
