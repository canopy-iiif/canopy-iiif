import { useRouter } from "next/router";
import React from "react";

export default function Works() {
  const router = useRouter();
  router.push("/search");
  return <></>;
}
