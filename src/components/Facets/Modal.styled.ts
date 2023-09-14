import * as Dialog from "@radix-ui/react-dialog";

import { maxWidths } from "@/styles/theme/containers";
import { slateA } from "@radix-ui/colors";
import { styled } from "@/src/styles/stitches";

const FacetsModalContent = styled(Dialog.Content, {
  width: `calc(100% - $gr5 * 2)`,
  maxWidth: maxWidths.default,
  maxHeight: `calc(100% - $gr5 * 2)`,
  background: "$slate2",
  position: "fixed",
  top: `$gr5`,
  left: `50%`,
  overflowY: "auto",
  zIndex: "10",
  borderRadius: "3px",
  boxShadow: `5px 5px 13px ${slateA.slateA7}`,
  borderTop: "1px solid $slateA1",
  borderBottom: "1px solid $slateA4",
  transform: "translateX(-50%)",
  overflow: "clip",
  display: "flex",

  "@lg": {
    width: `calc(100% - $gr4 * 2)`,
    maxHeight: `calc(100% - $gr4 * 2)`,
    top: `$gr4`,
  },

  "@sm": {
    width: `calc(100% - $gr3 * 2)`,
    maxHeight: `calc(100% - $gr3 * 2)`,
    top: `$gr3`,
  },
});

const FacetsModalContentInner = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  width: "100%",
  overflow: "scroll",
});

const FacetsModalContentHeader = styled("header", {
  display: "flex",
  flexGrow: "0",
  justifyContent: "space-between",
  padding: "$gr3 $gr4",
  color: "$slate9",
  fontSize: "$gr3",
  fontFamily: "$display",
  fontWeight: "300",
  alignItems: "center",

  "@sm": {
    padding: "$gr2 $gr3",
  },
});

const FacetsModalContentFooter = styled("footer", {
  display: "flex",
  flexGrow: "0",
  justifyContent: "space-between",
  padding: "$gr3 $gr4",

  "@sm": {
    padding: "$gr2 $gr3",
  },
});

const FacetsModalContentBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexGrow: "1",
  borderTop: "1px solid $slate4",
  borderBottom: "1px solid $slate4",
  overflowY: "scroll !important",
  padding: "$gr3 $gr4",

  "@sm": {
    padding: "$gr2 $gr3",
  },
});

const FacetsModalTitle = styled(Dialog.Title, {});

const FacetsModalClose = styled(Dialog.Close, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: "50%",
  color: "$slate10",
  background: "transparent",
  cursor: "pointer",
  width: "$gr4",
  height: "$gr4",
  transition: "$canopyAll",
});

const FacetsModalOverlay = styled(Dialog.Overlay, {
  backgroundColor: "$slateA8",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
  zIndex: "10",
  transition: "$canopyAll",

  "&:hover": {
    backgroundColor: "$slateA9",
  },

  "&::after": {
    position: "fixed",
    zIndex: "11",
    background: "linear-gradient(180deg, $slate2, #0000)",
    width: "100%",
    height: "$gr9",
    left: "0",
    top: "0",
    content: "",
  },
});

const FacetsModalPortal = styled(Dialog.Portal, {});

export {
  FacetsModalClose,
  FacetsModalContent,
  FacetsModalContentFooter,
  FacetsModalContentInner,
  FacetsModalContentHeader,
  FacetsModalContentBody,
  FacetsModalOverlay,
  FacetsModalPortal,
  FacetsModalTitle,
};
