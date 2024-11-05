import React, { useState , useEffect } from 'react';
import '../Styles/Carrusel.scss';
import croasan from '../assets/Pan/Croasan.jpg';
import postrefresa from '../assets/Postres/Postre-fresa.jpg';
import panlargo from '../assets/Pan/pan2.jpg';


const slides = [
  { image: croasan, text: '¡Deliciosos croasanes recién horneados!' },
  { image: postrefresa, text: 'Postre de fresa, ¡fresco y delicioso!' },
  { image: panlargo, text: 'Panes exquisitos, ¡fresco y delicioso!' }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen cada 3 segundos automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  return (
    <div className="carousel">
      <div className="carousel__image-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel__slide ${index === currentIndex ? 'active' : ''}`}
          >
            {index === currentIndex && (
              <>
                <img src={slide.image} alt={`slide ${index}`} />
                <div className="carousel__text">{slide.text}</div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="carousel__dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel__dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;