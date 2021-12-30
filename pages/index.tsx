import useSWR from "swr";
import Link from "next/link";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import { getManifestById } from "./api/iiif";
import Layout from "../components/layout";
import Grid from "../components/Grid/Grid";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";

export default function Index({ manifests }) {
  /**
   * @todo make section a component with an isFluid variant and default at max-width 1280
   */

  const handleLoadMore = () => {
    console.log(true);
  };

  return (
    <Layout>
      <Hero />
      <section
        style={{
          maxWidth: "1280px",
          margin: "auto",
        }}
      >
        <Nav />
        <Grid>
          {manifests &&
            manifests.map((manifest, i) => {
              return <Grid.Item data={manifest} key={manifest.id} />;
            })}
          <Grid.LoadMore />
        </Grid>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { loading, error, data } = await client.query({
    query: gql`
      query Manifests {
        manifests(limit: 4, offset: 0) {
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
