import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import { ButtonStyled } from "../Shared/Button/Button.styled";
import { FacetsActivateStyled } from "./Activate.styled";

const FacetsActivate: React.FC = () => {
  return (
    <FacetsActivateStyled asChild>
      <ButtonStyled buttonType="primary">
        Filter <MixerHorizontalIcon />
      </ButtonStyled>
    </FacetsActivateStyled>
  );
};

export default FacetsActivate;
