import { styled } from "@/stitches";
import { indigo, slateA } from "@radix-ui/colors";

const SearchForm = styled("form", {
  backgroundColor: "$slateA11",
  display: "flex",
  flexGrow: "1",
  position: "relative",
  zIndex: "0",
  transition: "$all",
  maxHeight: "0",
  opacity: "0",
  backdropFilter: "blur(30px)",
  boxShadow: `3px 3px 8px ${slateA.slateA7}`,

  variants: {
    isVisible: {
      true: {
        maxHeight: "500px",
        opacity: "1",
      },
    },
  },
});

const SearchInput = styled("input", {
  padding: "$gr3 $gr4",
  fontSize: "$gr3",
  fontFamily: "$book",
  fontWeight: "500",
  color: "$slate1",
  backgroundColor: "$indigoA5",
  border: "none",
  transition: "$all",
  flexGrow: "1",
  boxSizing: "border-box",

  "&:active, &:focus": {
    color: "$indigo1",
    backgroundColor: "$indigoA7",
    outline: "2px solid $indigo10",
    border: "none",
  },
});

const SearchSubmit = styled("input", {
  padding: "$gr1 $gr2",
  marginLeft: "-$gr1",
  fontSize: "$gr3",
  fontWeight: "300",
  fontFamily: "$book",
  backgroundColor: "$indigo9",
  color: "$indigo3",
  border: "1px solid $indigo9",
  borderRadius: "5px",
  borderTopLeftRadius: "0",
  borderBottomLeftRadius: "0",
  cursor: "pointer",
  transition: "$all",
  position: "absolute",
  right: "0",
  top: "0",

  "&:hover, &:focus": {
    backgroundColor: "$indigo11",
    color: "$indigo1",
    boxShadow: "1px 1px 6px #0002",
  },
});

const SearchToggle = styled("a", {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",

  svg: {
    marginRight: "$gr2",
    zIndex: "-1",
  },
});

export { SearchForm, SearchInput, SearchSubmit, SearchToggle };
