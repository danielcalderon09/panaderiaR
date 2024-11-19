import React, { useState } from 'react';
import '../Styles/ProductosDesayunos.scss';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';
import Informacion from '../Informacion/Informacion';

import desayunos_aguacate from '../assets/Desayunos/desayunos_aguacate.jpg';
import desayunos_clasico from '../assets/Desayunos/desayunos_clasico.jpg';
import desayunos_fritos from '../assets/Desayunos/desayunos_fritos.jpg';
import desayunos_jamon from '../assets/Desayunos/desayunos_jamon.jpg';
import desayunos_tocino from '../assets/Desayunos/desayunos_tocino.jpg';
import desayunos_wafles from '../assets/Desayunos/desayunos_wafles.jpg';
import desayunos_granola from '../assets/Desayunos/desayunos_granola.jpg';
import desayunos_huevos_tocino from '../assets/Desayunos/desayunos_huevos_tocino.jpg';

const ProductosDesayunos = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleVerMasClick = (producto) => {
    setProductoSeleccionado(producto);
  };

  const DesayunosCasa = [
    { imagen: desayunos_aguacate, nombre: 'Sandwich Aguacate', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: desayunos_clasico, nombre: 'Clásico', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: desayunos_fritos, nombre: 'Huevos Fritos', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: desayunos_jamon, nombre: 'Huevos con Jamón', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: desayunos_tocino, nombre: 'Huevos con Tocino', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: desayunos_wafles, nombre: 'Wafles', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: desayunos_granola, nombre: 'Granola', precio: '7000', descripcion: "Sandwich con aguacate" },
    { imagen: desayunos_huevos_tocino, nombre: 'Huevos con Tocino', precio: '7000', descripcion: "Sandwich con aguacate" },
  ];

  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title">Desayunos</h2>
      <p className="productos-postres__description">Disfruta de nuestros Desayunos</p>

      
      <h2 className="NombrePostres">Bebidas Frías</h2>
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