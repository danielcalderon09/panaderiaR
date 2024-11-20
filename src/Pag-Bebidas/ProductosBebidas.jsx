import React, { useState } from 'react';
import '../Styles/ProductosBebidas.scss';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';
import Informacion from '../Informacion/Informacion';

// URL base del servidor
const SERVER_URL = 'http://localhost:3000/assets/Bebidas';

const ProductosBebidas = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleVerMasClick = (producto) => {
    setProductoSeleccionado(producto);
  };

  
  const bebidasFrias = [
    { imagen: `${SERVER_URL}/cerezada_nuevo.jpg`, nombre: "Chocolate Frío", precio: "7000", descripcion: "Chocolate frío refrescante y delicioso." },
    { imagen: `${SERVER_URL}/coctel_nuevo_cristal.jpg`, nombre: "Malteada de Kiwi", precio: "7000", descripcion: "Malteada de kiwi exótica y refrescante." },
    { imagen: `${SERVER_URL}/coctel_nuevo_verde.jpg`, nombre: "Malteada de Fresa", precio: "7000", descripcion: "Malteada de fresa cremosa y dulce." },
    { imagen: `${SERVER_URL}/jugo_nuevo_color.jpg`, nombre: "Malteada Saborizada", precio: "7000", descripcion: "Malteada con tu sabor favorito." },
  ];

  const bebidasCalientes = [
    { imagen: `${SERVER_URL}/capuchino_nuevo_crema.jpg`, nombre: "Capuchino", precio: "7000", descripcion: "Capuchino caliente con espuma cremosa." },
    { imagen: `${SERVER_URL}/caliente_late_2.jpg`, nombre: "Latte Clásico", precio: "7000", descripcion: "Latte suave con un toque de café." },
    { imagen: `${SERVER_URL}/capuchino_nuevo.jpg`, nombre: "Latte Mágico", precio: "7000", descripcion: "Latte con un sabor mágico y especial." },
    { imagen: `${SERVER_URL}/te_nuevo.jpg`, nombre: "Té Caliente", precio: "7000", descripcion: "Té caliente para relajarte." },
  ];

  const jugosNaturales = [
    { imagen: `${SERVER_URL}/limonada_nuevo.jpg`, nombre: "Jugo de Fresa", precio: "7000", descripcion: "Jugo natural de fresas frescas." },
    { imagen: `${SERVER_URL}/jugo_nuevo_mora.jpg`, nombre: "Jugo de Guayaba", precio: "7000", descripcion: "Jugo de guayaba con un sabor tropical." },
    { imagen: `${SERVER_URL}/jugo_fresa.jpg`, nombre: "Jugo con Leche", precio: "7000", descripcion: "Jugo natural con un toque de leche." },
    { imagen: `${SERVER_URL}/bebida-limonada.jpg`, nombre: "Jugo de Naranja", precio: "7000", descripcion: "Jugo de naranja recién exprimido." },
  ];

  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title">Bebidas</h2>
      <p className="productos-postres__description">Disfruta de nuestras refrescantes bebidas</p>

      {/* Bebidas Frías */}
      <h2 className="NombrePostres">Bebidas Frías</h2>
      <div className="productos-postres__grid">
        {bebidasFrias.map((producto, index) => (
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

      {/* Bebidas Calientes */}
      <h2 className="NombrePostres">Bebidas Calientes</h2>
      <div className="productos-postres__grid">
        {bebidasCalientes.map((producto, index) => (
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

      {/* Jugos Naturales */}
      <h2 className="NombrePostres">Jugos Naturales</h2>
      <div className="productos-postres__grid">
        {jugosNaturales.map((producto, index) => (
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

export default ProductosBebidas;
