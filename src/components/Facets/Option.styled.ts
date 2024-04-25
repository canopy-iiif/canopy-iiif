import * as Checkbox from "@radix-ui/react-checkbox";

import { styled } from "@styles/stitches";

const OptionLabel = styled("label", {
  transition: "$canopyAll",
  cursor: "pointer",
  fontWeight: "500",

  variants: {
    isChecked: {
      true: {
        color: "var(--gray-12) !important",
        fontWeight: "700",
      },
    },
  },

  "&:hover, &:focus": {
    color: "var(--accent-11)",
  },

  span: {
    color: "var(--gray-10) !important",
    fontSize: "$gr1",
  },
});

const OptionCheckbox = styled(Checkbox.Root, {
  position: "relative",
  zIndex: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "$gr3",
  height: "$gr3",
  margin: "0 $gr1 0 0",
  background: "var(--gray-3)",
  boxShadow: "inset var(--shadow-2)",
  border: "none",
  borderRadius: "50%", // 3px for checkbox
  cursor: "pointer",
  transition: "$canopyAll",
  flexShrink: "0",

  "&::before": {
    position: "absolute",
    width: "100%",
    height: "100%",
    content: "",
    background: "linear-gradient(-45deg, var(--accent-11), var(--accent-8))",
    opacity: "0",
    borderRadius: "50%", // 3px for checkbox
    transition: "$canopyAll",
    zIndex: "0",
  },

  "&[aria-checked='true']": {
    "&::before": {
      opacity: "1",
    },
  },
});

const OptionCheckboxIndicator = styled(Checkbox.Indicator, {
  position: "absolute",
  zIndex: "1",
  color: "var(--accent-1)",
  textShadow: `1px 1px 2px var(--accent-a12)`,
});

const OptionStyled = styled("span", {
  display: "flex",
  margin: "0 0 $gr1",
  color: "var(--gray-11)",
  fontSize: "$gr2",

  "&:last-child": {
    margin: "0",
  },
});

export { OptionCheckbox, OptionCheckboxIndicator, OptionLabel, OptionStyled };
