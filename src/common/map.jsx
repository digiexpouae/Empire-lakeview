'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { icon } from 'leaflet';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 🔁 Component that gets the map instance safely
function ZoomOnScroll({ containerRef ,carref}) {
  const map = useMap(); 
    const container = containerRef.current;

useEffect(() => {
  // if (!map || !containerRef?.current || !carref?.current) return;

  const empireCoords = [25.114806, 55.364444];

  // ScrollTrigger for map zoom
  const st = ScrollTrigger.create({
    trigger: container,
    start: 'top top',
    end: '+=3000',
    pin:true,
    scrub: true,  anticipatePin: 1,          // ← tells ScrollTrigger to “pre-pin” 1px early
  pinType: 'fixed',          // ← forces position:fixed which is more stable
 onEnter: () => {
      // if your map/slider needs to finish loading first:
      ScrollTrigger.refresh();
    },
    onUpdate: (self) => {
      const progress = self.progress;
      const zoomLevel = 13 - (3 * progress);
      map.setView(empireCoords, zoomLevel);
   },
  });

  // GSAP animation for moving the object left to right on scroll
  const cs = gsap.fromTo(
    carref.current,
    { left: '20%' },
    {
      left: '80%',
      scrollTrigger: {
        trigger: container,
          

        start: 'top top',
        end: '+=3000',
        scrub: true,
        // Do NOT pin here to avoid conflicts
      },
    }
  );
     return () => {
     
    
    st.kill();
    cs.kill();
  };
}, [map, containerRef, carref]);


  return null;
}

const Map = ({ className, containerRef,sectionref }) => {
 

const markers = [
  { name: 'Liwan Lakes', coordinates: [25.1151433, 55.3648375],  icon: '/assets/amaya.svg'  },
  { name: 'Downtown Dubai', coordinates: [25.1950, 55.2784], icon: '/assets/g2589.svg' },
  { name: 'Dubai International Airport', coordinates: [25.2567, 55.3643], icon: '/assets/international.svg' },
];

const bounds = L.latLngBounds(markers.coordinates);
  return ( <MapContainer
      center={[25.114806, 55.364444]}
      zoom={25}
      maxZoom={41}
  whenCreated={(map) => {
    map.fitBounds(bounds, { padding: [100, 100] }); // padding adds space around markers
  }}

      scrollWheelZoom={false}
      style={{ height: '70vh', width: '100%' }}
      className={className}
    >{console.log()}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors, &copy; CartoDB"
      />

      {/* Main marker */}
      <Marker position={[25.114806, 55.364444]}   zIndexOffset={1000}// 👈 makes it stay on top
 icon={L.divIcon({
        className: '',
        html: `
          <div style="display: flex; align-items: center; gap: 6px;">
            <img src="/leaflet/marker-icon.png" width="25" height="41" />
            <span style="font-size: 14px;color:#CCAB64; background: white; padding: 2px 6px; border-radius: 4px;">Empire Lakes</span>
          </div>
        `,
      })}>
        <Popup>Empire Lakeviews</Popup>
      </Marker>

      {/* Other markers */}
      {markers.map((marker, i) => (
        <Marker key={i} position={marker.coordinates} icon={L.divIcon({
          className: '',
          html: `
            <div style="display: flex; align-items: center; gap: 6px;">
            <img src="${marker.icon}" width="5" height="5" />
            <span style="font-size: 14px;color:#CCAB64; background: white; padding: 2px 6px; border-radius: 4px;">${marker.name}</span>
            </div>
          `,
        })}>
          <Popup>{marker.name}</Popup>
        </Marker>
        
      ))}

      {/* 📌 Scroll-based zoom animation */}
      <ZoomOnScroll containerRef={containerRef}  carref={sectionref}/>
    </MapContainer>
)}
export default Map;
