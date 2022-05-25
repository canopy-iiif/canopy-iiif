import { styled } from "@/stiches.config";

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
  transition: "all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",

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
