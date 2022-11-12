import { styled } from "@/stitches";

const Content = styled("div", {});

const Title = styled("span", {
  display: "flex",
  marginRight: "$gr3",
  fontFamily: "$bookTight",
  fontSize: "$gr5",
  fontWeight: "800",
});

const Wrapper = styled("header", {
  position: "fixed",
  zIndex: "2",
  top: "0",
  width: "calc(100% - ($gr4 * 2))",
  padding: "$gr1 $gr4",
  backgroundColor: "$slate1",
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
    color: "$slate12",

    "&:hover, &:focus": {
      color: "$indigo10",
    },
  },
});

export { Content, Title, Wrapper };
