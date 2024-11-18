import React from 'react';
import '../Styles/InfoProductos.scss';

const Informacion = ({ producto, onClose }) => {
  return (
    <div className="informacion">
      <div className="informacion__content">
        <img src={producto.imagen} alt={producto.nombre} className="informacion__imagen" />
        <div className="informacion__detalles">
          <h2 className="informacion__nombre">{producto.nombre}</h2>
          <p className="informacion__descripcion">{producto.descripcion}</p>
          {/* <textarea
            className="informacion__sugerencias"
            placeholder="Escribe tus sugerencias aquí..."
          ></textarea> */}
          <div className="informacion__cantidad">
            <label>Cantidad:</label>
            <input type="number" min="1" defaultValue="1" className="informacion__input" />
          </div>
          <button className="informacion__comprar">Comprar</button>
          <button className="informacion__cerrar" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
