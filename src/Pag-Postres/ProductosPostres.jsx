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
    { imagen: `${SERVER_URL}/Postres/torta_mora.jpg`, nombre: "Torta de Fresa", precio: "7.000", descripcion: "Torta esponjosa con fresas frescas, preparada con una base ligera de bizcocho y una capa cremosa de chantilly." },
    { imagen: `${SERVER_URL}/Postres/torta_nueva_mora.jpg`, nombre: "Torta Blanca", precio: "5.000", descripcion: "Torta blanca esponjosa, cubierta con una crema suave de mantequilla y vainilla, perfecta para cualquier ocasión." },
    { imagen: `${SERVER_URL}/Postres/torta_nuevo_durazno.jpg`, nombre: "Torta de Durazno", precio: "6.000", descripcion: "Deliciosa torta esponjosa rellena con durazno fresco y cubierta con una suave capa de crema de chantilly." },
    { imagen: `${SERVER_URL}/Postres/torta_nuevo_cereza.jpg`, nombre: "Torta de Chocolate y Cereza", precio: "8.000", descripcion: "Torta de chocolate densa y rica, rellena con cerezas frescas y cubierta con una capa cremosa de chocolate." },
  ];
  
  const cupcakes = [
    { imagen: `${SERVER_URL}/Postres/cupcake_nuevo_chocolate.jpg`, nombre: "Cupcake de Chocolate", precio: "7.000", descripcion: "Delicioso cupcake de chocolate, cubierto con una suave crema de chocolate y decorado con un toque de cacao." },
    { imagen: `${SERVER_URL}/Postres/cupcake_nuevo_crema.jpg`, nombre: "Cupcake de Arequipe", precio: "7.000", descripcion: "Cupcake esponjoso con un corazón de arequipe, cubierto con una capa cremosa y decorado con un toque de dulce de leche." },
    { imagen: `${SERVER_URL}/Postres/cupcake_nuevo_corazon.jpg`, nombre: "Cupcake de Fresa y Chocolate", precio: "7.000", descripcion: "Mezcla perfecta de fresa y chocolate en un cupcake esponjoso, decorado con un suave glaseado de fresa." },
    { imagen: `${SERVER_URL}/Postres/cupcake_nuevo_arcoiris.jpg`, nombre: "Cupcake Arcoíris", precio: "7.000", descripcion: "Cupcake suave de fresa, cubierto con un glaseado arcoíris de colores vibrantes que despiertan los sentidos." },
  ];
  
  const individuales = [
    { imagen: `${SERVER_URL}/Postres/macarrones_nuevo_colores.jpg`, nombre: "Macaroons de Colores", precio: "7.000", descripcion: "Macarrones crujientes por fuera, rellenos de ganache suave y cremoso, disponibles en varios colores vibrantes." },
    { imagen: `${SERVER_URL}/Postres/brownies_nuevo.jpg`, nombre: "Brownie", precio: "7.000", descripcion: "Brownie de chocolate intenso, con un interior suave y húmedo, y una capa exterior ligeramente crujiente." },
    { imagen: `${SERVER_URL}/Postres/galleta_nuevo.jpg`, nombre: "Galleta", precio: "7.000", descripcion: "Galleta grande, crujiente por fuera y suave por dentro, con un toque de vainilla y chocolate." },
    { imagen: `${SERVER_URL}/Postres/macarrones_nuevo_fresa.jpg`, nombre: "Macaroons de Fresa", precio: "7.000", descripcion: "Macarrones delicados con un sabor a fresa fresco y un relleno de ganache de fresa, perfectos para los amantes de lo dulce." },
  ];
  
  const helados = [
    { imagen: `${SERVER_URL}/Postres/helado_nuevo_bola.jpg`, nombre: "Waffles con Helado", precio: "7.000", descripcion: "Crujientes waffles acompañados de una bola de helado artesanal de tu elección, un toque fresco y dulce." },
    { imagen: `${SERVER_URL}/Postres/helado_nuevo_cono.jpg`, nombre: "Conos de Helado", precio: "7.000", descripcion: "Helado artesanal de diversos sabores, servido en un cono crujiente y refrescante." },
    { imagen: `${SERVER_URL}/Postres/helado-plato.jpg`, nombre: "Helado en Canasta", precio: "7.000", descripcion: "Helado suave y cremoso, servido en una canasta comestible que complementa su sabor." },
    { imagen: `${SERVER_URL}/Postres/helado_nuevo_frutas.jpg`, nombre: "Ensalada de Frutas con Helado", precio: "7.000", descripcion: "Frescas frutas de temporada acompañadas de una bola de helado artesanal, ideal para un toque refrescante." },
  ];
  
  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title courgette-regular">Postres</h2>
      <p className="productos-postres__description comfortaa-font">Descubre la dulzura perfecta en cada bocado: postres elaborados con ingredientes selectos y un toque de amor</p>

      <h2 className="NombrePostres courgette-regular">Tortas</h2>
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

      <h2 className="NombrePostres courgette-regular">Cupcakes</h2>
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

      <h2 className="NombrePostres courgette-regular">Postres Individuales</h2>
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

      <h2 className="NombrePostres courgette-regular">Helados</h2>
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
