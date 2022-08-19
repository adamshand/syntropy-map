import React from "react";
// import logo from "./logo.svg";

// eslint-disable-next-line
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

// import "./App.css";

// const markers = [
//   {
//     email: "adam@shand.net",
//     location: [-40.8447, 175.0949],
//     description: "This is where Adam lives.",
//   },
//   {
//     email: "djb@dajabe.nz",
//     location: [-40.3565, 175.5715],
//     description: "This is where David lives.",
//   },
// ];

export default function App() {
  const url = "https://f001.backblazeb2.com/file/adam-web-public/markers.json";

  (async () => {
    const markers = await fetch(url);
    console.log(markers);
  })();

  return (
    <MapContainer center={[-40.9, 174.886]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <LocationMarker /> */}
      <Marker position={[-40.3565, 175.5715]}>
        <Popup>This is where David lives.</Popup>
      </Marker>
    </MapContainer>
  );
}

// function LocationMarker() {
//   TypeScript error with <Marker position={}>
//   return (
//     <>
//       {markers.length > 0 &&
//         markers.map((marker) => (
//           <Marker key={marker.email} position={marker.location}>
//             <Popup>{marker.description}</Popup>
//           </Marker>
//         ))}
//     </>
//   );
// }
