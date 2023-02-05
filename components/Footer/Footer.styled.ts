import { styled } from "@/stitches";
import { slateA } from "@radix-ui/colors";

const FooterContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "$gr3",
  fontWeight: "500",
});

const FooterStyled = styled("footer", {
  backgroundColor: "$slate4",
  boxShadow: `inset 3px 3px 8px  ${slateA.slateA7}`,
  padding: "$gr4 0",
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
