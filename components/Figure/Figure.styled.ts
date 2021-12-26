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
    zIndex: "0",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  },

  img: {
    position: "relative",
    zIndex: "1",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transition: "all 500ms ease-in-out",
    opacity: 0,

    [`&.loaded`]: {
      opacity: 1,
    },
  },
});

export { LQIP, Wrapper };
