import { type NavigationItem } from "@src/customTypes/navigation";
import Nav from "@components/Nav/Nav";
import Heading from "@components/Shared/Heading/Heading";
import { styled } from "@styles/stitches";

const ReferencingContent = ({
  referencingContent,
}: {
  referencingContent: NavigationItem[];
}) => {
  return (
    <StyledReferencingContent>
      <Heading
        as="h2"
        css={{ margin: "0 0 0.618rem !important", fontSize: "1rem !important" }}
      >
        Content Referencing This Work
      </Heading>
      <Nav items={referencingContent} orientation="vertical" />
    </StyledReferencingContent>
  );
};

export default ReferencingContent;

const StyledReferencingContent = styled("div", {
  border: "1px solid var(--colors-slate4)",
  borderRadius: "0.382rem",
  padding: "$gr3 $gr4 $gr2",
  margin: "-$gr1 0 $gr4",
  boxShadow: "5px 5px 11px #0001",

  a: {
    color: "$indigo10 !important",
    padding: "$gr1 0 $gr2",
    marginBottom: "0",
    textDecoration: "underline",
    marginLeft: "1.618rem",

    "&::before": {
      content: "↳",
      position: "absolute",
      width: "1.618rem",
      fontSize: "0.9rem",
      left: "-1.382rem",
      marginTop: "2px",
      opacity: "0.382",
    },
  },
});
