import { styled } from "@/stitches";
import * as Dialog from "@radix-ui/react-dialog";

const FacetsActivateStyled = styled(Dialog.Trigger, {
  position: "relative",
  right: "0",
  transition: "$canopySlideIn",
  boxShadow: "none",
});

export { FacetsActivateStyled };
