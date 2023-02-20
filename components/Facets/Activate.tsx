import React from "react";
import { ButtonStyled } from "../Shared/Button/Button.styled";
import { FacetsActivateStyled } from "./Activate.styled";

const FacetsActivate: React.FC = () => {
  return (
    <FacetsActivateStyled asChild>
      <ButtonStyled buttonType="primary">Filter</ButtonStyled>
    </FacetsActivateStyled>
  );
};

export default FacetsActivate;
