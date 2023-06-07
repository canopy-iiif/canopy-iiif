import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import Leaflet from "leaflet";
import Link from "next/link";
import { Label, Thumbnail } from "@samvera/nectar-iiif";
import Container from "../Shared/Container";
import { MapStyled } from "./Map.styled";
import { getLabel } from "../../hooks/getLabel";
import { InternationalString } from "@iiif/presentation-3";
import { getBounds } from "@/services/iiif/navPlace";
import { useRef, useState, useEffect } from "react";
import MarkerClusterGroup from "@/components/Map/MarkerClusterGroup";

const icon = Leaflet.icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

interface MapProps {
  manifests: any;
}

const Map: React.FC<MapProps> = ({ manifests }) => {
  // @ts-ignore
  const tileLayers = process.env.CANOPY_CONFIG.map.tileLayers;
  const defaultBounds: Leaflet.LatLngBoundsExpression = [[51.505, -0.09]];
  const mapRef = useRef<Leaflet.Map>(null);
  const [bounds, setBounds] =
    useState<Leaflet.LatLngBoundsExpression>(defaultBounds);

  useEffect(() => {
    const manifestBounds = getBounds(manifests);
    manifestBounds.length > 0 && setBounds(manifestBounds);
  }, [manifests]);

  useEffect(() => {
    if (mapRef.current && bounds) {
      mapRef.current.fitBounds(bounds);
    }
  }, [mapRef, bounds]);

  return (
    <MapStyled>
      <MapContainer
        className={"map-container"}
        bounds={bounds}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <LayersControl position="topright">
          {tileLayers.map((tile: any, index: number) => {
            if (index === 0) {
              return (
                <LayersControl.BaseLayer key={index} name={tile.name} checked>
                  <TileLayer url={tile.url} attribution={tile.attribution} />
                </LayersControl.BaseLayer>
              );
            }
            return (
              <LayersControl.BaseLayer key={index} name={tile.name}>
                <TileLayer url={tile.url} attribution={tile.attribution} />
              </LayersControl.BaseLayer>
            );
          })}
        </LayersControl>
        <MarkerClusterGroup>
        <FeatureGroup>
          {manifests.map((item: any) =>
            item.features.map((feature: any, index: any) => (
              <Marker
                position={[
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0],
                ]}
                icon={icon}
                key={index}
              >
                <Popup>
                  <figure>
                    <Link href={item.slug}>
                      <Thumbnail thumbnail={item.thumbnail} />
                      <figcaption>
                        <Container className="slide-inner" isFlex>
                          <Label
                            label={
                              getLabel(
                                feature.properties.label
                              ) as unknown as InternationalString
                            }
                            as="span"
                            className="slide-label"
                          />
                        </Container>
                      </figcaption>
                    </Link>
                  </figure>
                </Popup>
              </Marker>
            ))
          )}
        </FeatureGroup>
        </MarkerClusterGroup>
      </MapContainer>
    </MapStyled>
  );
};

export default Map;
