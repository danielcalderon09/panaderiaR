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
        { imagen: `${SERVER_URL}/Pan/pan_nuevo_hueco.jpg`, nombre: "Pan Redondo", precio: "7.000", descripcion: "Delicado pan de mantequilla, suave y esponjoso, con un toque de fresas frescas, horneado a la perfección." },
        { imagen: `${SERVER_URL}/Pan/pan_nuevo_plano.jpg`, nombre: "Pan de Trigo", precio: "5.000", descripcion: "Sutil pan de trigo, con una textura ligera y una suave cobertura cremosa que realza su sabor." },
        { imagen: `${SERVER_URL}/Pan/pan_nuevo_rollo.jpg`, nombre: "Rollos de Canela", precio: "6.000", descripcion: "Esponjosos rollos de canela, rellenos de durazno fresco, con un toque de canela que despierta los sentidos." },
        { imagen: `${SERVER_URL}/Pan/pan_nuevo_salado.jpg`, nombre: "Pan Artesanal", precio: "8.000", descripcion: "Pan artesanal de chocolate, con un toque de cerezas frescas que dan vida a una experiencia única." },
      ];

      return (
        <div className="productos-postres">
          <h2 className="productos-postres__title courgette-regular">Panadería</h2>
          <p className="productos-postres__description comfortaa-font">Descubre el arte del pan recién horneado: tradición, sabor y calidad en cada bocado.</p>
    
          <h2 className="NombrePostres comfortaa-font"></h2>
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