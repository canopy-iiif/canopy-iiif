import { useFacetsState } from "@/context/facets";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import { ButtonStyled } from "../Shared/Button/Button.styled";
import {
  FacetsActivateIndicator,
  FacetsActivateStyled,
} from "./Activate.styled";

const FacetsActivate: React.FC = () => {
  const { facetsState } = useFacetsState();
  const { facetsActive } = facetsState;

  return (
    <FacetsActivateStyled asChild>
      <ButtonStyled buttonType="primary">
        Filter <MixerHorizontalIcon />
        {facetsActive.length > 0 && (
          <FacetsActivateIndicator>
            {facetsActive.length}
          </FacetsActivateIndicator>
        )}
      </ButtonStyled>
    </FacetsActivateStyled>
  );
};

export default FacetsActivate;
