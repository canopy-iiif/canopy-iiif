import { styled } from "@/stitches";

const Content = styled("div", {});

const Title = styled("span", {
  display: "flex",
  flexGrow: "1",
  fontWeight: "500",
});

const Wrapper = styled("header", {
  position: "fixed",
  zIndex: "2",
  top: "0",
  width: "calc(100% - 4rem)",
  backgroundColor: "$slate12",
  background: "linear-gradient(90deg, $slate12 61.8%, $indigo12 100%)",
  padding: "1rem 2rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  color: "$slate1",
  boxShadow: "3px 3px 8px #0002",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  alignItems: "center",

  [`&  ${Title} a`]: {
    textDecoration: "none",
    color: "$slate1",
    fontSize: "1rem",
  },
});

export { Content, Title, Wrapper };
