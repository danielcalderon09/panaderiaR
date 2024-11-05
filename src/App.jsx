import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bebidas from './Pag-Bebidas/Bebidas'; // Importar el componente de Bebidas
import Home from './Pag-Home/Home';
import Postres from './Pag-Postres/Postres';
import Desayunos from './Pag-Desayunos/Desayunos';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';

function App() {
  

  return (
    <>
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/postres" element={<Postres />} /> 
        <Route path="/bebidas" element={<Bebidas />} /> 
        <Route path="/desayunos" element={<Desayunos />} /> 
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App
