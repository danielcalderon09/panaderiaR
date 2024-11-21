import React from 'react';
import '../Styles/ProductoCard.scss';

const ProductoCard = ({ imagen, nombre, precio, showButton, buttonText = "Añadir al carrito", onButtonClick, verMas, onVerMasClick, Comprar }) => {
  return (
    <div className="producto-card">
      <img src={imagen} alt={nombre} className="producto-card__imagen" />
      <h3 className="producto-card__nombre comfortaa-font">{nombre}</h3>
      <p className="producto-card__precio comfortaa-font">${precio}</p>
      
      {showButton && (
        <button className="producto-card__button comfortaa-font" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
      
      {verMas && (
        <button className="producto-card__ver-mas comfortaa-font" onClick={onVerMasClick}>
          Ver Más
        </button>
      )}

      {Comprar && (
        <button className="producto-card__ver-mas comfortaa-font" onClick={onVerMasClick}>
          Añadir al carrito
        </button>
      )}
    </div>
  );
};

export default ProductoCard;