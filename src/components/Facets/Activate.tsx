import { useFacetsState } from "@/context/facets";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import { ButtonStyled } from "../Shared/Button/Button.styled";
import {
  FacetsActivateIndicator,
  FacetsActivateStyled,
} from "./Activate.styled";
import { LocaleString } from "@/hooks/useLocale";

const FacetsActivate: React.FC = () => {
  const { facetsState } = useFacetsState();
  const { facetsActive } = facetsState;

  const { length } = Array.from(facetsActive.keys()).filter(
    (key) => key !== "q"
  );

  return (
    <FacetsActivateStyled asChild>
      <ButtonStyled buttonType="primary">
        {LocaleString("searchFilter")} <MixerHorizontalIcon />
        {length > 0 && (
          <FacetsActivateIndicator>{length}</FacetsActivateIndicator>
        )}
      </ButtonStyled>
    </FacetsActivateStyled>
  );
};

export default FacetsActivate;
