import { indigoA } from "@radix-ui/colors";
import { styled } from "@/src/styles/stitches";

const CodeStyled = styled("div", {
  position: "relative",

  button: {
    position: "absolute",
    marginTop: "-$gr2",
    right: "$gr3",
  },
});

const CodePre = styled("pre", {
  backgroundColor: "$indigo3",
  padding: "$gr3",
  borderRadius: "5px",
  lineHeight: "1.382em",
  overflowX: "scroll",
  overflowY: "visible",
  boxShadow: `inset 1px 1px 2px  ${indigoA.indigoA3}`,
  zIndex: "0",
});

const CodeInline = styled("code", {
  backgroundColor: "$indigo3",
  padding: "3px $gr1",
  borderRadius: "5px",
  fontSize: "$gr3",
  color: "$indigo11",
  boxShadow: `1px 1px 1px  ${indigoA.indigoA6}`,
});

export { CodeStyled, CodeInline, CodePre };
