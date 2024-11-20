import React from 'react';
import '../Styles/NavBar.scss';
import { Link } from 'react-router-dom';
const SERVER_URL = 'http://localhost:3000/assets'; 
import { useCarrito } from './CarritoContext';

const NavBar = () => {
  const { cantidadCarrito } = useCarrito();

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src={`${SERVER_URL}/logo_nuevo.png`} alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links comfortaa-font">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Acompañamientos">Acompañamientos</Link></li>
        <li><Link to="/postres">Postres</Link></li>
        <li><Link to="/bebidas">Bebidas</Link></li>
        <li><Link to="/desayunos">Desayunos</Link></li>
        <li><Link to="/contacto" className="contact-btn">Contacto</Link></li>
        <li>
       <Link to="/carrito" className="carrito-btn">
        <img src={`${SERVER_URL}/carrito-de-compras.png`} alt="Carrito de Compras" className="carrito-icon" />
        {cantidadCarrito > 0 && <span className="carrito-count">{cantidadCarrito}</span>}
      </Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
