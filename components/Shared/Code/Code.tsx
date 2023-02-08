import React from "react";
import copy from "copy-to-clipboard";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
// import { CopyIcon } from 'components/icons'
import { theme } from "./prism-helpers";
import { CodePre, CodeStyled } from "./Code.styled";
import { ButtonStyled } from "@/Components/Shared/Button/Button.styled";

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
            buttonSize="tiny"
            buttonType="primary"
            aria-label="Copy Code"
            onClick={() => {
              copy(children);
            }}
          >
            Copy
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
