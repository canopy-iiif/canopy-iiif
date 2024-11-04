import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { Box, Flex, Select } from "@radix-ui/themes";
import {
  FeatureGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

import { IconButton } from "@radix-ui/themes";
import Leaflet from "leaflet";
import MDXCard from "../MDX/Card";
import { MapStyled } from "@components/Map/Map.styled";
import MarkerClusterGroup from "@components/Map/MarkerClusterGroup";
import { MarkerIcon } from "@components/Map/MarkerIcon";
import { getBounds } from "@lib/iiif/navPlace";
import { headerHeight } from "@src/styles/global";

interface MapProps {
  manifests: any;
}

declare type NamedTileLayer = Leaflet.TileLayer & {
  name: string;
  url: string;
  attribution: string;
};

interface MapVars {
  defaultBounds: Leaflet.LatLngBoundsExpression;
  enabled: boolean;
  icon: Leaflet.IconOptions;
  tileLayers: NamedTileLayer[];
}

// @ts-ignore
const MAP_VARS: MapVars = process.env.CANOPY_CONFIG.map;

const Map: React.FC<MapProps> = ({ manifests }) => {
  const [tileLayer, setTileLayer] = useState<NamedTileLayer>(
    MAP_VARS.tileLayers[0]
  );

  const defaultBounds = MAP_VARS.defaultBounds;
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

  const handleTileLayerChange = (value: string) => {
    const newTileLayer = MAP_VARS.tileLayers.find(
      (tile) => tile.name === value
    );
    if (newTileLayer) {
      setTileLayer(newTileLayer);
    }
  };

  const styleContent = `
    .leaflet-popup {
      width: 240px;
    }
    
    .leaflet-popup-content-wrapper {
      background-color: var(--gray-2);
      overflow: hidden;
      border: none;
    }

    .leaflet-popup-content {
      margin: 0;

      img {
        max-height: 100% !important;
      }
    }

    .leaflet-popup-tip {
      background-color: var(--accent-a10);
      opacity: 0.2;
    }


    .leaflet-control {
      background-color: var(--accent-10);
    }

    .leaflet-bar a {
      background-color: var(--accent-10);
      color: var(--gray-12);
      fill: var(--gray-12);
    }

    .leaflet-control-layers {
      display: none;
    }

    html {
      overflow: hidden;
    }

    html.dark .leaflet-layer { 
      filter: invert(100%) hue-rotate(180deg) brightness(90%) contrast(90%);
    }
  `;

  return (
    <MapStyled
      css={{ top: headerHeight, height: `calc(100vh - ${headerHeight}px)` }}
    >
      <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      <MapContainer
        className={"map-container"}
        bounds={bounds}
        scrollWheelZoom={false}
        zoomControl={false}
        ref={mapRef}
      >
        <Box
          style={{
            position: "absolute",
            zIndex: 1000,
            top: 0,
            right: 0,
            padding: "var(--space-5)",
          }}
        >
          <Flex gap="4">
            {MAP_VARS.tileLayers.length > 1 && (
              <Select.Root
                defaultValue={tileLayer.name}
                onValueChange={handleTileLayerChange}
                size="3"
              >
                <Select.Trigger
                  style={{
                    boxShadow: "var(--shadow-3)",
                    background: "var(--gray-1)",
                  }}
                />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Layers</Select.Label>
                    {MAP_VARS.tileLayers.map((tile: any, index: number) => (
                      <Select.Item key={index} value={tile.name}>
                        {tile.name}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            )}
            <Flex direction="column" gap="2">
              <IconButton
                aria-label="zoom in"
                size="3"
                onClick={() => mapRef.current?.zoomIn()}
                style={{ boxShadow: "var(--shadow-3)", cursor: "pointer" }}
              >
                <PlusIcon />
              </IconButton>
              <IconButton
                aria-label="zoom out"
                size="3"
                onClick={() => mapRef.current?.zoomOut()}
                style={{ boxShadow: "var(--shadow-3)", cursor: "pointer" }}
              >
                <MinusIcon />
              </IconButton>
            </Flex>
          </Flex>
        </Box>
        <LayersControl position="bottomright">
          <LayersControl.BaseLayer name={tileLayer.name} checked>
            <TileLayer
              url={tileLayer.url}
              attribution={tileLayer.attribution}
            />
          </LayersControl.BaseLayer>
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
                  icon={MarkerIcon(item.thumbnail[0].id)}
                  key={index}
                >
                  <Popup className="canopy-map-popup">
                    <MDXCard iiifContent={item.id} />
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
