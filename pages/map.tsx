import React from "react";
import Layout from "@/components/layout";
import MANIFESTS from "@/.canopy/manifests.json";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { getBounds, getFeatures } from "@/services/getFeatures";

const Map = dynamic(
  () => import("../components/Map/Map"),
  { ssr: false } // Prevent server-side rendering
);

export default function MapPage() {
  const navPlace_Manifests: any = MANIFESTS.filter(
    // @ts-ignore
    (manifest) => manifest.navPlace
  );
  const features: any = getFeatures(navPlace_Manifests);
  const bounds = getBounds(navPlace_Manifests);
  return (
    <Layout>
      <div>
        <Map manifests={features} bounds={bounds} />
      </div>
    </Layout>
  );
}
