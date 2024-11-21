
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
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_aguacate.jpg`, nombre: 'Sándwich de Aguacate', precio: '7.000', descripcion: "Sándwich con aguacate fresco, acompañado de pan integral tostado y un toque de limón." },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_clasico.jpg`, nombre: 'Clásico', precio: '7.000', descripcion: "Sándwich clásico con huevo revuelto, aguacate y mayonesa, servido en pan crujiente." },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_fritos.jpg`, nombre: 'Huevos Fritos', precio: '7.000', descripcion: "Huevos fritos con una capa dorada, acompañados de pan tostado y un toque de sal y pimienta." },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_jamon.jpg`, nombre: 'Huevos con Jamón', precio: '7.000', descripcion: "Huevos revueltos con jamón ahumado, acompañados de pan suave y una pizca de queso rallado." },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_tocino.jpg`, nombre: 'Huevos con Tocino', precio: '7.000', descripcion: "Huevos revueltos con tocino crujiente y un toque de salsa barbacoa, acompañados de pan casero." },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_wafles.jpg`, nombre: 'Pancakes', precio: '7.000', descripcion: "Pancakes esponjosos con jarabe de arce, mantequilla derretida y un toque de frutos rojos frescos." },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_granola.jpg`, nombre: 'Granola', precio: '7.000', descripcion: "Granola casera con avena, miel, nueces y frutas secas, acompañada de yogur natural." },
    { imagen: `${SERVER_URL}/assets/Desayunos/desayunos_huevos_tocino.jpg`, nombre: 'Desayuno Americano', precio: '7.000', descripcion: "Desayuno típico con huevos revueltos, tocino crujiente, papas fritas y pan tostado." },
  ];
  

  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title courgette-regular">Desayunos</h2>
      <p className="productos-postres__description comfortaa-font">Empieza tu día con energía y sabor: descubre nuestros desayunos frescos, preparados con ingredientes de la más alta calidad.</p>

      <h2 className="NombrePostres"></h2>
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
