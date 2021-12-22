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
          // const { data, error } = useSWR(manifest.id, getManifestById);
          return (
            <Grid.Card
              key={manifest.id}
              href={`/manifest/${manifest.slug}`}
              thumbnail=""
              title={manifest.label}
            />
          );
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
        }
      }
    `,
  });

  if (!data) return null;

  return {
    props: { ...data },
  };
}
