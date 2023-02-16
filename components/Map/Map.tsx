import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";
import { Label, Thumbnail } from "@samvera/nectar-iiif";
import Container from "../Shared/Container";
import { MapStyled } from "./Map.styled";
import { getLabel } from "../../hooks/getLabel";
import { InternationalString } from "@iiif/presentation-3";

const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

interface MapProps {
  manifests: any;
  bounds: any;
}

const Map: React.FC<MapProps> = ({ manifests, bounds }) => {
  if (bounds.length < 1) {
    bounds = [[-0.09, 51.505]];
  }
  return (
    <MapStyled>
      <MapContainer
        className={"map-container"}
        bounds={bounds}
        center={bounds[0]}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {manifests.map((item: any) =>
          item.features.map((feature: any, index: any) => (
            <Marker
              position={feature.geometry.coordinates.reverse()}
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
      </MapContainer>
    </MapStyled>
  );
};

export default Map;
