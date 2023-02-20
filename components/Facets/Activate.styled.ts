import { styled } from "@/stitches";
import * as Dialog from "@radix-ui/react-dialog";

const FacetsActivateStyled = styled(Dialog.Trigger, {
  position: "relative",
  left: "0",
  transition: "$canopySlideIn",
  minWidth: "$gr7",
  boxShadow: "none",
});

export { FacetsActivateStyled };
