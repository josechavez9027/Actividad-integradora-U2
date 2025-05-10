import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Acercade() {
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

      <main>
        <section id="acerca">
          <h2>Acerca del Reconocimiento Facial</h2>
          <p>
            El reconocimiento facial es una tecnología biométrica que utiliza
            las características únicas de un rostro humano para identificar o
            verificar a una persona. Es comúnmente utilizada en sistemas de
            seguridad y control de acceso, y se ha integrado cada vez más en
            dispositivos móviles.
          </p>
          <p>
            Este proyecto se enfoca en desarrollar un sistema de reconocimiento
            facial para dispositivos móviles, permitiendo que los usuarios
            restrinjan el acceso a su teléfono o aplicaciones específicas.
            Utilizando la cámara frontal del dispositivo, el sistema puede
            identificar y autenticar a los usuarios, asegurando una mayor
            protección de la privacidad.
          </p>
          <p>
            A través de tecnologías como el machine learning y redes neuronales,
            el sistema es capaz de aprender y adaptarse a nuevas características
            faciales con el tiempo, mejorando su precisión y fiabilidad.
          </p>
          <p>
            Para entender mejor cómo funciona el reconocimiento facial, te
            invitamos a ver el siguiente video:
          </p>
          <div className="video-container">
            <iframe
              class="Main-VideoYT"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9mS1JVREpEs?si=VK9a48ByU1jpndbY"
              title="Italia"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 - José Luis Chávez Flores</p>
      </footer>
    </div>
  );
}

export default Acercade;
