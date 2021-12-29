import { styled } from "../../stiches.config";

const Content = styled("div", {});

const Title = styled("span", {
  fontWeight: "650",
});

const Wrapper = styled("header", {
  position: "fixed",
  zIndex: "1",
  top: "0",
  width: "calc(100% - 4rem)",
  backgroundColor: "$indigo12",
  background: "linear-gradient(90deg, $indigo12 0%, $mauve12 100%)",
  padding: "1rem 2rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  color: "$indigo1",
  boxShadow: "3px 3px 8px #0002",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  alignItems: "center",

  [`&  ${Title} a`]: {
    textDecoration: "none",
    color: "$indigo1",
  },

  nav: {
    a: {
      fontWeight: "350",
      display: "inline-flex",
      fontSize: "1rem",
      marginRight: "1.25rem",
      lineHeight: "1.25rem",
      color: "$indigo6",
      textDecoration: "none",
    },
  },
});

export { Content, Title, Wrapper };
