import * as Dialog from "@radix-ui/react-dialog";

import { styled } from "@/src/styles/stitches";

const FacetsActivateIndicator = styled("span", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "-$gr1",
  right: "$gr2",
  width: "$gr3",
  height: "$gr3",
  fontSize: "$gr1",
  color: "$indigo1",
  backgroundColor: "$indigo12",
  borderRadius: "50%",
});

const FacetsActivateStyled = styled(Dialog.Trigger, {
  position: "relative",
  right: "0",
  transition: "$canopySlideIn",
  boxShadow: "none",
});

export { FacetsActivateIndicator, FacetsActivateStyled };
