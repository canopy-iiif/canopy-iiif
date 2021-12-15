import Link from "next/link";
import useSWR from "swr";
import Layout from "../components/layout";
import { fetcher } from "./api/graphql";

export default function Index() {
  const { data, error } = useSWR(
    "{ allManifests { id, label, slug } }",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { allManifests } = data;

  return (
    <Layout>
      <nav>
        {allManifests.map((manifest, i) => (
          <Link href={`/manifest/${manifest.slug}`} key={manifest.id}>
            <a style={{ display: "flex" }}>{manifest.label}</a>
          </Link>
        ))}
      </nav>
    </Layout>
  );
}
