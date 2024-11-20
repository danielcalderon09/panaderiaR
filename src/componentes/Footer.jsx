import React from 'react';
import '../Styles/Footer.scss';

const SERVER_URL = 'http://localhost:3000/assets'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className='footer-1'>
          <div className="footer__logo">
            <img src={`${SERVER_URL}/logo_nuevo.png`} alt="Logo de la Panadería" />
          </div>
        
          <div className="footer__description">
            <p>¡Disfruta del mejor pan y dulces recién horneados! En nuestra panadería, cada producto es elaborado con amor y dedicación.</p>
          </div>
        </div>
        
        <div className='footer-2'>
          <div className="footer__images">
            <img src={`${SERVER_URL}/Pan/Croasan.jpg`} alt="Pan" />
            <img src={`${SERVER_URL}/Postres/Postre-fresa.jpg`} alt="Postre" />
            <img src={`${SERVER_URL}/Bebidas/bebida-grupo.jpg`} alt="Bebidas" />
          </div>
        
          <div className="footer__socials">
            <a href=""><img src={`${SERVER_URL}/facebook.png`} alt="Facebook" /></a>
            <a href=""><img src={`${SERVER_URL}/Instagram.png`} alt="Instagram" /></a>
          </div>
        </div>

      </div>

      <div className="footer__copy">
        <p>&copy; {new Date().getFullYear()} Panorama. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
