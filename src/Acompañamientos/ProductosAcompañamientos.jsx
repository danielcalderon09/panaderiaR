import React, { useState } from 'react';
import '../Styles/ProductosBebidas.scss';
import '../Styles/ProductosPostres.scss';
import '../Styles/ProductosAcompañamientos.scss'; // Cambié la ruta para que coincida con Acompañamientos
import ProductoCard from '../componentes/ProductoCard';
import Informacion from '../Informacion/Informacion';

// URL base del servidor (asegúrate de que esta URL sirva tus imágenes o datos correctamente)
const SERVER_URL = 'http://localhost:3000/assets/Acompañamientos';

// Componente principal para ProductosAcompañamientos
const ProductosAcompañamientos = () => {
  const [acompañamientoSeleccionado, setAcompañamientoSeleccionado] = useState(null);

  // Datos de ejemplo
  const acompañamientos = [
    {
      imagen: `${SERVER_URL}/Croasan.jpg`,
      nombre: 'Croasan como en Francia',
      precio: 7000,
      descripcion: 'Un croasan esponjoso y delicioso al estilo francés.',
    },
    {
      imagen: `${SERVER_URL}/pan_artesanal.jpg`,
      nombre: 'Pan artesanal',
      precio: 5000,
      descripcion: 'Pan hecho a mano por la abuela del local',
    },
    {
      imagen: `${SERVER_URL}/pan_croasan.jpg`,
      nombre: 'pan parecido al croasan ',
      precio: 6000,
      descripcion: 'pan parecido al croasan pero diferente.',
    },
  ];

  const handleVerMasClick = (acompañamiento) => {
    setAcompañamientoSeleccionado(acompañamiento);
  };

  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title">Acompañamientos</h2>
      <p className="productos-postres__description">
        Complementa tus platos con nuestros deliciosos acompañamientos
      </p>

      {/* Renderización de los acompañamientos */}
      <div className="productos-postres__grid">
        {acompañamientos.map((producto, index) => (
          <ProductoCard
            key={index}
            imagen={producto.imagen}
            nombre={producto.nombre}
            precio={producto.precio}
            Comprar={true}
            onVerMasClick={() => handleVerMasClick(producto)}
          />
        ))}
      </div>

      {/* Modal para mostrar más información */}
      {acompañamientoSeleccionado && (
        <Informacion
          producto={acompañamientoSeleccionado}
          onClose={() => setAcompañamientoSeleccionado(null)}
        />
      )}
    </div>
  );
};

export default ProductosAcompañamientos;
