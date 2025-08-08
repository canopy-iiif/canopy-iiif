import { styled } from "@styles/stitches";

const FooterContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "$gr2",
  fontWeight: "500",
});

const FooterStyled = styled("footer", {
  padding: "$gr3 0",
  marginTop: "$gr6",
});

const CollectionLink = styled("a", {
  color: "var(--accent-11)",
  fill: "var(--accent-11)",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",

  svg: {
    marginRight: "$gr2",
    height: "$gr2",
    color: "inherit",
    fill: "inherit",
  },
});

export { FooterContent, FooterStyled, CollectionLink };
