import { type NavigationItem } from "@src/customTypes/navigation";
import Nav from "@components/Nav/Nav";
import { styled } from "@styles/stitches";

const WorkReferencingContent = ({
  referencingContent,
}: {
  referencingContent: NavigationItem[];
}) => {
  return (
    <StyledReferencingContent>
      <Nav items={referencingContent} orientation="vertical" />
    </StyledReferencingContent>
  );
};

export default WorkReferencingContent;

const StyledReferencingContent = styled("div", {
  padding: "$gr3 0",

  a: {
    color: "var(--accent-11) !important",
    padding: "$gr1 0 $gr2",
    marginBottom: "0",
    textDecoration: "underline",
    marginLeft: "1.618rem",

    // bullet point
    "&::before": {
      content: "",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      backgroundColor: "var(--gray-6)",
      position: "absolute",
      left: "-1rem",
      top: "18px",
    },
  },
});
