import { Button as RadixThemesButton } from "@radix-ui/themes";
import { styled } from "@styles/stitches";

const ButtonStyled = styled(RadixThemesButton, {
  cursor: "pointer",
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
