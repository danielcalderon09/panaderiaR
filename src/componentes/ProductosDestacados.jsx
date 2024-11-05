import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ProductosDestacados.scss';
import ProductoCard from './ProductoCard';

import croasan from '../assets/Pan/Croasan.jpg';
import panplano from '../assets/Pan/pan-plano.jpg';
import panredondo from '../assets/Pan/pan-redondo.jpg';
import panrollo from '../assets/Pan/pan-rollo.jpg';
import macarrones from '../assets/Postres/macarrones.jpg';
import postrefresa from '../assets/Postres/Postre-fresa.jpg';
import postrechocolate from '../assets/Postres/postre-torta-chocolate.jpg';
import postretorta from '../assets/Postres/postre-torta.jpg';
import malteada_oreo from '../assets/Bebidas/bebida-malteada-oreo.jpg';
import limonada from '../assets/Bebidas/bebida-limonada.jpg';
import late from '../assets/Bebidas/bebida-late.jpg';
import cafeleche from '../assets/Bebidas/bebida-cafeleche-2.jpg';

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
        <ProductoCard imagen={croasan} nombre="Croasan" precio="5000" verMas onVerMasClick={() => handleVerMas("desayunos")} />
        <ProductoCard imagen={panplano} nombre="Pan Relleno" precio="7000" verMas onVerMasClick={() => handleVerMas("desayunos")} />
        <ProductoCard imagen={panredondo} nombre="Pan Redondo" precio="4000" verMas onVerMasClick={() => handleVerMas("desayunos")} />
        <ProductoCard imagen={panrollo} nombre="Pan Rollo" precio="5000" verMas onVerMasClick={() => handleVerMas("desayunos")} />

        {/* Postres */}
        <ProductoCard imagen={postrefresa} nombre="Postre de Fresa" precio="7000" verMas onVerMasClick={() => handleVerMas("postres")} />
        <ProductoCard imagen={macarrones} nombre="Macarrones" precio="4000" verMas onVerMasClick={() => handleVerMas("postres")} />
        <ProductoCard imagen={postrechocolate} nombre="Postre Chocolate" precio="4000" verMas onVerMasClick={() => handleVerMas("postres")} />
        <ProductoCard imagen={postretorta} nombre="Torta Durazno" precio="4000" verMas onVerMasClick={() => handleVerMas("postres")} />

        {/* Bebidas */}
        <ProductoCard imagen={malteada_oreo} nombre="Malteada Oreo" precio="4000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
        <ProductoCard imagen={limonada} nombre="Limonada" precio="4000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
        <ProductoCard imagen={late} nombre="Late Express" precio="4000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
        <ProductoCard imagen={cafeleche} nombre="Cafe Magico" precio="4000" verMas onVerMasClick={() => handleVerMas("bebidas")} />
      </div>
    </div>
  );
};

export default ProductosDestacados;
