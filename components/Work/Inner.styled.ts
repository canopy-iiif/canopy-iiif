import { styled } from "@/stitches";

const WorkData = styled("div", {});

const StyledWorkInner = styled("section", {
  maxWidth: "1280px",
  margin: "auto",
  position: "relative",
  paddingTop: "$gr3",

  ".work-summary": {
    fontSize: "$gr5",
    color: "$slate10",
    marginBottom: "$gr5",

    "@sm": {
      fontSize: "$gr4",
      marginBottom: "$gr4",
    },
  },
});

export { StyledWorkInner, WorkData };
