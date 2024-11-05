import React from 'react';
import '../Styles/ProductosPostres.scss';
import ProductoCard from '../componentes/ProductoCard';

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
  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title">Postres</h2>
      <p className="productos-postres__description">
        Deléitate con nuestros deliciosos postres
      </p>

      <h2 className='NombrePostres'>Tortas</h2>
      <div className="productos-postres__grid">
        <ProductoCard imagen={torta_fresa} nombre="Postre de Fresa" precio="7000" showButton={true} />
        <ProductoCard imagen={tortaBlanca} nombre="Postre de Chocolate" precio="5000" showButton={true} />
        <ProductoCard imagen={torta_durazno} nombre="Postre Helado" precio="6000" showButton={true} />
        <ProductoCard imagen={postretorta} nombre="Torta Durazno" precio="8000" showButton={true} />
        <ProductoCard imagen={postrefresa} nombre="Postre de Fresa" precio="7000" showButton={true} />
        <ProductoCard imagen={torta_cereza} nombre="Postre de Chocolate" precio="5000" showButton={true} />
        <ProductoCard imagen={torta_manzana} nombre="Postre Helado" precio="6000" showButton={true} />
        <ProductoCard imagen={postretorta} nombre="Torta Durazno" precio="8000" showButton={true} />
      </div>

    <h2 className='NombrePostres'>Cupcakes</h2>
      <div className="productos-postres__grid">
        <ProductoCard imagen={cupcake_arcoiris} nombre="Cupcake Arcoiris" precio="7000" showButton={true} />
        <ProductoCard imagen={cupcake_chocolate} nombre="Cupcake Chocolate" precio="7000" showButton={true} />
        <ProductoCard imagen={cupcake_fresa_chocolate} nombre="Cupcake Fresita" precio="7000" showButton={true} />
        <ProductoCard imagen={cupcake_fresa} nombre="Cupcake Fresa" precio="7000" showButton={true} />
      </div>

      <h2 className='NombrePostres'>Postres Individuales</h2>
      <div className="productos-postres__grid">
        <ProductoCard imagen={individual_macarrones_colores} nombre="Macarrones Colores" precio="7000" showButton={true} />
        <ProductoCard imagen={individual_brownie} nombre="Brownies" precio="7000" showButton={true} />
        <ProductoCard imagen={individual_galleta} nombre="Galletas" precio="7000" showButton={true} />
        <ProductoCard imagen={individual_macarrones_fresa} nombre="Cupcake Fresa" precio="7000" showButton={true} />
      </div>

      <h2 className='NombrePostres'>Helados</h2>
      <div className="productos-postres__grid">
        <ProductoCard imagen={helado_malteada} nombre="Malteadas Helado" precio="7000" showButton={true} />
        <ProductoCard imagen={helado_casero} nombre="Helado Bolas" precio="7000" showButton={true} />
        <ProductoCard imagen={helado_crema} nombre="Helado Crema" precio="7000" showButton={true} />
        <ProductoCard imagen={helado_ensalada} nombre="Ensalada de frutas" precio="7000" showButton={true} />
      </div>

    </div>
  );
};

export default ProductosPostres;