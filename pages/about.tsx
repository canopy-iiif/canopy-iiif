import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import Ribbon from "../components/Ribbon/Ribbon";

export default function Index({}) {
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
        <h1>About</h1>
      </section>
    </Layout>
  );
}
