import { ContainerStyled } from "../Shared/Container";
import { FacetsActivateStyled } from "../Facets/Activate.styled";
import { styled } from "@/src/styles/stitches";

const SearchHeaderFloat = styled("div", {
  display: "flex",
  position: "fixed",
  left: "0",
  zIndex: "5",
  width: "100%",

  [`> ${ContainerStyled}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const SearchHeaderStyled = styled("div", {
  height: "$gr5",
  padding: "$gr4 0 $gr3",

  "@sm": {
    height: "$gr5",
    padding: "$gr3 0 $gr2",
  },

  "#canopy-search-summary": {
    opacity: "1",
    transition: "$canopyOpacity",
    fontSize: "$gr4",
    color: "$slate11",
    fontWeight: "300",

    "@sm": {
      fontSize: "$gr3",
    },
  },

  variants: {
    isFixed: {
      true: {
        [`> ${SearchHeaderFloat}`]: {
          "#canopy-search-summary": {
            opacity: "0",
          },

          [`${FacetsActivateStyled}`]: {
            right: "50%",
            transform: "translate(50%)",
            backfaceVisibility: "hidden",
            webkitFontSmoothing: "subpixel-antialiased",
            boxShadow: "2px 2px 5px #0003",
          },
        },
      },
    },
  },
});

export { SearchHeaderFloat, SearchHeaderStyled };
