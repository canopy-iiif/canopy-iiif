import {
  ContentStyled,
  ContentWrapper,
} from "@/components/Shared/Content.styled";

import Container from "../components/Shared/Container";
import FACETS from "@/.canopy/facets.json";
import Heading from "@/components/Shared/Heading/Heading";
import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";
import { styled } from "@/src/styles/stitches";

const ListItem = styled("li", {
  listStyle: "none",
  padding: "0",
  lineHeight: "unset",

  em: {
    fontSize: "$gr2",
    fontStyle: "normal",
  },
});

interface MetadataItemProps {
  value: string;
  slug: string;
  doc_count: number;
  path: string;
}

export default function Metadata() {
  const MetadataItem: React.FC<MetadataItemProps> = ({
    value,
    slug,
    doc_count,
    path,
  }) => {
    return (
      <ListItem>
        <Link href={`${path}${slug}`}>{value}</Link> <em>({doc_count})</em>
      </ListItem>
    );
  };

  return (
    <Layout>
      <Container>
        <ContentWrapper>
          <ContentStyled>
            <Heading as="h1">Metadata</Heading>
            {FACETS.map(({ label, slug, values }) => {
              const path = `/search?${slug}=`;

              return (
                <div key={slug}>
                  <Heading as="h2">{label}</Heading>
                  <ul style={{ padding: "0" }}>
                    {values.map((value) => (
                      <MetadataItem {...value} path={path} key={value.slug} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </ContentStyled>
        </ContentWrapper>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
