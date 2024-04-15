import { ScrollArea } from "@radix-ui/themes";
import { styled } from "@styles/stitches";

const CodeStyled = styled(ScrollArea, {
  backgroundColor: "var(--accent-2)",
  boxShadow: `inset 1px 1px 2px var(--accent-a4)`,
  position: "relative",
  maxHeight: "61.8vh",
  borderRadius: "max(var(--radius-1))",
  button: {
    position: "absolute",
    marginTop: "$gr3",
    right: "$gr3",
  },
});

const CodePre = styled("pre", {
  color: "var(--accent-11)",
  fontSize: "$gr2",
  padding: "$gr2 $gr3 ",
  lineHeight: "1.382em",
  zIndex: "0",
});

const CodeInline = styled("code", {
  backgroundColor: "var(--accent-2)",
  color: "var(--accent-11)",
  padding: "3px $gr1",
  borderRadius: "max(var(--radius-1), var(--radius-full))",
  fontSize: "$gr2",
  boxShadow: `1px 1px 1px var(--accent-a4)`,
});

export { CodeStyled, CodeInline, CodePre };
