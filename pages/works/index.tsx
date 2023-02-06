import React from "react";

export default function Works() {
  return <></>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/search",
      permanent: true,
    },
  };
}
