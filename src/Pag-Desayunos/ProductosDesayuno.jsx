import React from 'react';
import '../Styles/ProductosDesayunos.scss';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';

import desayunos_aguacate from '../assets/Desayunos/desayunos_aguacate.jpg';
import desayunos_clasico from '../assets/Desayunos/desayunos_clasico.jpg';
import desayunos_fritos from '../assets/Desayunos/desayunos_fritos.jpg';
import desayunos_jamon from '../assets/Desayunos/desayunos_jamon.jpg';
import desayunos_tocino from '../assets/Desayunos/desayunos_tocino.jpg';
import desayunos_wafles from '../assets/Desayunos/desayunos_wafles.jpg';
import desayunos_granola from '../assets/Desayunos/desayunos_granola.jpg';
import desayunos_huevos_tocino from '../assets/Desayunos/desayunos_huevos_tocino.jpg';

const ProductosDesayunos = () => {
    return (
      <div className="productos-postres">
        <h2 className="productos-postres__title">  Desayunos </h2>
        <p className="productos-postres__description">
          Deléitate con nuestros deliciosos desayunos
        </p>
  
        <h2 className='NombrePostres'>Desayunos de la casa</h2>
        <div className="productos-postres__grid">
        <ProductoCard imagen={desayunos_aguacate} nombre=" Sandwich Aguacate" precio="7000" showButton={true} />
        <ProductoCard imagen={desayunos_clasico} nombre=" Clasico" precio="7000" showButton={true} />
        <ProductoCard imagen={desayunos_fritos} nombre=" Huevos fritos" precio="7000" showButton={true} />
        <ProductoCard imagen={desayunos_tocino} nombre=" Huevos con Jamon" precio="7000" showButton={true} />
        <ProductoCard imagen={desayunos_jamon} nombre=" Huevos con Tocino" precio="7000" showButton={true} />
        <ProductoCard imagen={desayunos_wafles} nombre=" Wafles" precio="7000" showButton={true} />
        <ProductoCard imagen={desayunos_granola} nombre=" Granola" precio="7000" showButton={true} />
        <ProductoCard imagen={desayunos_huevos_tocino} nombre=" Huevos con Tocino" precio="7000" showButton={true} />
          
        </div>
  
        
  
      </div>
    );
  };

  export default ProductosDesayunos;