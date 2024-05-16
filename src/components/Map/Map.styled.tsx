import { styled } from "@styles/stitches";

const MapStyled = styled("div", {
  height: "100vh",
  width: "100%",
  position: "fixed",
  zIndex: "0",
  top: "0",

  ".map-container": {
    height: "100%",
    width: "100%",
    backgroundColor: "var(--gray-1)",

    figure: {
      width: "100%",
      margin: "0",
      padding: "0",
    },
  },

  ".leafletPopupContentWrapper": {
    backgroundColor: "var(--gray-2)",
  },

  ".leafletPopupContent": {
    margin: 0,
  },

  ".leafletPopupTip": {
    backgroundColor: "var(--accent-a10)",
  },

  ".canopyMapPopup": {
    width: "240px",
    img: {
      maxHeight: "100% !important",
    },
  },

  figure: {
    img: {
      width: "100%",
      maxHeight: "200px",
    },
    video: {
      display: "none",
    },
  },
});

export { MapStyled };
