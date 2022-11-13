import { styled } from "@/stitches";

const WorkData = styled("div", { padding: "0 1.618rem 2rem" });

const StyledWorkInner = styled("section", {
  maxWidth: "1280px",
  margin: "auto",
  position: "relative",
  padding: "$gr5 0",

  h1: {
    fontSize: "$gr8",
    fontFamily: "$bookTight",
    fontWeight: "800",
    margin: "$gr2 0",
  },

  ".work-summary": {
    fontSize: "$gr5",
    color: "$slate11",
    marginBottom: "$gr5",
  },
});

export { StyledWorkInner, WorkData };
