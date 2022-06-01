import { styled } from "@/stiches.config";

const WorkData = styled("div", { padding: "0 1.618rem 2rem" });

const StyledWorkInner = styled("section", {
  maxWidth: "1280px",
  margin: "auto",
  position: "relative",
  padding: "1rem 0 0",

  dl: {
    dt: {
      fontSize: "0.75rem",
      fontWeight: "bold",
      paddingBottom: "0.5rem",
      textTransform: "uppercase",
    },
    dd: {
      marginInlineStart: "0",
      paddingBottom: "1.25rem",
    }
  },
});

export { StyledWorkInner, WorkData };