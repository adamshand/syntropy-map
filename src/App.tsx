import React from "react";
// import logo from "./logo.svg";

// eslint-disable-next-line
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

// import "./App.css";
// import "./leaflet.css";

function App() {
  return (
    <div className="app">
      <div id="map">
        <MapContainer center={[-40.9, 174.886]} zoom={6} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-40.8447, 175.0949]}>
            <Popup>This is where Adam lives.</Popup>
          </Marker>
          <Marker position={[-40.3565, 175.5715]}>
            <Popup>This is where David lives.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
