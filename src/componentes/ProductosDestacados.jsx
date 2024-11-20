import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ProductosDestacados.scss';
import ProductoCard from './ProductoCard';

const SERVER_URL = 'http://localhost:3000/assets'; 

const ProductosDestacados = () => {
  const navigate = useNavigate();

  const handleVerMas = (categoria) => {
    navigate(`/${categoria}`);
  };

  return (
    <div className="productos-destacados">
      <h2 className="productos-destacados__title">Productos destacados</h2>
      <p className="productos-destacados__description">
        Disfruta de nuestros productos más deliciosos
      </p>

      <div className="productos-destacados__grid">
        {/* Desayunos */}
        <ProductoCard imagen={`${SERVER_URL}/Pan/pan_croasan.jpg`} nombre="Croasan" precio="5000" verMas onVerMasClick={() => handleVerMas("desayunos")} />
        <ProductoCard imagen={`${SERVER_URL}/Pan/pan_nuevo_plano.jpg`} nombre="Pan Relleno" precio="7000" verMas onVerMasClick={() => handleVerMas("desayunos")} />
        <ProductoCard imagen={`${SERVER_URL}/Pan/pan_nuevo_rollo.jpg`} nombre="Pan Redondo" precio="4000" verMas onVerMasClick={() => handleVerMas("desayunos")} />
        <ProductoCard imagen={`${SERVER_URL}/Pan/pan_nuevo_hueco.jpg`} nombre="Pan Rollo" precio="5000" verMas onVerMasClick={() => handleVerMas("desayunos")} />

        {/* Postres */}
        <ProductoCard imagen={`${SERVER_URL}/Postres/torta_mora.jpg`} nombre="Postre de Fresa" precio="7000" verMas onVerMasClick={() => handleVerMas("postres")} />
        <ProductoCard imagen={`${SERVER_URL}/Postres/macarrones_nuevo.jpg`} nombre="Macarrones" precio="4000" verMas onVerMasClick={() => handleVerMas("postres")} />
        <ProductoCard imagen={`${SERVER_URL}/Postres/helado_nuevo_cono.jpg`} nombre="Postre Chocolate" precio="4000" verMas onVerMasClick={() => handleVerMas("postres")} />
        <ProductoCard imagen={`${SERVER_URL}/Postres/torta_nuevo_durazno.jpg`} nombre="Torta Durazno" precio="4000" verMas onVerMasClick={() => handleVerMas("postres")} />

        {/* Bebidas */}
        <ProductoCard imagen={`${SERVER_URL}/Bebidas/jugo_nuevo_mora.jpg`} nombre="Malteada Oreo" precio="4000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
        <ProductoCard imagen={`${SERVER_URL}/Bebidas/capuchino_nuevo.jpg`} nombre="Limonada" precio="4000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
        <ProductoCard imagen={`${SERVER_URL}/Bebidas/cerezada_nuevo.jpg`} nombre="Late Express" precio="4000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
        <ProductoCard imagen={`${SERVER_URL}/Bebidas/caliente_late_2.jpg`} nombre="Cafe Magico" precio="4000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
      </div>
    </div>
  );
};

export default ProductosDestacados;
