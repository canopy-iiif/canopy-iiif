import Blockquote from "@/components/Shared/Markdown/Blockquote";
import Code from "@/components/Shared/Code/Code";
import { CodeInline } from "@/components/Shared/Code/Code.styled";
import Heading from "@/components/Shared/Heading/Heading";
import type { MDXComponents } from "mdx/types";
import { ReactElement } from "react";
import { getSlug } from "@/lib/build/slug";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Heading as="h1">{children}</Heading>,
    h2: ({ children }) => (
      <Heading as="h2" id={getSlug(children)}>
        {children}
      </Heading>
    ),
    h3: ({ children }) => <Heading as="h3">{children}</Heading>,
    code: ({ children }) => <CodeInline>{children}</CodeInline>,
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,

    // @ts-ignore
    pre: ({ children }: { children: ReactElement }) => {
      const string = children.props.children;
      const language = children.props.className?.replace("language-", "");
      return <Code language={language}>{string.trim()}</Code>;
    },
    ...components,
  };
}
