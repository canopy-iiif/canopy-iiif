import { styled } from "../../stiches.config";

const LQIP = styled("span", {});

const Wrapper = styled("figure", {
  backgroundColor: "$mauve9",
  width: "100%",
  height: "100%",
  padding: "0",
  margin: "0",
  position: "relative",
  overflow: "hidden",
  zIndex: "0",

  [`& ${LQIP}`]: {
    display: "block",
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    zIndex: "0",
    opacity: 0,
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "relative",
    zIndex: "1",
    transition: "all opacity 3000ms",
    opacity: 0,

    [`&.loaded`]: {
      opacity: 1,
    },
  },
});

export { LQIP, Wrapper };
