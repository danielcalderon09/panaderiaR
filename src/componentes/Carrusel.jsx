import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.scss';


const slides = [
  { image: 'http://localhost:3000/assets/Pan/Croasan.jpg', text: '¡Deliciosos croasanes recién horneados!' },
  { image: 'http://localhost:3000/assets/Postres/Postre-fresa.jpg', text: 'Postre de fresa, ¡fresco y delicioso!' },
  { image: 'http://localhost:3000/assets/Pan/pan2.jpg', text: 'Panes exquisitos, ¡fresco y delicioso!' }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
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
