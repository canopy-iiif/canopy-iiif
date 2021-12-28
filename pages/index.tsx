import useSWR from "swr";
import Link from "next/link";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import { getManifestById } from "./api/iiif";
import Layout from "../components/layout";
import Grid from "../components/Grid/Grid";
import Hero from "../components/Hero/Hero";

export default function Index({ manifests }) {
  return (
    <Layout>
      <Hero />
      <Grid>
        {manifests &&
          manifests.map((manifest, i) => {
            return <Grid.Item data={manifest} key={manifest.id} />;
          })}
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  const { loading, error, data } = await client.query({
    query: gql`
      query Manifests {
        manifests {
          id
          label
          slug
          metadata
          collectionId
        }
      }
    `,
  });

  if (!data) return null;

  return {
    props: { ...data },
  };
}
