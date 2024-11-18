import React, { useState } from 'react';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';
import Informacion from '../Informacion/Informacion';

// Importación de imágenes
import postrefresa from '../assets/Postres/Postre-fresa.jpg';
import postrechocolate from '../assets/Postres/postre-torta-chocolate.jpg';
import postrehelado from '../assets/Postres/postre-helado.jpg';
import postretorta from '../assets/Postres/postre-torta.jpg';
import tortaBlanca from '../assets/Postres/torta_blanca.jpg';
import torta_cereza from '../assets/Postres/torta_chocolate_cereza.jpg';
import torta_durazno from '../assets/Postres/torta_durazno.jpg';
import torta_fresa from '../assets/Postres/torta_fresa.jpg';
import torta_manzana from '../assets/Postres/torta_manzana.jpg';
import cupcake_arcoiris from '../assets/Postres/cupcake_arcoiris.jpg';
import cupcake_chocolate from '../assets/Postres/cupcake_chocolate.jpg';
import cupcake_fresa_chocolate from '../assets/Postres/cupcake_fresa_chocolate.png';
import cupcake_fresa from '../assets/Postres/cupcake_fresa.jpg';
import cupcake_mora from '../assets/Postres/cupcake_mora.png';
import individual_brownie from '../assets/Postres/individual_brownies.jpg';
import individual_macarrones_colores from '../assets/Postres/individual_macarrones_colores.jpg';
import individual_macarrones from '../assets/Postres/individual_macarrones.jpg';
import individual_macarrones_fresa from '../assets/Postres/individua_macarrones_fresa.jpg';
import individual_galleta from '../assets/Postres/individual_galleta.jpg';
import helado_casero from '../assets/Postres/helado_casero.jpg';
import helado_crema from '../assets/Postres/helado_crema.jpg';
import helado_ensalada from '../assets/Postres/helado_ensalada.jpg';
import helado_malteada from '../assets/Postres/helado_malteada.jpg';

const ProductosPostres = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleVerMasClick = (producto) => {
    setProductoSeleccionado(producto);
  };

  
  const tortas = [
    { imagen: torta_fresa, nombre: "Torta de Fresa", precio: "7000", descripcion: "Torta esponjosa con fresas frescas." },
    { imagen: tortaBlanca, nombre: "Torta Blanca", precio: "5000", descripcion: "Torta blanca con cobertura cremosa." },
    { imagen: torta_durazno, nombre: "Torta de Durazno", precio: "6000", descripcion: "Torta esponjosa con durazno fresco." },
    { imagen: torta_cereza, nombre: "Torta de Chocolate y Cereza", precio: "8000", descripcion: "Torta de chocolate con cerezas." },
    
  ];

  const cupcakes = [
    { imagen: cupcake_arcoiris, nombre: "Cupcake Arcoiris", precio: "7000", descripcion: "Coloridos cupcakes con sabor vainilla." },
    { imagen: cupcake_chocolate, nombre: "Cupcake de Chocolate", precio: "7000", descripcion: "Cupcake esponjoso de chocolate." },
    { imagen: cupcake_fresa_chocolate, nombre: "Cupcake Fresa Chocolate", precio: "7000", descripcion: "Cupcake con mezcla de fresa y chocolate." },
    { imagen: cupcake_fresa, nombre: "Cupcake de Fresa", precio: "7000", descripcion: "Cupcake suave con sabor a fresa." },
    
  ];

  const individuales = [
    { imagen: individual_macarrones_colores, nombre: "Macarrones de Colores", precio: "7000", descripcion: "Deliciosos macarrones de colores." },
    { imagen: individual_brownie, nombre: "Brownie", precio: "7000", descripcion: "Brownie de chocolate intenso." },
    { imagen: individual_galleta, nombre: "Galleta", precio: "7000", descripcion: "Galleta grande y crujiente." },
    { imagen: individual_macarrones_fresa, nombre: "Macarrones de Fresa", precio: "7000", descripcion: "Macarrones con sabor a fresa." },
    
  ];

  const helados = [
    { imagen: helado_malteada, nombre: "Malteada Helada", precio: "7000", descripcion: "Malteada refrescante con helado." },
    { imagen: helado_casero, nombre: "Helado Casero", precio: "7000", descripcion: "Helado artesanal hecho en casa." },
    { imagen: helado_crema, nombre: "Helado de Crema", precio: "7000", descripcion: "Helado suave de crema." },
    { imagen: helado_ensalada, nombre: "Ensalada de Frutas Helada", precio: "7000", descripcion: "Ensalada de frutas con helado." },
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
