import React, { createContext, useContext, useState } from 'react';


const CarritoContext = createContext();


export const useCarrito = () => useContext(CarritoContext);


export const CarritoProvider = ({ children }) => {
  
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  
  const agregarAlCarrito = () => {
    setCantidadCarrito(cantidadCarrito + 1);
  };

 
  return (
    <CarritoContext.Provider value={{ cantidadCarrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
