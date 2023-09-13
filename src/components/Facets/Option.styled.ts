import * as Checkbox from "@radix-ui/react-checkbox";

import { indigoA } from "@radix-ui/colors";
import { styled } from "@/src/styles/stitches";

const OptionLabel = styled("label", {
  transition: "$canopyAll",
  cursor: "pointer",
  fontWeight: "500",

  variants: {
    isChecked: {
      true: {
        color: "$slate12 !important",
        fontWeight: "800",
      },
    },
  },

  "&:hover, &:focus": {
    color: "$indigo11",
  },

  span: {
    color: "$slate11 !important",
    fontSize: "$gr2",
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
  background: "$slate4",
  boxShadow: "inset 1px 1px 2px #0002",
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
    background: "linear-gradient(-45deg, $indigo11, $indigo8)",
    opacity: "0",
    borderRadius: "50%", // 3px for checkbox
    transition: "$canopyAll",
    zIndex: "0",
  },

  "&[aria-checked='true']": {
    boxShadow: "1px 1px 2px ${indigoA.indigoA4}",

    "&::before": {
      opacity: "1",
    },
  },
});

const OptionCheckboxIndicator = styled(Checkbox.Indicator, {
  position: "absolute",
  zIndex: "1",
  color: "$indigo1",
  textShadow: `1px 1px 2px ${indigoA.indigoA12}`,
});

const OptionStyled = styled("span", {
  display: "flex",
  margin: "0 0 $gr1",
  fontSize: "$gr3",
  color: "$slate11",

  "&:last-child": {
    margin: "0",
  },
});

export { OptionCheckbox, OptionCheckboxIndicator, OptionLabel, OptionStyled };
