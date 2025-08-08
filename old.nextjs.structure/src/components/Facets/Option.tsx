import {
  OptionCheckbox,
  OptionCheckboxIndicator,
  OptionLabel,
  OptionStyled,
} from "./Option.styled";

import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";
import { useFacetsState } from "@context/facets";

interface FacetsOptionProps {
  active: boolean;
  facet: string;
  identifier: string;
  option: any;
}

export const FacetsOption: React.FC<FacetsOptionProps> = ({
  active,
  facet,
  identifier,
  option,
}) => {
  const { facetsDispatch, facetsState } = useFacetsState();
  const { facetsActive } = facetsState;

  const handleCheckedChange = (checked: boolean) => {
    facetsActive.delete(facet);
    checked && facetsActive.append(facet, option.slug);

    facetsDispatch({
      type: "updateFacetsActive",
      facetsActive: facetsActive,
    });
  };

  return (
    <OptionStyled>
      <OptionCheckbox
        value={option.value}
        id={identifier}
        checked={active}
        onCheckedChange={handleCheckedChange}
      >
        <OptionCheckboxIndicator asChild>
          <CheckIcon />
        </OptionCheckboxIndicator>
      </OptionCheckbox>
      <OptionLabel htmlFor={identifier} isChecked={active}>
        {option.value} <span>({option.doc_count})</span>
      </OptionLabel>
    </OptionStyled>
  );
};

export default FacetsOption;
