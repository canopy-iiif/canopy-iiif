import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import {
  FeatureGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { Label, Thumbnail } from "@samvera/clover-iiif/primitives";
import { useEffect, useRef, useState } from "react";

import Container from "@components/Shared/Container";
import { InternationalString } from "@iiif/presentation-3";
import Leaflet from "leaflet";
import Link from "@components/Shared/Link";
import { MapStyled } from "@components/Map/Map.styled";
import MarkerClusterGroup from "@components/Map/MarkerClusterGroup";
import { getBounds } from "@lib/iiif/navPlace";
import { getLabel } from "@hooks/getLabel";

interface MapProps {
  manifests: any;
}

interface MapVars {
  defaultBounds: Leaflet.LatLngBoundsExpression;
  enabled: boolean;
  icon: Leaflet.IconOptions;
  tileLayers: Leaflet.TileLayer[];
}

const Map: React.FC<MapProps> = ({ manifests }) => {
  // @ts-ignore
  const mapVars: MapVars = process.env.CANOPY_CONFIG.map;
  const tileLayers = mapVars.tileLayers;
  const defaultBounds = mapVars.defaultBounds;
  const mapRef = useRef<Leaflet.Map>(null);
  const icon = Leaflet.icon(mapVars.icon);
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
                        <Thumbnail thumbnail={item.thumbnail} />{" "}
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
