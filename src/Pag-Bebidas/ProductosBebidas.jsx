import React from 'react';
import '../Styles/ProductosBebidas.scss';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';

import frio_chocolate from '../assets/Bebidas/frio_chocolate.jpg';
import frio_kiwi from '../assets/Bebidas/frio_kiwi.jpg';
import frio_malteada_fresa from '../assets/Bebidas/frio_malteada_fresa.jpg';
import frio_malteada_sabor from '../assets/Bebidas/frio_malteada_sabor.jpg';
import frio_malteada from '../assets/Bebidas/frio_malteada.jpg';
import caliente_capuchino from '../assets/Bebidas/caliente_capuchino.jpg';
import caliente_late_2 from '../assets/Bebidas/caliente_late_2.jpg';
import caliente_late from '../assets/Bebidas/caliente_late.jpg';
import caliente_te from '../assets/Bebidas/caliente_te.jpg';
import jugo_fresa from '../assets/Bebidas/jugo_fresa.jpg';
import jugo_guayaba from '../assets/Bebidas/jugo_guayaba.jpg';
import jugo_leche from '../assets/Bebidas/jugo_leche.jpg';
import jugo_naranja from '../assets/Bebidas/jugo_naranja.jpg';

const ProductosBebidas = () => {
    return (
      <div className="productos-postres">
        <h2 className="productos-postres__title">   Bebidas</h2>
        <p className="productos-postres__description">
          Deléitate con nuestros refrescantes bebidas
        </p>
  
        <h2 className='NombrePostres'>Bebidas Frias</h2>
        <div className="productos-postres__grid">
          <ProductoCard imagen={frio_chocolate} nombre="Postre de Fresa" precio="7000" showButton={true} />
          <ProductoCard imagen={frio_kiwi} nombre="Postre de Fresa" precio="7000" showButton={true} />
          <ProductoCard imagen={frio_malteada_fresa} nombre="Postre de Fresa" precio="7000" showButton={true} />
          <ProductoCard imagen={frio_malteada_sabor} nombre="Postre de Fresa" precio="7000" showButton={true} />
          
        </div>
  
        <h2 className='NombrePostres'>Bebidas Calientes</h2>
        <div className="productos-postres__grid">
        <ProductoCard imagen={caliente_capuchino} nombre="Capuchino" precio="7000" showButton={true} />
        <ProductoCard imagen={caliente_late_2} nombre="Late" precio="7000" showButton={true} />
        <ProductoCard imagen={caliente_late} nombre="Late Magico" precio="7000" showButton={true} />
        <ProductoCard imagen={caliente_te} nombre="Te" precio="7000" showButton={true} />  
        </div>

        <h2 className='NombrePostres'>Jugos Naturales</h2>
        <div className="productos-postres__grid">
        <ProductoCard imagen={jugo_fresa} nombre="Jugo Fresa" precio="7000" showButton={true} />
        <ProductoCard imagen={jugo_guayaba} nombre="Jugo Guayaba" precio="7000" showButton={true} />
        <ProductoCard imagen={jugo_leche} nombre="Jugo Leche" precio="7000" showButton={true} />
        <ProductoCard imagen={jugo_naranja} nombre="Jugo Naranja" precio="7000" showButton={true} />
          
        </div>
  
      </div>
    );
  };

  export default ProductosBebidas;