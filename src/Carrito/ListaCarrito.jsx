import React from 'react';
import '../styles/ListaCarrito.scss';
import '../Styles/ProductosDesayunos.scss';
import '../Styles/ProductosPostres.scss';

const ListaCarrito = () => {
  return (
    <div className="productos-postres">
      <h2 className="productos-postres__title courgette-regular">Carrito de Compras</h2>
      <h2 className="productos-postres__title courgette-regular">Productos</h2>
      <p className="productos-postres__description comfortaa-font">Tu Lista</p>
      <p className="productos-postres__description comfortaa-font">Añade algo a tu carrito</p>
    <div className="lista-carrito">
    </div>
    </div>
  );
};

export default ListaCarrito;
