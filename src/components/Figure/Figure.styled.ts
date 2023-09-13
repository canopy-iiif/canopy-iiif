import { styled } from "@/src/styles/stitches";

const Image = styled("img", {
  position: "relative",
  zIndex: "1",
  width: "100%",
  height: "100%",
  objectFit: "contain",
  transition: "$canopyAll",
  opacity: 0,

  [`&.loaded`]: {
    opacity: 1,
  },
});

const Wrapper = styled("figure", {
  backgroundColor: "$slate6",
  display: "flex",
  width: "100%",
  height: "100%",
  padding: "0",
  margin: "0",
  position: "relative",
  overflow: "hidden",
  zIndex: "0",
  borderRadius: "3px",
  boxShadow: "2px 2px 5px #0001",
  transition: "$canopyAll",
});

export { Image, Wrapper };
