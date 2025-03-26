import React, { useState, useRef } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Contacto from "./contacto.js";
import "./App.css";

const App = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [userStatus, setUserStatus] = useState("Esperando reconocimiento...");
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraActive(true);
      setUserStatus("Cámara activada. Escaneando...");

      // Simulación de reconocimiento facial
      setTimeout(() => {
        setUserStatus(
          "Usuario identificado: Patricia Rayon Villela (Perfil Administrador)"
        );
      }, 3000);
    } catch (error) {
      console.error("Error al acceder a la cámara:", error);
      setUserStatus("Error al acceder a la cámara.");
    }
  };

  return (
    <Router>
      <div className="container">
        <header>
          <h1>
            Actividad integradora 2. El backlog y el spring Schedule del
            proyecto
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <a href="#acerca">Acerca de</a>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
              <li>
                <a href="#documentacion">Documentación</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="inicio">
                    <img
                      alt="Reconocimiento facial"
                      src="https://img.freepik.com/foto-gratis/reconocimiento-facial-collage-identificacion-personal_23-2150165585.jpg"
                      id="Imginicio"
                    />
                    <h2>Inicio</h2>
                    <p>
                      Actividad integradora 2. El backlog y el spring Schedule
                      del proyecto
                    </p>
                    <button onClick={startCamera}>Activar Cámara</button>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      style={{ display: cameraActive ? "block" : "none" }}
                    />
                    <p>{userStatus}</p>
                  </section>

                  <section id="acerca">
                    <h2>Descripción del Proyecto</h2>
                    <p>
                      Se creará un algoritmo nuevo de reconocimiento facial, el
                      cual se integrará en los dispositivos móviles por medio de
                      un repositorio de actualización de la funcionalidad de
                      detección de intrusos...
                    </p>
                  </section>

                  <section id="objetivos">
                    <h2>Objetivos</h2>
                    <p>
                      Crear una funcionalidad dentro del dispositivo móvil que
                      permita la detección de personas para restringir
                      accesos...
                    </p>
                  </section>

                  <section id="descripcion">
                    <h2>Justificación</h2>
                    <p>
                      El propósito de este proyecto es brindar aún más seguridad
                      a los usuarios móviles de Xiaomi...
                    </p>
                  </section>

                  <section id="limites">
                    <h2>Límites</h2>
                    <ul>
                      <li>
                        Es necesario que el dispositivo móvil cuente con una
                        cámara frontal.
                      </li>
                      <li>
                        Deben ser dispositivos de versiones Android no mayor a 5
                        años de antigüedad.
                      </li>
                      <li>El presupuesto que se asigne a esté proyecto.</li>
                      <li>La calidad de la cámara frontal...</li>
                    </ul>
                  </section>
                </>
              }
            />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 - José Luis Chávez Flores</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
