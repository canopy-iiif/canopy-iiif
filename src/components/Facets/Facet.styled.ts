import * as Accordion from "@radix-ui/react-accordion";

import { styled } from "@styles/stitches";

const FacetsFacetActivate = styled(Accordion.Trigger, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "$gr2 0",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  borderTop: "1px solid var(--gray-4)",
  fontSize: "$gr3",

  "> span": {
    display: "flex",
    alignItems: "center",
    gap: "$gr1",
  },

  "&:hover, &:focus": {
    color: "var(--accent-11)",
  },

  svg: {
    transition: "$canopyAll",
    transform: "rotate(-90deg)",
    color: "var(--gray-10)",
  },

  "&[aria-expanded='true']": {
    color: "var(--gray-12) !important",
    fontWeight: "800",

    svg: {
      color: "var(--gray-12) !important",
      transform: "rotate(0deg)",
    },
  },
});

const FacetsFacetContent = styled(Accordion.Content, {
  padding: "$gr1 0 $gr4",
});

const FacetsFacetHeader = styled(Accordion.Header, {});

const FacetsFacetStyled = styled(Accordion.Item, {
  "&:first-child": {
    [`${FacetsFacetActivate}`]: {
      border: "none",
    },
  },
});

export {
  FacetsFacetActivate,
  FacetsFacetContent,
  FacetsFacetHeader,
  FacetsFacetStyled,
};
