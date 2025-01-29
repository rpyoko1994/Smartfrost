import { useState } from 'react'
import Login  from '../component/Login/Login'
import Presentacion from '../component/Presentacion/Presentacion'
import Carrusel from '../component/Carrusel/Carrusel'
import './App.css'
import SignUp from "../component/SignUp/SignUp"; // Asegúrate de que el path sea correcto
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../component/Home/Home'
import Graficas from '../component/Graficas/Graficas'


const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Rutas de la aplicación */}
        <Routes>
          <Route path="/" element={<Carrusel />} />
          <Route path="/presentacion" element={<Presentacion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/graficas" element={<Graficas />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

