import "leaflet.markercluster";

import Leaflet from "leaflet";
import { createPathComponent } from "@react-leaflet/core";

const clusterIconHtml = (count: number) =>
  `<button data-accent-color="" data-radius="full" style="box-shadow: var(--shadow-3); cursor: pointer; outline-style: none;" class="rt-reset rt-BaseButton rt-r-size-3 rt-variant-solid rt-high-contrast rt-IconButton"><span class="rt-Text rt-r-size-4 rt-r-weight-bold">${count}</span></button>`;

const createClusterCustomIcon = function (cluster: any) {
  const count = cluster.getChildCount();
  return Leaflet.divIcon({
    className: "canopy-map-cluster-group-icon",
    html: clusterIconHtml(count),
    iconSize: Leaflet.point(40, 40, true),
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

const MarkerClusterGroup = createPathComponent(({}, ctx) => {
  const clusterProps: Record<string, any> = {
    iconCreateFunction: createClusterCustomIcon,
    polygonOptions: {
      fillColor: "var(--accent-a10)",
      color: "var(--accent-10)",
      weight: 2,
      opacity: 1,
    },
  };

  // @ts-ignore
  const markerClusterGroup = Leaflet.markerClusterGroup(clusterProps);

  return {
    instance: markerClusterGroup,
    context: { ...ctx, layerContainer: markerClusterGroup },
  };
});

export default MarkerClusterGroup;
