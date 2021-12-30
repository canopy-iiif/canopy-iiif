import { styled } from "../../stiches.config";

const Item = styled("div", {
  width: "calc(20% - 2rem)",
  padding: "1rem",
  zIndex: "1",

  "@lg": {
    width: "calc(25% - 2rem)",
  },

  "@md": {
    width: "calc(33.3333% - 2rem)",
  },

  "@sm": {
    width: "calc(50% - 2rem)",
  },

  "@xs": {
    width: "calc(100% - 2rem)",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "auto",
  padding: "1rem 1rem 3rem",
  position: "relative",
  zIndex: "0",
});

export { Item, Wrapper };
