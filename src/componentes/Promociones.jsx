import React from 'react';
import '../Styles/Promociones.scss';
import postre from '../assets/Postres/postre-torta-chocolate-fresa.jpg';
import torta from '../assets/Postres/torta_cumpleaños.jpg';
import especial from '../assets/Promociones/promocion-especial.jpg';

const Promociones = () => {
  return (
    <div className="promociones">
      <div className="promociones__text">
        <h2 className="promociones__title">No te pierdas esta promoción el día de hoy</h2>
        <p className="promociones__description">Esta promoción es tan especial, como tú</p>
      </div>
      <div className="promociones__image-container">
        <img src={especial} alt="Promoción del día" className="promociones__image" />
      </div>
    </div>
  );
};

export default Promociones;
