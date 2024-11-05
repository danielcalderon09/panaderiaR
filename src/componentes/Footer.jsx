import React from 'react';
import '../Styles/Footer.scss';
import logo from '../assets/logo_nuevo.png'; 
import facebookIcon from '../assets/facebook.png'; 
import instagramIcon from '../assets/Instagram.png'; 
import croasan from '../assets/Pan/Croasan.jpg';
import postrefresa from '../assets/Postres/Postre-fresa.jpg';
import bebida from '../assets/Bebidas/bebida-grupo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className='footer-1'>
          <div className="footer__logo">
          <img src={logo} alt="Logo de la Panadería" />
          </div>
        
          <div className="footer__description">
          <p>¡Disfruta del mejor pan y dulces recién horneados! En nuestra panadería, cada producto es elaborado con amor y dedicación.</p>
         </div>
        </div>
        
        <div className='footer-2'>
          <div className="footer__images">
          <img src={croasan} alt="Pan" />
          <img src={postrefresa} alt="Postre" />
          <img src={bebida} alt="Bebidas" />
        </div>
        
          <div className="footer__socials">
          <a href=""><img src={facebookIcon} alt="Facebook" /></a>
          <a href=""><img src={instagramIcon} alt="Instagram" /></a>
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