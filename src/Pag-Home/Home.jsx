import React from 'react';
import Carousel from '../componentes/Carrusel';
import ConoceProductos from '../componentes/ConoceProductos';
import ProductosDestacados from '../componentes/ProductosDestacados';
import Promociones from '../componentes/Promociones';

const Home = () => {
  return (
    <>
      <Carousel />
      <ConoceProductos />
      <ProductosDestacados />
      <Promociones />
    </>
  );
};

export default Home;