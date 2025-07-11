'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { icon } from 'leaflet';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(true);

// 🔁 Component that gets the map instance safely
function ZoomOnScroll({ containerRef ,carref,center_position}) {
  const map = useMap(); 
    const container = containerRef.current;

useEffect(() => {
  // if (!map || !containerRef?.current || !carref?.current) return;

  const empireCoords = center_position;

  // ScrollTrigger for map zoom
 const st = ScrollTrigger.create({
    trigger: container,
    start: 'bottom bottom',
    end: '+=1500',
    pin:true,
    pinType:'transform',
    scrub: true,  anticipatePin: 1,          // ← tells ScrollTrigger to “pre-pin” 1px early
  pinSpacing:true,       // ← forces position:fixed which is more stable

    onUpdate: (self) => {
      const progress = self.progress;
      const zoomLevel = 13 - (3 * progress);
      map.setView(empireCoords, zoomLevel);
   },
  });

     return () => {
     
    
    st.kill();
  };
}, []);


  return null;
}

const Map = ({ className, containerRef, sectionref, Name, center_position, markers, Main_marker, carcontainer }) => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapKey, setMapKey] = useState(0);

  // Force re-render when markers or center position changes
  useEffect(() => {
    setMapReady(false);
    const timer = setTimeout(() => {
      setMapKey(prev => prev + 1);
      setMapReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [markers, center_position]);

  const handleMapLoad = (map) => {
    mapRef.current = map;
    
    // Wait for the map to be fully initialized
    setTimeout(() => {
      if (markers?.coordinates) {
        try {
          const bounds = L.latLngBounds(markers.coordinates);
          map.fitBounds(bounds, { padding: [100, 100] });
        } catch (e) {
          console.error('Error setting map bounds:', e);
        }
      }
      
      // Set up tile load tracking
      let totalTiles = 0;
      let loadedTiles = 0;
      
      map.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
          layer.on('tileloadstart', () => {
            totalTiles++;
          });

          layer.on('tileload', () => {
            loadedTiles++;
            if (loadedTiles === totalTiles && totalTiles > 0) {
              setTimeout(() => {
                ScrollTrigger.refresh();
                setMapReady(true);
              }, 100);
            }
          });
        }
      });
    }, 0);
  };

  return (
    <MapContainer
      key={mapKey}
      center={center_position}
      zoom={13}
      maxZoom={41}
      zoomControl={false}
      scrollWheelZoom={false}
      touchZoom={false}
      doubleClickZoom={false}
      boxZoom={false}
      dragging={false}
      style={{ height: '70vh', width: '100%', minHeight: '400px' }}
      className={className}
      whenCreated={handleMapLoad}
    >{console.log()}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors, &copy; CartoDB"
      />

      {/* Main marker */}
      {mapReady && center_position && (
        <Marker 
          position={center_position}
          zIndexOffset={1000}
          icon={L.divIcon({
            className: 'main-marker',
            html: `
              <div style="display: flex; align-items: center; gap: 6px;">
                <img src="/leaflet/marker-icon.png" width="5" height="5" />
                <span style="font-size: 14px;color:#CCAB64; background: white; padding: 2px 6px; border-radius: 4px; white-space: nowrap;">
                  ${Main_marker || ''}
                </span>
              </div>
            `,
          })}
        >
          <Popup>{Name}</Popup>
        </Marker>
      )}

      {/* Other markers */}
      {mapReady && markers?.map((marker, i) => (
        marker?.coordinates && (
          <Marker 
            key={`${marker.coordinates.lat}-${marker.coordinates.lng}-${i}`}
            position={marker.coordinates}
            icon={L.divIcon({
              className: 'location-marker',
              html: `
                <div style="display: flex; align-items: center; gap: 6px;">
                  <img 
                    src="${marker.icon || '/leaflet/marker-icon.png'}" 
                    alt="${marker.name || 'Location'}"
                    style="height: 36px; width: 36px; object-fit: contain;"
                  />
                  <span style="font-size: 14px; color: #CCAB64; background: white; padding: 2px 6px; border-radius: 4px; white-space: nowrap;">
                    ${marker.name || ''}
                  </span>
                </div>
              `,
            })}
          >
            {marker.name && <Popup>{marker.name}</Popup>}
          </Marker>
        )
      ))}

      {/* 📌 Scroll-based zoom animation */}
      <ZoomOnScroll containerRef={containerRef}  carref={sectionref} center_position={center_position}/>
    </MapContainer>
)}
export default Map;
