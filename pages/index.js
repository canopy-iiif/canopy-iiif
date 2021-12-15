import Link from "next/link";
import useSWR from "swr";
import Layout from "../components/layout";

const fetcher = (query) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

export default function Index() {
  const { data, error } = useSWR("{ manifests { id, label, slug } }", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { manifests } = data;

  return (
    <Layout>
      <nav>
        {manifests.map((manifest, i) => (
          <li>
            <Link href={`/manifest/${manifest.slug}`} key={manifest.id}>
              <a>{manifest.label}</a>
            </Link>
          </li>
        ))}
      </nav>
    </Layout>
  );
}
