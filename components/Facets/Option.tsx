import React, { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import {
  OptionCheckbox,
  OptionCheckboxIndicator,
  OptionLabel,
  OptionStyled,
} from "./Option.styled";

interface FacetsOptionProps {
  active: boolean;
  identifier: string;
  option: any;
}

export const FacetsOption: React.FC<FacetsOptionProps> = ({
  active,
  identifier,
  option,
}) => {
  const [checked, setChecked] = useState(active);
  const handleCheckedChange = () => setChecked(!checked);

  return (
    <OptionStyled>
      <OptionCheckbox
        value={option.value}
        id={identifier}
        checked={checked}
        onCheckedChange={handleCheckedChange}
      >
        <OptionCheckboxIndicator asChild>
          <CheckIcon />
        </OptionCheckboxIndicator>
      </OptionCheckbox>
      <OptionLabel htmlFor={identifier} isChecked={checked}>
        {option.value}
      </OptionLabel>
    </OptionStyled>
  );
};

export default FacetsOption;
