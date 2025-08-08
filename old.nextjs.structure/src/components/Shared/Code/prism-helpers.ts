import { PrismTheme } from "prism-react-renderer";

export const theme: PrismTheme = {
  plain: {
    color: "var(--accent-12)",
    fontFamily: "Menlo, monospace",
  },
  styles: [
    {
      types: ["boolean", "string"],
      style: {
        color: "var(--accent-10)",
      },
    },
    {
      types: ["operator"],
      style: { color: "var(--accent-11)" },
    },
    {
      types: ["punctuation"],
      style: { color: "var(--accent-8)" },
    },
  ],
};
