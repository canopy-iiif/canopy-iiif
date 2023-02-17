import * as Checkbox from "@radix-ui/react-checkbox";
import React from "react";
import { styled } from "@/stitches";

const OptionLabel = styled("label", {});

interface FacetsOptionProps {
  option: any;
}

export const FacetsOption: React.FC<FacetsOptionProps> = ({ option }) => {
  const id = `slug-prefix-here-${option.value}`;
  return (
    <span style={{ display: "flex" }}>
      <Checkbox.Root value={option.value} id={id}>
        <Checkbox.Indicator />
      </Checkbox.Root>
      <OptionLabel htmlFor={id}>{option.value}</OptionLabel>
    </span>
  );
};

export default FacetsOption;
