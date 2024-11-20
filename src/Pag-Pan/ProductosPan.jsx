import React, { useState } from 'react';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';
import Informacion from '../Informacion/Informacion';

const SERVER_URL = 'http://localhost:3000/assets';

const ProductosPan = () => {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  
    const handleVerMasClick = (producto) => {
      setProductoSeleccionado(producto);
    };

    const pan = [
        { imagen: `${SERVER_URL}/Pan/pan_nuevo_hueco.jpg`, nombre: "Torta de Fresa", precio: "7000", descripcion: "Torta esponjosa con fresas frescas." },
        { imagen: `${SERVER_URL}/Pan/pan_nuevo_plano.jpg`, nombre: "Torta Blanca", precio: "5000", descripcion: "Torta blanca con cobertura cremosa." },
        { imagen: `${SERVER_URL}/Pan/pan_nuevo_rollo.jpg`, nombre: "Torta de Durazno", precio: "6000", descripcion: "Torta esponjosa con durazno fresco." },
        { imagen: `${SERVER_URL}/Pan/pan_nuevo_salado.jpg`, nombre: "Torta de Chocolate y Cereza", precio: "8000", descripcion: "Torta de chocolate con cerezas." },
      ];

      return (
        <div className="productos-postres">
          <h2 className="productos-postres__title">Antojos</h2>
          <p className="productos-postres__description">Deléitate con nuestros deliciosos Panes</p>
    
          <h2 className="NombrePostres">Antojos</h2>
          <div className="productos-postres__grid">
            {pan.map((producto, index) => (
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

export default ProductosPan;