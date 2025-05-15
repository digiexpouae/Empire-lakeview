'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  // Custom marker icon from public folder
  const customIcon = new L.Icon({
    iconUrl: '/leaflet/marker-icon.png',
    iconRetinaUrl: '/leaflet/marker-icon-2x.png',
    shadowUrl: '/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const newMarkers = [
    { name: 'Liwan Lakes', coordinates: [25.1151433, 55.3648375] },
    { name: 'Amaya Mall', coordinates: [25.1142, 55.3664] },
    { name: 'Downtown Dubai', coordinates: [25.1950, 55.2784] },
    { name: 'Dubai International Airport', coordinates: [25.2567, 55.3643] },
  ];

  return (
    <MapContainer
      center={[25.114806, 55.364444]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors, &copy; CartoDB"
      />

      {/* Main location marker */}
      <Marker position={[25.114806, 55.364444]} icon={ L.divIcon({
            className: '',
            html: `
              <div style="display: flex; align-items: center; gap: 6px;">
                <img src="/leaflet/marker-icon.png" width="25" height="41" />
                <span style="font-size: 14px;color:#CCAB64; background: white; padding: 2px 6px; border-radius: 4px;">Empire Lakes</span>
              </div>
            `
          })}>
        <Popup>Empire Lakeviews</Popup>
      </Marker>

      {/* Other markers */}
      {newMarkers.map((marker, index) => (
        <Marker key={index} position={marker.coordinates} icon={ L.divIcon({
            className: '',
            html: `
              <div style="display: flex; align-items: center; gap: 6px;">
                <img src="/leaflet/marker-icon.png" width="25" height="41" />
                <span style="font-size: 14px;color:#CCAB64; background: white; padding: 2px 6px; border-radius: 4px;">${marker.name}</span>
              </div>
            `
          })}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
