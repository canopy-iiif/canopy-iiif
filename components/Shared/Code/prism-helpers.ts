import { PrismTheme } from "prism-react-renderer";
import { rem } from "@/styles/global";

export const theme: PrismTheme = {
  plain: {
    color: "var(--colors-indigo12)",
    fontSize: rem * 0.9,
    fontFamily: "Menlo, monospace",
  },
  styles: [
    {
      types: ["boolean", "string"],
      style: {
        color: "var(--colors-indigo10)",
      },
    },
    {
      types: ["operator"],
      style: { color: "var(--colors-indigo11)" },
    },
    {
      types: ["punctuation"],
      style: { color: "var(--colors-indigo8)" },
    },
  ],
};
