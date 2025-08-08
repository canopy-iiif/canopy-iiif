// @ts-nocheck

import "leaflet/dist/leaflet.css";

import Layout from "@components/layout";
import { Manifest } from "@iiif/presentation-3";
import React from "react";
import { canopyManifests } from "@lib/constants/canopy";
import dynamic from "next/dynamic";
import { getFeatures } from "@lib/iiif/navPlace";

const Map = dynamic(() => import("../components/Map/Map"), { ssr: false });

interface MapPageProps {
  manifests: Manifest[];
}

export default function MapPage({ manifests }: MapPageProps) {
  const navPlaceManifests = manifests.filter((manifest) => manifest.navPlace);
  const features = getFeatures(navPlaceManifests);

  return (
    <Layout>
      <div>
        <Map manifests={features} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const enabled = process.env.CANOPY_CONFIG.map.enabled;

  if (!enabled) {
    return {
      notFound: true,
    };
  }

  try {
    const pageTitle = "Map";

    return {
      props: {
        manifests: canopyManifests(),
        pageTitle,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      notFound: true,
    };
  }
}
