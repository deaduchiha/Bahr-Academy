import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Popup } from "react-leaflet/Popup";
import { Marker } from "react-leaflet/Marker";
import { useMap } from "react-leaflet/hooks";

const GlobalPositioningSystem = ({
  mapWidth,
  mapHeight,
  mapLoc,
  mapMark,
  mZoom,
  widthType,
  heightType,
}) => {
  return (
    <MapContainer
      style={{
        width: `${mapWidth}${widthType}`,
        height: `${mapHeight}${heightType}`,
      }}
      center={mapLoc}
      zoom={mZoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mapMark}>
        <Popup>اکادمی برنامه نویسی سپهر</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GlobalPositioningSystem;
