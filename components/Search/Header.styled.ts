import { styled } from "@/stitches";
import { FacetsActivateStyled } from "../Facets/Activate.styled";
import { ContainerStyled } from "../Shared/Container";

const SearchHeaderFloat = styled("div", {
  display: "flex",
  position: "fixed",
  left: "0",
  zIndex: "5",
  width: "100%",

  [`> ${ContainerStyled}`]: {
    paddingTop: "$gr4",
    marginTop: "-$gr4",
    background: "linear-gradient(180deg, $slateA6, #fff0)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const SearchHeaderStyled = styled("div", {
  height: "$gr5",
  padding: "$gr4 0 $gr3",

  "#canopy-search-summary": {
    opacity: "1",
    transition: "$canopyOpacity",
    fontSize: "$gr4",
    color: "$slate11",
    fontWeight: "300",
  },

  variants: {
    isFixed: {
      true: {
        [`> ${SearchHeaderFloat}`]: {
          "#canopy-search-summary": {
            opacity: "0",
          },

          [`${FacetsActivateStyled}`]: {
            left: "50%",
            transform: "translate(-50%)",
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
