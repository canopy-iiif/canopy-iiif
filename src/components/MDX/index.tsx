//@ts-nocheck

import * as RadixThemes from "@radix-ui/themes";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

import Button from "@components/Shared/Button/Button";
import { ButtonWrapper } from "@components/Shared/Button/Button.styled";
import Card from "@components/MDX/Card";
import Code from "@components/Shared/Code/Code";
import { CodeInline } from "@components/Shared/Code/Code.styled";
import Container from "@components/Shared/Container";
import Header from "../Header/Header";
import Heading from "@components/Shared/Heading/Heading";
import Image from "@components/MDX/Image";
import ReferencedItems from "@src/components/MDX/ReferencedItems";
import Scroll from "@components/MDX/Scroll";
import Share from "@components/MDX/Share";
import Slider from "@components/MDX/Slider";
import Viewer from "@components/MDX/Viewer";
import { getSlug } from "@src/lib/build/slug";

/**
 * Declare custom React components available in MDX content
 */
const canopyComponents = {
  Button,
  ButtonWrapper,
  Card,
  Container,
  Header,
  Image,
  ReferencedItems,
  Scroll,
  Share,
  Slider,
  Viewer,
};

/**
 * Define custom React components to render Markdown elements
 */
const markdownComponents = {
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
};

const CanopyMDXRemote = ({
  source,
  customComponents,
}: {
  source: MDXRemoteProps;
  customComponents?: Record<string, any>;
}) => {
  return (
    <MDXRemote
      {...source}
      components={{
        ...RadixThemes,
        ...markdownComponents,
        ...canopyComponents,
        ...customComponents,
      }}
    />
  );
};

export default CanopyMDXRemote;
