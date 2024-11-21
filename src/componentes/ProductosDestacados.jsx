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
      <h2 className="productos-destacados__title comfortaa-font">Productos Destacados</h2>
      <p className="productos-destacados__description comfortaa-font">
        Disfruta de nuestros productos más deliciosos
      </p>

      <div className="productos-destacados__grid comfortaa-font">
        {/* Pan */}
        <ProductoCard imagen={`${SERVER_URL}/Pan/pan_croasan.jpg`} nombre="Croissant" precio="5.000" verMas onVerMasClick={() => handleVerMas("pan")} />
        <ProductoCard imagen={`${SERVER_URL}/Pan/pan_nuevo_plano.jpg`} nombre="Pan de Trigo" precio="7.000" verMas onVerMasClick={() => handleVerMas("pan")} />
        <ProductoCard imagen={`${SERVER_URL}/Pan/pan_nuevo_rollo.jpg`} nombre="Rollos de Canela" precio="4.000" verMas onVerMasClick={() => handleVerMas("pan")} />
        <ProductoCard imagen={`${SERVER_URL}/Pan/pan_nuevo_hueco.jpg`} nombre="Pan Redondo" precio="5.000" verMas onVerMasClick={() => handleVerMas("pan")} />

        {/* Postres */}
        <ProductoCard imagen={`${SERVER_URL}/Postres/torta_mora.jpg`} nombre="Pastel de Fresa" precio="7.000" verMas onVerMasClick={() => handleVerMas("postres")} />
        <ProductoCard imagen={`${SERVER_URL}/Postres/macarrones_nuevo.jpg`} nombre="Macaroons" precio="4.000" verMas onVerMasClick={() => handleVerMas("postres")} />
        <ProductoCard imagen={`${SERVER_URL}/Postres/helado_nuevo_cono.jpg`} nombre="Conos de Helado" precio="4.000" verMas onVerMasClick={() => handleVerMas("postres")} />
        <ProductoCard imagen={`${SERVER_URL}/Postres/torta_nuevo_durazno.jpg`} nombre="Torta Durazno" precio="4.000" verMas onVerMasClick={() => handleVerMas("postres")} />

        {/* Bebidas */}
        <ProductoCard imagen={`${SERVER_URL}/Bebidas/jugo_nuevo_mora.jpg`} nombre="Jugo de Arándanos" precio="4.000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
        <ProductoCard imagen={`${SERVER_URL}/Bebidas/capuchino_nuevo.jpg`} nombre="Chocolate Caliente" precio="4.000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
        <ProductoCard imagen={`${SERVER_URL}/Bebidas/cerezada_nuevo.jpg`} nombre="Soda de Lavanda" precio="4.000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
        <ProductoCard imagen={`${SERVER_URL}/Bebidas/caliente_late_2.jpg`} nombre="Cappuccino" precio="4.000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
      </div>
    </div>
  );
};

export default ProductosDestacados;
