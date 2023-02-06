import { styled } from "@/stitches";

/* eslint sort-keys: 0 */

const DefinitionListWrapper = styled("div", {
  dl: {
    dt: {
      padding: "$gr3 0 $gr2",
      fontFamily: "$bookTight",
    },

    dd: {
      padding: "0 0 $gr1",
      margin: "0",
    },
  },
});

export { DefinitionListWrapper };
