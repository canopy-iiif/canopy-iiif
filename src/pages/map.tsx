import "leaflet/dist/leaflet.css";

import Layout from "@/components/layout";
import React from "react";
import { canopyManifests } from "@/lib/constants/canopy";
import dynamic from "next/dynamic";
import { getFeatures } from "@/lib/iiif/navPlace";

const Map = dynamic(() => import("../components/Map/Map"), { ssr: false });

export default function MapPage() {
  const manifests = canopyManifests();
  const navPlace_Manifests = manifests.filter(
    // @ts-ignore
    (manifest) => manifest.navPlace
  );

  // @ts-ignore
  const features: any = getFeatures(navPlace_Manifests);
  return (
    <Layout>
      <div>
        <Map manifests={features} />
      </div>
    </Layout>
  );
}
