import Layout from "@/components/layout";

export default function Works() {
  return <Layout></Layout>;
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: "/search",
      permanent: true,
    },
  };
}
