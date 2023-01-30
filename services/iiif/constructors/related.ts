import FACETS from "@/.canopy/facets.json";
import { shuffle } from "lodash";

export const getRelatedFacetValue = (
  label,
  minimumDocCount = 5,
  random = true
) => {
  const { values } = FACETS.find((item) => item.label === label);
  let filtered = values.filter((value) => value.doc_count >= minimumDocCount);
  let output = filtered.length !== 0 ? filtered : values;

  if (random) output = shuffle(output);

  return output.shift();
};
