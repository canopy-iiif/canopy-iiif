import useSWR from "swr";
import Link from "next/link";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import Layout from "../components/layout";
import { getManifestById } from "./api/iiif";

export default function Index({ allManifests }) {
  return (
    <Layout>
      <nav>
        {allManifests.map((manifest, i) => {
          const { data, error } = useSWR(manifest.id, getManifestById);
          return (
            <Link href={`/manifest/${manifest.slug}`} key={manifest.id}>
              <a style={{ display: "flex" }}>{manifest.label}</a>
            </Link>
          );
        })}
      </nav>
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
