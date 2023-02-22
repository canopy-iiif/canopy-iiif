import { styled } from "@/stitches";
import * as Accordion from "@radix-ui/react-accordion";

const FacetsFacetActivate = styled(Accordion.Trigger, {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "$gr2",
});

const FacetsFacetHeader = styled(Accordion.Header, {});

export { FacetsFacetActivate, FacetsFacetHeader };
