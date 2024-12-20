import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bebidas from './Pag-Bebidas/Bebidas';
import Home from './Pag-Home/Home';
import Postres from './Pag-Postres/Postres';
import Desayunos from './Pag-Desayunos/Desayunos';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import { CarritoProvider } from './componentes/CarritoContext';
import ListaCarrito from './Carrito/ListaCarrito'; 
import Carrito from './Carrito/Carrito';
import MapaPanaderia from './Api/MapaPanaderia';
import ScrollToTop from './componentes/ScrollToTop';
import Pan from './Pag-Pan/Pan';
import Contacto from './componentes/ContactForm';

function App() {
  return (
    <CarritoProvider>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pan" element={<Pan />} />
          <Route path="/postres" element={<Postres />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/desayunos" element={<Desayunos />} />
          <Route path="/carrito" element={<Carrito />} /> 
          <Route path="/contacto" element={<Contacto />} /> 
        </Routes>
        <MapaPanaderia />
        <Footer />
      </Router>
    </CarritoProvider>
  );
}

export default App;
