import { styled } from "@/stitches";

const MapStyled = styled("div", {
  height: "100vh",
  position: "relative",
  zIndex: "0",

  ".map-container": {
    height: "100%",
    width: "100%",
    figure: {
      width: "100%",
      margin: "0",
      padding: "0",
    },
  },
});

export { MapStyled };