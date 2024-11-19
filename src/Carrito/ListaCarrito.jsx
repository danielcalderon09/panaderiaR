import React from 'react';
import { useCarrito } from '../componentes/CarritoContext';
import '../styles/ListaCarrito.scss';

const ListaCarrito = () => {
  const { carrito } = useCarrito();

  
  if (carrito.length === 0) {
    return <p className="carrito-vacio">Tu carrito está vacío</p>;
  }

  return (
    <div className="lista-carrito">
      <h2>Carrito de Compras</h2>
      <ul className="carrito-items">
        {carrito.map((producto, index) => (
          <li key={index} className="carrito-item">
            <img src={producto.imagen} alt={producto.nombre} className="carrito-item__imagen" />
            <div className="carrito-item__info">
              <h3>{producto.nombre}</h3>
              <p>Cantidad: {producto.cantidad}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCarrito;
