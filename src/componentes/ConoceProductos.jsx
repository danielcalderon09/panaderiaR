import React from 'react';
import '../Styles/ConoceProductos.scss';
import { Link } from 'react-router-dom';

const SERVER_URL = 'http://localhost:3000/assets'; 

const ConoceProductos = () => {
  return (
    <div className="conoce-productos">
      <h2 className="conoce-productos__title comfortaa-font">Conoce Nuestros Productos</h2>
      <p className="conoce-productos__description comfortaa-font">
        Escoge tus productos y disfruta del Panorama donde quiera que estés.
      </p>

      <div className="conoce-productos__gallery">
        <Link to="/pan" className="conoce-productos__item comfortaa-font">
          <img src={`${SERVER_URL}/Pan/pan_nuevo_plano.jpg`} alt="Pan" />
          <h3>Pan</h3>
        </Link>
        
        <Link to="/postres" className="conoce-productos__item comfortaa-font">
          <img src={`${SERVER_URL}/Postres/macarrones_nuevo.jpg`} alt="Postres" />
          <h3>Postres</h3>
        </Link>
        
        <Link to="/bebidas" className="conoce-productos__item comfortaa-font">
          <img src={`${SERVER_URL}/Bebidas/bebida-limonada.jpg`} alt="Bebidas" />
          <h3>Bebidas</h3>
        </Link>
      </div>
    </div>
  );
};

export default ConoceProductos;
