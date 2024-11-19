import React from 'react';
import '../Styles/InfoProductos.scss';
import { useCarrito } from '../componentes/CarritoContext';

const Informacion = ({ producto, onClose }) => {
  const { agregarAlCarrito } = useCarrito();

  const handleComprar = () => {
  agregarAlCarrito();
  onClose(); 
};

  return (
    <div className="informacion">
      <div className="informacion__content">
        <img src={producto.imagen} alt={producto.nombre} className="informacion__imagen" />
        <div className="informacion__detalles">
          <h2 className="informacion__nombre">{producto.nombre}</h2>
          <p className="informacion__descripcion">{producto.descripcion}</p>
          <div className="informacion__cantidad">
            <label>Cantidad:</label>
            <input type="number" min="1" defaultValue="1" className="informacion__input" />
          </div>
          <button className="informacion__comprar" onClick={handleComprar}>Comprar</button>
          <button className="informacion__cerrar" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
