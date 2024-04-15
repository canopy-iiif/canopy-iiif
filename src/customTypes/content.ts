import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactElement } from "react";

/**
 * Types for markdown content, front matter, and its parsing
 */

export type ConnectedPage = {
  title: string;
  route: string;
};

export type FrontMatterContentItem = {
  date?: string;
  referencedManifests?: string[];
  navigation?: string;
  title?: string;
  description?: string;
};

export type FrontMatterPageProps = {
  source: MDXRemoteSource;
  frontMatter: FrontMatterContentItem;
};

export type LayoutFrontMatter = {
  children: ReactElement;
  frontMatter: FrontMatterContentItem;
};

export type MDXRemoteSource = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, unknown>
>;
