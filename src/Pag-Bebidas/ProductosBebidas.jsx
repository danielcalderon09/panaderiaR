import React, { useState } from 'react';
import '../Styles/ProductosBebidas.scss';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';
import Informacion from '../Informacion/Informacion';

// Importación de imágenes
import frio_chocolate from '../assets/Bebidas/frio_chocolate.jpg';
import frio_kiwi from '../assets/Bebidas/frio_kiwi.jpg';
import frio_malteada_fresa from '../assets/Bebidas/frio_malteada_fresa.jpg';
import frio_malteada_sabor from '../assets/Bebidas/frio_malteada_sabor.jpg';
import caliente_capuchino from '../assets/Bebidas/caliente_capuchino.jpg';
import caliente_late_2 from '../assets/Bebidas/caliente_late_2.jpg';
import caliente_late from '../assets/Bebidas/caliente_late.jpg';
import caliente_te from '../assets/Bebidas/caliente_te.jpg';
import jugo_fresa from '../assets/Bebidas/jugo_fresa.jpg';
import jugo_guayaba from '../assets/Bebidas/jugo_guayaba.jpg';
import jugo_leche from '../assets/Bebidas/jugo_leche.jpg';
import jugo_naranja from '../assets/Bebidas/jugo_naranja.jpg';

const ProductosBebidas = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleVerMasClick = (producto) => {
    setProductoSeleccionado(producto);
  };

  // Datos de las bebidas organizados por categorías
  const bebidasFrias = [
    { imagen: frio_chocolate, nombre: "Chocolate Frío", precio: "7000", descripcion: "Chocolate frío refrescante y delicioso." },
    { imagen: frio_kiwi, nombre: "Malteada de Kiwi", precio: "7000", descripcion: "Malteada de kiwi exótica y refrescante." },
    { imagen: frio_malteada_fresa, nombre: "Malteada de Fresa", precio: "7000", descripcion: "Malteada de fresa cremosa y dulce." },
    { imagen: frio_malteada_sabor, nombre: "Malteada Saborizada", precio: "7000", descripcion: "Malteada con tu sabor favorito." },
  ];

  const bebidasCalientes = [
    { imagen: caliente_capuchino, nombre: "Capuchino", precio: "7000", descripcion: "Capuchino caliente con espuma cremosa." },
    { imagen: caliente_late_2, nombre: "Latte Clásico", precio: "7000", descripcion: "Latte suave con un toque de café." },
    { imagen: caliente_late, nombre: "Latte Mágico", precio: "7000", descripcion: "Latte con un sabor mágico y especial." },
    { imagen: caliente_te, nombre: "Té Caliente", precio: "7000", descripcion: "Té caliente para relajarte." },
  ];

  const jugosNaturales = [
    { imagen: jugo_fresa, nombre: "Jugo de Fresa", precio: "7000", descripcion: "Jugo natural de fresas frescas." },
    { imagen: jugo_guayaba, nombre: "Jugo de Guayaba", precio: "7000", descripcion: "Jugo de guayaba con un sabor tropical." },
    { imagen: jugo_leche, nombre: "Jugo con Leche", precio: "7000", descripcion: "Jugo natural con un toque de leche." },
    { imagen: jugo_naranja, nombre: "Jugo de Naranja", precio: "7000", descripcion: "Jugo de naranja recién exprimido." },
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
