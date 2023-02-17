import * as Checkbox from "@radix-ui/react-checkbox";
import React from "react";
import { styled } from "@/stitches";

const OptionLabel = styled("label", {});

export const FacetsOption = ({ option }) => {
  const id = `slug-prefix-here-${option.value}`;
  return (
    <span style={{ display: "flex" }}>
      <Checkbox.Root value={option.value} id={id}>
        <Checkbox.Indicator />
      </Checkbox.Root>
      <OptionLabel for={id}>{option.value}</OptionLabel>
    </span>
  );
};

export default FacetsOption;
