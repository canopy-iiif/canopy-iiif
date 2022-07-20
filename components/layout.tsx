import React, {useEffect, useState} from "react";
import Header from "@/components/Header/Header";
import BaseTag from "./Metatag/BaseTag";
import Analytics from "./Analytics/Analytics";

export default function Layout({ children }) {
  return (
    <>
      <BaseTag />
      <Header />
      <main>{children}</main>
      <footer>
        <Analytics />
      </footer>
    </>
  );
}
