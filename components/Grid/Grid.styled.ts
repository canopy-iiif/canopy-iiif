import { styled } from "../../stiches.config";

const Item = styled("div", {
  width: "calc(20% - 2rem)",
  padding: "1rem",

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
  padding: "1rem",
});

export { Item, Wrapper };
