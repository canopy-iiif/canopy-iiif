import React from "react";
import FACETS from "@/.canopy/facets.json";
import Layout from "@/components/layout";
import Container from "../components/Shared/Container";
import Link from "next/link";
import Heading from "@/components/Shared/Heading/Heading";
import { styled } from "@/stitches";
import { MinusIcon } from "@radix-ui/react-icons";
import {
  ContentStyled,
  ContentWrapper,
} from "@/components/Shared/Content.styled";

const ListItem = styled("li", {
  listStyle: "none",
  padding: "0",
  lineHeight: "unset",

  svg: {
    content: "",
    display: "block",
    position: "absolute",
    borderRadius: "50%",
    marginLeft: "-$gr4",
    marginTop: "5px",
    color: "$indigo11",
  },

  em: {
    fontSize: "$gr3",
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
        <MinusIcon />
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
                  <ul>
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
