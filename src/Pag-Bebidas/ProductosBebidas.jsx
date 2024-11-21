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
    { imagen: `${SERVER_URL}/cerezada_nuevo.jpg`, nombre: "Soda de Frambuesa", precio: "7.000", descripcion: "Refrescante soda de frambuesa, combinada con agua con gas y un toque de limón." },
    { imagen: `${SERVER_URL}/coctel_nuevo_cristal.jpg`, nombre: "Limonada Azul con Menta", precio: "7.000", descripcion: "Limonada fresca con un toque de menta y un color azul vibrante, perfecta para el calor." },
    { imagen: `${SERVER_URL}/coctel_nuevo_verde.jpg`, nombre: "Soda de Frutos Verdes", precio: "7.000", descripcion: "Deliciosa soda de manzana, pepino y limón, con un toque de menta fresca." },
    { imagen: `${SERVER_URL}/jugo_nuevo_color.jpg`, nombre: "Soda de Frutos Amarillos", precio: "7.000", descripcion: "Soda refrescante de piña y mango, con un toque burbujeante para un sabor tropical." },
  ];
  
  const bebidasCalientes = [
    { imagen: `${SERVER_URL}/capuchino_nuevo_crema.jpg`, nombre: "Chocolate con Crema Batida", precio: "7.000", descripcion: "Chocolate caliente rico y cremoso, cubierto con una suave capa de crema batida." },
    { imagen: `${SERVER_URL}/caliente_late_2.jpg`, nombre: "Cappuccino", precio: "7.000", descripcion: "Café espresso con leche vaporizada y una capa espumosa, el clásico cappuccino." },
    { imagen: `${SERVER_URL}/capuchino_nuevo.jpg`, nombre: "Chocolate", precio: "7.000", descripcion: "Chocolate caliente de alta calidad, con una textura suave y reconfortante." },
    { imagen: `${SERVER_URL}/te_nuevo.jpg`, nombre: "Aromática", precio: "7.000", descripcion: "Té caliente aromático de hierbas naturales, ideal para relajarte." },
  ];
  
  const jugosNaturales = [
    { imagen: `${SERVER_URL}/limonada_nuevo.jpg`, nombre: "Limonada Natural", precio: "7.000", descripcion: "Limonada fresca, elaborada con limones naturales y endulzada de manera suave." },
    { imagen: `${SERVER_URL}/jugo_nuevo_mora.jpg`, nombre: "Jugo de Arándanos", precio: "7.000", descripcion: "Jugo natural de arándanos frescos, con un toque de limón para resaltar su frescura." },
    { imagen: `${SERVER_URL}/jugo_fresa.jpg`, nombre: "Jugo de Fresa", precio: "7.000", descripcion: "Exquisito jugo natural de fresas maduras, con un toque de miel para endulzar." },
    { imagen: `${SERVER_URL}/bebida-limonada.jpg`, nombre: "Jugo de Naranja", precio: "7.000", descripcion: "Jugo natural de naranja recién exprimida, lleno de frescura y vitamina C." },
  ];
  

  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title courgette-regular">Bebidas</h2>
      <p className="productos-postres__description comfortaa-font">Descubre nuestra selección de bebidas artesanales, perfectas para refrescar tu día y deleitar tus sentidos."</p>

      {/* Bebidas Frías */}
      <h2 className="NombrePostres courgette-regular">Bebidas Frías</h2>
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
      <h2 className="NombrePostres courgette-regular">Bebidas Calientes</h2>
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
      <h2 className="NombrePostres courgette-regular">Jugos Naturales</h2>
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
