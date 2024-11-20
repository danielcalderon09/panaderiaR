import React, { useState } from 'react';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';
import Informacion from '../Informacion/Informacion';

const SERVER_URL = 'http://localhost:3000/assets';

const ProductosPostres = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleVerMasClick = (producto) => {
    setProductoSeleccionado(producto);
  };

  const tortas = [
    { imagen: `${SERVER_URL}/Postres/torta_mora.jpg`, nombre: "Torta de Fresa", precio: "7000", descripcion: "Torta esponjosa con fresas frescas." },
    { imagen: `${SERVER_URL}/Postres/torta_nueva_mora.jpg`, nombre: "Torta Blanca", precio: "5000", descripcion: "Torta blanca con cobertura cremosa." },
    { imagen: `${SERVER_URL}/Postres/torta_nuevo_durazno.jpg`, nombre: "Torta de Durazno", precio: "6000", descripcion: "Torta esponjosa con durazno fresco." },
    { imagen: `${SERVER_URL}/Postres/torta_nuevo_cereza.jpg`, nombre: "Torta de Chocolate y Cereza", precio: "8000", descripcion: "Torta de chocolate con cerezas." },
  ];

  const cupcakes = [
    { imagen: `${SERVER_URL}/Postres/cupcake_nuevo_chocolate.jpg`, nombre: "Cupcake Arcoiris", precio: "7000", descripcion: "Coloridos cupcakes con sabor vainilla." },
    { imagen: `${SERVER_URL}/Postres/cupcake_nuevo_crema.jpg`, nombre: "Cupcake de Chocolate", precio: "7000", descripcion: "Cupcake esponjoso de chocolate." },
    { imagen: `${SERVER_URL}/Postres/cupcake_nuevo_corazon.jpg`, nombre: "Cupcake Fresa Chocolate", precio: "7000", descripcion: "Cupcake con mezcla de fresa y chocolate." },
    { imagen: `${SERVER_URL}/Postres/cupcake_nuevo_arcoiris.jpg`, nombre: "Cupcake de Fresa", precio: "7000", descripcion: "Cupcake suave con sabor a fresa." },
  ];

  const individuales = [
    { imagen: `${SERVER_URL}/Postres/macarrones_nuevo_colores.jpg`, nombre: "Macarrones de Colores", precio: "7000", descripcion: "Deliciosos macarrones de colores." },
    { imagen: `${SERVER_URL}/Postres/brownies_nuevo.jpg`, nombre: "Brownie", precio: "7000", descripcion: "Brownie de chocolate intenso." },
    { imagen: `${SERVER_URL}/Postres/galleta_nuevo.jpg`, nombre: "Galleta", precio: "7000", descripcion: "Galleta grande y crujiente." },
    { imagen: `${SERVER_URL}/Postres/macarrones_nuevo_fresa.jpg`, nombre: "Macarrones de Fresa", precio: "7000", descripcion: "Macarrones con sabor a fresa." },
  ];

  const helados = [
    { imagen: `${SERVER_URL}/Postres/helado_nuevo_bola.jpg`, nombre: "Malteada Helada", precio: "7000", descripcion: "Malteada refrescante con helado." },
    { imagen: `${SERVER_URL}/Postres/helado_nuevo_cono.jpg`, nombre: "Helado Casero", precio: "7000", descripcion: "Helado artesanal hecho en casa." },
    { imagen: `${SERVER_URL}/Postres/helado-plato.jpg`, nombre: "Helado de Crema", precio: "7000", descripcion: "Helado suave de crema." },
    { imagen: `${SERVER_URL}/Postres/helado_nuevo_frutas.jpg`, nombre: "Ensalada de Frutas Helada", precio: "7000", descripcion: "Ensalada de frutas con helado." },
  ];

  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title">Postres</h2>
      <p className="productos-postres__description">Deléitate con nuestros deliciosos postres</p>

      <h2 className="NombrePostres">Tortas</h2>
      <div className="productos-postres__grid">
        {tortas.map((producto, index) => (
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

      <h2 className="NombrePostres">Cupcakes</h2>
      <div className="productos-postres__grid">
        {cupcakes.map((producto, index) => (
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

      <h2 className="NombrePostres">Postres Individuales</h2>
      <div className="productos-postres__grid">
        {individuales.map((producto, index) => (
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

      <h2 className="NombrePostres">Helados</h2>
      <div className="productos-postres__grid">
        {helados.map((producto, index) => (
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

export default ProductosPostres;
