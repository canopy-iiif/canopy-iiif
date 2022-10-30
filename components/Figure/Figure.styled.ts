import { styled } from "@/stitches";

const LQIP = styled("span", {});

const Wrapper = styled("figure", {
  backgroundColor: "$mauve3",
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
  transition: "$all",

  img: {
    position: "relative",
    zIndex: "1",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transition: "$all",
    opacity: 0,

    [`&.loaded`]: {
      opacity: 1,
    },
  },
});

export { LQIP, Wrapper };
