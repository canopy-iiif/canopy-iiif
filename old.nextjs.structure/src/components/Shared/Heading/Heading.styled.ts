import { Heading } from "@radix-ui/themes";
import { styled } from "@styles/stitches";

/* eslint sort-keys: 0 */

const StyledHeading = styled(Heading, {
  variants: {
    isHidden: {
      true: {
        position: "absolute",
        visibility: "hidden",
      },
    },
  },

  "&[data-level='h1']": {
    fontFamily: "$display",
    fontWeight: "700",
    letterSpacing: "-0.01em",
  },

  "&[data-level='h2']": {
    color: "var(--gray-10)",
    fontWeight: "300",
    letterSpacing: "-0.01em",
  },
});

export { StyledHeading };
