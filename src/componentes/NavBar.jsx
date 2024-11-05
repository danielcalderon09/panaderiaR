import React from 'react';
import '../Styles/NavBar.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_nuevo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/postres">Postres</Link></li>
        <li><Link to="/bebidas">Bebidas</Link></li>
        <li><Link to="/desayunos">Desayunos</Link></li>
        <li><Link to="/contacto" className="contact-btn">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;