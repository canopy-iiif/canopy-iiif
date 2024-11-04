import { styled } from "@styles/stitches";

/* eslint sort-keys: 0 */

const DefinitionListWrapper = styled("div", {
  dl: {
    dt: {
      padding: "$gr2 0 $gr1",
      fontWeight: "500",
      color: "var(--gray-10)",
      fontSize: "$gr2",
    },

    dd: {
      padding: "0 0 $gr1",
      margin: "0",

      a: {
        color: "var(--accent-11)",
        textDecoration: "none",
      }
    },
  },
});

export { DefinitionListWrapper };
