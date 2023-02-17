import { styled } from "@/stitches";
import { headerHeight } from "@/styles/global";
import { StyledHeading } from "../Shared/Heading/Heading.styled";

const SearchHeaderFloat = styled("div", {
  padding: "0",
  left: "0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: "2",
});

const SearchHeaderStyled = styled("div", {
  height: "$gr5",
  padding: "$gr4 0 0",

  variants: {
    isFixed: {
      true: {
        [`${StyledHeading}`]: {
          width: "0",
          opacity: "0",
        },

        [`> ${SearchHeaderFloat}`]: {
          position: "fixed",
          left: "0",
          top: `calc($gr3 + ${headerHeight}px)`,
        },
      },
    },
  },
});

export { SearchHeaderFloat, SearchHeaderStyled };
