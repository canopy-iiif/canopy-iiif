import { styled } from "../../stiches.config";

const Wrapper = styled("figure", {
  backgroundColor: "$mauve9",
  width: "100%",
  height: "150px",
  padding: "0",
  margin: "0",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

export { Wrapper };
