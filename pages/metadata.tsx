import React from "react";
import FACETS from "@/.canopy/facets.json";
import Layout from "@/components/layout";
import Container from "../components/Shared/Container";
import Link from "next/link";
import Heading from "@/components/Shared/Heading/Heading";
import { styled } from "@/stitches";
import { MinusIcon } from "@radix-ui/react-icons";

const ListItem = styled("li", {
  listStyle: "none",
  padding: "0",
  margin: "0 0 $gr1",

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

export default function Metadata() {
  const MetadataItem = ({ value, slug, doc_count, path }) => {
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
        <Heading as="h1">Metadata</Heading>
        {FACETS.map(({ label, slug, values }) => {
          const path = `/search?${slug}=`;

          return (
            <div>
              <Heading as="h2">{label}</Heading>
              <ul>
                {values.map((value) => (
                  <MetadataItem {...value} path={path} />
                ))}
              </ul>
            </div>
          );
        })}
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
