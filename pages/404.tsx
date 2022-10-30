import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/layout";
import Hero from "@/components/Hero/Hero";

const PageNotFound: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <section
        style={{
          maxWidth: "1280px",
          margin: "auto",
          position: "relative",
        }}
      >
        404
      </section>
    </Layout>
  );
};

export default PageNotFound;
