//@ts-nocheck

import * as RadixThemes from "@radix-ui/themes";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

import Button from "@components/Shared/Button/Button";
import { ButtonWrapper } from "@components/Shared/Button/Button.styled";
import Card from "@components/MDX/Card";
import Code from "@components/Shared/Code/Code";
import { CodeInline } from "@components/Shared/Code/Code.styled";
import Heading from "@components/Shared/Heading/Heading";
import Image from "@components/MDX/Image";
import ReferencedItems from "@src/components/MDX/ReferencedItems";
import Scroll from "@components/MDX/Scroll";
import Slider from "@components/MDX/Slider";
import Viewer from "@components/MDX/Viewer";
import { getSlug } from "@src/lib/build/slug";

/**
 * Declare custom React components available in MDX content
 */
const customComponents = {
  Button,
  ButtonWrapper,
  Card,
  Image,
  ReferencedItems,
  Scroll,
  Slider,
  Viewer,
};

/**
 * Define custom React components to render Markdown elements
 */
const components = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" id={getSlug(props?.children)} {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  h5: (props) => <Heading as="h5" {...props} />,
  code: (props) => <CodeInline {...props} />,
  a: (props) => <RadixThemes.Link {...props} />,
  em: (props) => <RadixThemes.Em {...props} />,
  strong: (props) => <RadixThemes.Strong {...props} />,
  blockquote: (props) => <RadixThemes.Blockquote {...props} />,
  pre: (props) => {
    const string = props?.children?.props?.children;
    const language = props?.children?.props?.className?.replace(
      "language-",
      ""
    );
    return <Code language={language}>{string?.trim()}</Code>;
  },
  ...customComponents,
};

const CanopyMDXRemote = (source: MDXRemoteProps) => {
  return <MDXRemote {...source} components={components} />;
};

export default CanopyMDXRemote;
