import * as Select from "@radix-ui/react-select";
import FACETS from "@/.canopy/facets";
import React from "react";

const Facets: React.FC = () => {
  return (
    <div>
      {FACETS.map((facet) => (
        <Select.Root>
          <Select.Trigger>
            <Select.Value>{facet.label}</Select.Value>
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
      ))}
    </div>
  );
};

export default Facets;
