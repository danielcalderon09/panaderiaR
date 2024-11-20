
import React, { useState } from 'react';
import '../Styles/ProductosDesayunos.scss';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';
import Informacion from '../Informacion/Informacion';


const SERVER_URL = 'http://localhost:3000';

const ProductosDesayunos = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleVerMasClick = (producto) => {
    setProductoSeleccionado(producto);
  };

 
  const DesayunosCasa = [
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_aguacate.jpg`, nombre: 'Sandwich Aguacate', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_clasico.jpg`, nombre: 'Clásico', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_fritos.jpg`, nombre: 'Huevos Fritos', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_jamon.jpg`, nombre: 'Huevos con Jamón', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_tocino.jpg`, nombre: 'Huevos con Tocino', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_wafles.jpg`, nombre: 'Wafles', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_granola.jpg`, nombre: 'Granola', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_huevos_tocino.jpg`, nombre: 'Huevos con Tocino', precio: '7000', descripcion: "Sandwich con aguacate" },
  ];

  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title">Desayunos</h2>
      <p className="productos-postres__description">Disfruta de nuestros Desayunos</p>

      <h2 className="NombrePostres">Desayunos</h2>
      <div className="productos-postres__grid">
        {DesayunosCasa.map((producto, index) => (
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

      {productoSeleccionado && (
        <Informacion
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
        />
      )}
    </div>
  );
};

export default ProductosDesayunos;
