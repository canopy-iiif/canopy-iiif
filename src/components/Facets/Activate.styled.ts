import { Dialog } from "@radix-ui/themes";
import { styled } from "@styles/stitches";

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
  color: "var(--accent-1)",
  backgroundColor: "var(--accent-12)",
  borderRadius: "50%",
});

const FacetsActivateStyled = styled(Dialog.Trigger, {
  position: "relative",
  right: "0",
  boxShadow: "none",
  transition: "$canopySlideIn",
});

const FacetsActivateFloatingWrapper = styled("div", {
  display: "flex",
  position: "fixed",
  left: "0",
  zIndex: "5",
  width: "100%",

  variants: {
    isScrolling: {
      true: {
        [`${FacetsActivateStyled}`]: {
          right: "50%",
          transform: "translate(50%)",
          backfaceVisibility: "hidden",
          webkitFontSmoothing: "subpixel-antialiased",
          boxShadow: "var(--shadow-5)",
        },
      },
    },
  },
});

export {
  FacetsActivateFloatingWrapper,
  FacetsActivateIndicator,
  FacetsActivateStyled,
};
