import { slateA } from "@radix-ui/colors";
import { styled } from "@/src/styles/stitches";

const FooterContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "$gr3",
  fontWeight: "500",
});

const FooterStyled = styled("footer", {
  boxShadow: `inset 1px 2px 2px  ${slateA.slateA3}`,
  padding: "$gr3 0",
  marginTop: "$gr6",
});

const CollectionLink = styled("a", {
  color: "$indigo11",
  fill: "$indigo11",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",

  svg: {
    marginRight: "$gr2",
    height: "$gr3",
    color: "inherit",
    fill: "inherit",
  },
});

export { FooterContent, FooterStyled, CollectionLink };
