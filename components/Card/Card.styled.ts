import { styled } from "../../stiches.config";

const Wrapper = styled("div", {
  display: "flex",
  width: "25%",
  position: "relative",
  margin: "1rem",

  a: {
    display: "flex",
    width: "100%",
    padding: "1rem",
    backgroundColor: "$mauve1",
    color: "$mauve12",
    boxShadow: "5px 5px 13px #0001",
  },
});

export { Wrapper };
