import * as Select from "@radix-ui/react-select";
import { useRouter } from "next/router";
import React from "react";

const FacetSelect = ({ facet }) => {
  const router = useRouter();
  const handeValueChange = (value) =>
    router.push({
      pathname: "/search",
      query: {
        ...router.query,
        [facet.slug]: value,
      },
    });

  return (
    <Select.Root onValueChange={handeValueChange}>
      <Select.Trigger>
        <Select.Value placeholder={facet.label} />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Group>
              <Select.Label>{facet.label}</Select.Label>
              {facet.values.map((option) => (
                <Select.Item value={option.slug} key={option.slug}>
                  <Select.ItemText>{option.value}</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default FacetSelect;
