import useSWR from "swr";

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
  const { data, error } = useSWR("{ manifests { label } }", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { manifests } = data;

  return (
    <div>
      {manifests.map((manifest, i) => (
        <div key={i}>{manifest.label}</div>
      ))}
    </div>
  );
}
