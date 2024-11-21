import React from 'react';
import '../Styles/Footer.scss';

const SERVER_URL = 'http://localhost:3000/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={`${SERVER_URL}/logo_nuevo.png`} alt="Logo de la Panadería" />
        </div>
        
        <div className="footer__description comfortaa-font">
          <p>¡Disfruta del mejor pan y dulces recién horneados!</p>
          <p>En nuestra panadería, cada producto es elaborado con amor y dedicación.</p>
        </div>

        <div className="footer__socials">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={`${SERVER_URL}/facebook.png`} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={`${SERVER_URL}/Instagram.png`} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="footer__copy comfortaa-font">
        <p>&copy; {new Date().getFullYear()} Panorama. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
