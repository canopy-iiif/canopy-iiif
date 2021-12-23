import useSWR from "swr";
import Link from "next/link";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import { getManifestById } from "./api/iiif";
import Layout from "../components/layout";
import Grid from "../components/Grid/Grid";

export default function Index({ allManifests }) {
  return (
    <Layout>
      <Grid>
        {allManifests.map((manifest, i) => {
          return <Grid.Item data={manifest} key={manifest.id} />;
        })}
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  const { loading, error, data } = await client.query({
    query: gql`
      query AllManifests {
        allManifests {
          id
          label
          slug
          metadata
        }
      }
    `,
  });

  if (!data) return null;

  return {
    props: { ...data },
  };
}
