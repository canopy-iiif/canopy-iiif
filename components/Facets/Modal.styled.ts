import { styled } from "@/stitches";
import * as Dialog from "@radix-ui/react-dialog";
import { slateA } from "@radix-ui/colors";

const FacetsModalContent = styled(Dialog.Content, {
  width: `calc(100% - $gr5 * 2)`,
  maxHeight: `calc(100% - $gr5 * 2)`,
  background: "$slate1",
  position: "fixed",
  top: `$gr5`,
  left: `$gr5`,
  overflowY: "auto",
  zIndex: "10",
  borderRadius: "3px",
  boxShadow: `8px 8px 19px ${slateA.slateA8}`,
});

const FacetsModalContentInner = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const FacetsModalContentHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "$gr4",
});

const FacetsModalContentBody = styled("div", {
  padding: "$gr4",
});

const FacetsModalOverlay = styled(Dialog.Overlay, {
  backgroundColor: "$slateA10",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
  zIndex: "10",
  transition: "$canopyOpacity",
});

const FacetsModalPortal = styled(Dialog.Portal, {});

export {
  FacetsModalContent,
  FacetsModalContentInner,
  FacetsModalContentHeader,
  FacetsModalContentBody,
  FacetsModalOverlay,
  FacetsModalPortal,
};
