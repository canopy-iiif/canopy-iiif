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
  width: "calc(100% - ($gr4 * 2))",
  padding: "$gr1 $gr4",
  backgroundColor: "$indigo12",
  background: "linear-gradient(90deg, $slate12 0%, $indigo12 100%)",
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
    color: "$indigo1",
    fontSize: "$gr4",
    fontWeight: "600",
  },
});

export { Content, Title, Wrapper };
