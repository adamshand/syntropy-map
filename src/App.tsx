import React from "react";
// import logo from "./logo.svg";

// eslint-disable-next-line
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

// import "./App.css";
// import "./leaflet.css";

const markers = [
  {
    email: "adam@shand.net",
    location: [-40.8447, 175.0949],
    description: "This is where Adam lives.",
  },
  {
    email: "djb@dajabe.nz",
    location: [-40.3565, 175.5715],
    description: "This is where David lives.",
  },
];

export default function App() {
  return (
    <div className="app">
      <div id="map">
        <MapContainer center={[-40.9, 174.886]} zoom={6} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
        </MapContainer>
      </div>
    </div>
  );
}

// TypeScript error with <Marker position={}>
function LocationMarker() {
  return (
    <>
      {markers.length > 0 &&
        markers.map((marker) => (
          <Marker key={marker.email} position={marker.location}>
            <Popup>{marker.description}</Popup>
          </Marker>
        ))}
    </>
  );
}
