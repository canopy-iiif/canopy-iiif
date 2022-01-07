import { styled } from "../../stiches.config";

const Content = styled("div", {});

const Title = styled("span", {
  fontWeight: "300",
});

const Wrapper = styled("header", {
  position: "fixed",
  zIndex: "2",
  top: "0",
  width: "calc(100% - 4rem)",
  backgroundColor: "$indigo12",
  background: "linear-gradient(90deg, $mauve12 61.8%, $indigo12 100%)",
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
    color: "$mauve8",
    fontSize: "1rem",
    fontWeight: "300",
  },

  nav: {
    a: {
      fontWeight: "300",
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
