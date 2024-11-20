import React from 'react';
import '../Styles/Promociones.scss';

const SERVER_URL = 'http://localhost:3000/assets'; 

const Promociones = () => {
  return (
    <div className="promociones">
      <div className="promociones__text">
        <h2 className="promociones__title">No te pierdas esta promoción el día de hoy</h2>
        <p className="promociones__description">Esta promoción es tan especial, como tú</p>
      </div>
      <div className="promociones__image-container">
        <img src={`${SERVER_URL}/Promociones/promocion-especial.jpg`} alt="Promoción del día" className="promociones__image" />
      </div>
    </div>
  );
};

export default Promociones;
