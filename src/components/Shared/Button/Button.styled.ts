import { slateA } from "@radix-ui/colors";
import { styled } from "@/src/styles/stitches";

const ButtonStyled = styled("button", {
  padding: "$gr2 $gr3",
  borderRadius: "2rem",
  textDecoration: "none",
  border: "none",
  backgroundColor: "$slate3",
  color: "$slate11 !important",
  boxShadow: `1px 1px 2px  ${slateA.slateA6}`,
  fontWeight: "500",
  fontSize: "$gr4",
  cursor: "pointer",
  transition: "$canopyAll",

  "@sm": {
    padding: "$gr2 $gr3",
    fontSize: "$gr3",
  },

  variants: {
    buttonType: {
      primary: {
        backgroundColor: "$indigo11",
        color: "$indigo2 !important",

        "&:hover, &:focus": {
          backgroundColor: "$indigo9",
        },
      },
      secondary: {
        backgroundColor: "$slate3",
        color: "$slate11 !important",

        "&:hover, &:focus": {
          backgroundColor: "$slate6",
        },
      },
      transparent: {
        backgroundColor: "transparent",
        boxShadow: "none",
        color: "$slate11 !important",
        textDecoration: "underline",
        paddingLeft: "0",
        paddingRight: "0",

        "&:hover, &:focus": {
          backgroundColor: "transparent",
        },
      },
    },
    buttonSize: {
      small: {
        fontSize: "$gr3",
      },
      tiny: {
        padding: "$gr1 $gr2",
        fontSize: "$gr2",
      },
    },
  },
});

const ButtonWrapper = styled("div", {
  margin: "$gr4 0 0",
  display: "flex",

  [`> ${ButtonStyled}`]: {
    marginRight: "$gr3",

    "&:last-child": {
      margin: "0",
    },
  },
});

export { ButtonStyled, ButtonWrapper };
