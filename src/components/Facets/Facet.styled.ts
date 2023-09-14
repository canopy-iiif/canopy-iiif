import * as Accordion from "@radix-ui/react-accordion";

import { styled } from "@/src/styles/stitches";

const FacetsFacetActivate = styled(Accordion.Trigger, {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "$gr2 0",
  backgroundColor: "transparent",
  border: "none",
  fontFamily: "$display",
  fontSize: "$gr4",
  cursor: "pointer",
  borderTop: "1px solid $slate4",

  "&:hover, &:focus": {
    color: "$indigo11",
  },
  svg: {
    transition: "$canopyAll",
    transform: "rotate(-90deg)",
    color: "$slate10",
  },

  "&[aria-expanded='true']": {
    color: "$slate12 !important",
    fontWeight: "800",

    svg: {
      color: "$slate12 !important",
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
