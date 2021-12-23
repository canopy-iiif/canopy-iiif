import { styled } from "../../stiches.config";

const Item = styled("div", {
  width: "calc(25% - 2rem)",
  margin: "1rem",

  "@lg": {
    width: "calc(33.3333% - 2rem)",
  },

  "@md": {
    width: "calc(50% - 2rem)",
  },

  "@sm": {
    width: "calc(100% - 2rem)",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "1rem",
});

export { Item, Wrapper };
