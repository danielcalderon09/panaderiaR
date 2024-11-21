import React from 'react';
import '../Styles/ProductosPostres.scss';
import '../Styles/form.scss'; // Asegúrate de usar la ruta correcta para los estilos

const ContactForm= () => {
  return (
    <div className='contact-contact-contact'>

    <div className="contact-form-container productos-postres">
      <div className=" productos-postres__description contact-us">
        <div className="contact-header">
        </div>
      </div>
      <div className="header">
        <h1>Estamos Para Servirte</h1>
        <h2>¿Tienes dudas? ¡Contáctanos!</h2>
      </div>
      <div className="address">
        <i className="fas fa-map-marker-alt"></i>
        <h3>Cra. 1 #26A 1</h3>
        <h3>Neiva, Huila</h3>
      </div>
      <div className="phone">
        <i className="fas fa-phone-alt"></i>
        <h3>318 205 8603</h3>
      </div>
      <div className="email">
        <i className="fas fa-envelope"></i>
        <h3>Panorama@gmail.com</h3>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea rows="4" placeholder="¿Cómo te podemos ayudar?"></textarea>
          <button type="button">ENVIAR</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
