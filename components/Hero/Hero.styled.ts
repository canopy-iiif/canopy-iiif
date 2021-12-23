import { styled } from "../../stiches.config";

const Figure = styled("figure", {
  padding: "0",
  margin: "0",
  width: "100%",
  overflow: "hidden",

  img: {
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "400px",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  position: "relative",
});

export { Figure, Wrapper };
