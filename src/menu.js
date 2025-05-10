import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function menu() {
  return (
    <div className="container">
      <header>
        <h1>Reconocimiento de Usuarios</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/acercade">Acerca de</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>textodeprueba</main>

      <footer>
        <p>&copy; 2025 - José Luis Chávez Flores</p>
      </footer>
    </div>
  );
}

export default menu;
