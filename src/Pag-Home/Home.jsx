import React from 'react';
import Carousel from '../componentes/Carrusel';
import ConoceProductos from '../componentes/ConoceProductos';
import ProductosDestacados from '../componentes/ProductosDestacados';
import Promociones from '../componentes/Promociones';
import MapaPanaderia from '../Api/MapaPanaderia'

const Home = () => {
  return (
    <>
      <Carousel />
      <ConoceProductos />
      <ProductosDestacados />
      <Promociones />
      <MapaPanaderia />
    </>
  );
};

export default Home;