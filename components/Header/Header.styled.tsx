import { styled } from "@/stitches";
import { slateA } from "@radix-ui/colors";

const Title = styled("span", {
  display: "flex",
  marginRight: "$gr3",
  fontFamily: "$bookTight",
  fontSize: "$gr5",
  fontWeight: "800",
});

const Content = styled("div", {
  width: "calc(100% - ($gr4 * 2))",
  padding: "$gr1 $gr4",
  backgroundColor: "$slate1",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  color: "$slate1",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  alignItems: "center",
  zIndex: "1",
  boxShadow: `3px 3px 8px ${slateA.slateA7}`,

  [`&  ${Title} a`]: {
    textDecoration: "none",
    color: "$slate12",

    "&:hover, &:focus": {
      color: "$indigo10",
    },
  },
});

const Wrapper = styled("header", {
  position: "fixed",
  width: "100%",
  zIndex: "2",
  top: "0",
  display: "flex",
  flexDirection: "column",
});

export { Content, Title, Wrapper };
