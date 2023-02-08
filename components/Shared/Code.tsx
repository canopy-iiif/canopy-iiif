import React from "react";
import copy from "copy-to-clipboard";
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from "prism-react-renderer";
// import { CopyIcon } from 'components/icons'

import { rem } from "@/styles/global";

const theme: PrismTheme = {
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

const Code = ({
  children,
  language,
}: {
  children: string;
  language: Language;
}) => {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          <button
            aria-label="Copy Code"
            onClick={() => {
              copy(children);
            }}
          >
            {/* <CopyIcon /> */}
          </button>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={i} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
