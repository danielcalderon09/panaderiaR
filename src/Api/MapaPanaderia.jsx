import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Styles/MapaPanaderia.scss';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
});

// Ubicación inicial de la panadería
const panaderiaInicial = [2.941722, -75.299317];

const MapaPanaderia = () => {
  const [ubicacion] = useState(panaderiaInicial);  // Ya no necesitamos setUbicacion

  // Función para abrir Google Maps con la ubicación de la panadería
  const abrirEnGoogleMaps = () => {
    const [lat, lng] = panaderiaInicial;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  return (
    <div className="mapa-panaderia">
      <div className="mapa-panaderia__info">
        <h2 className="mapa-panaderia__title">Visítanos en la Panadería Panorama</h2>
        <p className="mapa-panaderia__description">
          Encuéntranos en nuestra ubicación central y disfruta de nuestros deliciosos productos.
        </p>
        <button className="mapa-panaderia__button" onClick={abrirEnGoogleMaps}>
          🗺️ Ir a la Panadería
        </button>
      </div>

      <div className="mapa-panaderia__map">
        <MapContainer
          center={ubicacion}
          zoom={15}
          scrollWheelZoom={true}
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={ubicacion} icon={customIcon}>
            <Popup>📍 Aquí estamos: Panadería Panorama.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapaPanaderia;
