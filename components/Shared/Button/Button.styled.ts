import { styled } from "@/stitches";
import { slateA } from "@radix-ui/colors";

const ButtonStyled = styled("button", {
  padding: "$gr2 $gr3",
  borderRadius: "2rem",
  textDecoration: "none",
  border: "none",
  backgroundColor: "$slate2",
  color: "$slate11 !important",
  boxShadow: `1px 1px 2px  ${slateA.slateA7}`,
  fontWeight: "500",
  fontSize: "$gr4",
  cursor: "pointer",
  transition: "$all",

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
        backgroundColor: "$slate4",
        color: "$slate11 !important",

        "&:hover, &:focus": {
          backgroundColor: "$slate6",
        },
      },
    },
    buttonSize: {
      small: {
        fontSize: "$gr3",
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
