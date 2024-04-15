import { CodePre, CodeStyled } from "./Code.styled";
import Highlight, { Language, defaultProps } from "prism-react-renderer";

import { ButtonStyled } from "@components/Shared/Button/Button.styled";
import { CopyIcon } from "@radix-ui/react-icons";
import React from "react";
import copy from "copy-to-clipboard";
import { theme } from "./prism-helpers";

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
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <CodeStyled>
          <ButtonStyled
            size="1"
            aria-label="Copy Code"
            onClick={() => {
              copy(children);
            }}
          >
            Copy <CopyIcon />
          </ButtonStyled>
          <CodePre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={i} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </CodePre>
        </CodeStyled>
      )}
    </Highlight>
  );
};

export default Code;
