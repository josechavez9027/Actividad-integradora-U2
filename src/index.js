import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Contacto from "./contacto.js"; // Asegúrate de que el archivo tiene esta extensión
import Inicio from "./Inicio.jsx"; // Asegúrate de que este archivo existe con esta extensión

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
