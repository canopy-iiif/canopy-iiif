import { styled } from "@/stitches";
import { indigoA } from "@radix-ui/colors";

const FooterContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "$gr3",
  fontWeight: "500",
});

const FooterStyled = styled("footer", {
  backgroundColor: "$slate4",
  boxShadow: `inset 1px 1px 2px ${indigoA.indigoA4}`,
  padding: "$gr4 0",
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
    fill: "inherit",
    color: "inherit",
  },
});

export { FooterContent, FooterStyled, CollectionLink };
