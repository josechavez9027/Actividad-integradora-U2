import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import imagen1 from "./imagen1.jpg";
import Contacto from "./contacto";
import Acercade from "./acercade";

function Home() {
  const [cameraActive, setCameraActive] = useState(false);
  const [userStatus, setUserStatus] = useState("");
  const videoRef = useRef(null);

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
        setUserStatus("No se pudo acceder a la cámara");
      });
  };

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
              <a href="#documentacion">Documentación</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio">
          <img src={imagen1} id="Imginicio" alt="Reconocimiento Facial"></img>
          <h2>Inicio</h2>
          <p>
            Actividad 2. Segunda fase de desarrollo, revisión y ajuste de los
            Sprints y el backlog
          </p>
          <button onClick={startCamera}>Activar Cámara</button>
          <video
            ref={videoRef}
            autoPlay
            style={{ display: cameraActive ? "block" : "none" }}
          ></video>
          <p>{userStatus}</p>
        </section>

        <section id="acerca">
          <h2>Descripción del Proyecto</h2>
          <p>
            Se creará un algoritmo nuevo de reconocimiento facial, el cual se
            integrará en los dispositivos móviles por medio de un repositorio de
            actualización de la funcionalidad de detección de intrusos, con
            todos los archivos y medios necesarios para su integración en el SO
            de los móviles. Al integrarse el repositorio se obtendrá una nueva
            funcionalidad dentro del móvil que tendrá la capacidad de detectar a
            las personas que quieran hacer uso de él, esto por medio de la
            cámara frontal, y de esta forma restringir el acceso a ciertas áreas
            del teléfono con la intención de proteger la privacidad del
            propietario. Contará con perfiles predefinidos para niños, adultos o
            un estándar genérico, categorización de apps para agregarlas dentro
            de las restricciones para un uso más personalizado, así como un
            monitoreo constante y en tiempo real dotado con la capacidad de
            detectar rostros estáticos.
          </p>
        </section>

        <section id="objetivos">
          <h2>Objetivos</h2>
          <p>
            Crear una funcionalidad dentro del dispositivo móvil que permita la
            detección de personas para restringir accesos y cambiar modalidades
            del teléfono, esto con el fin de tener control sobre lo que los
            demás pueden o no ver y cuidar información relevante o de uso
            sensible para el propietario, todo esto mediante tecnología
            sofisticada de reconocimiento facial y machine learning.
          </p>
        </section>

        <section id="descripcion">
          <h2>Justificación</h2>
          <p>
            El propósito de este proyecto es brindar aún más seguridad a los
            usuarios móviles de Xiaomi, ya que con está “funcionalidad de
            detección de intrusos”, se puede controlar lo que se visualiza en el
            móvil dependiendo de la persona que lo esté usando, se puede
            restringir accesos en el móvil o directamente no brindar acceso;
            aparte de que se pueden generar rutinas en casos en los que se
            detecten rostros irreconocibles para, por ejemplo, mandar una foto
            cuando detecte un rostro después de que el móvil sea robado o
            extraviado. La justificación de este proyecto es que cada vez van
            saliendo tecnologías más sofisticadas, sin embargo, la privacidad es
            algo que se ha dejado muy de lado en estos días en contraste con la
            gran cantidad de información sensible que se almacena en el móvil.
            Se busca brindar una capa extra y más robusta de privacidad y de
            accesibilidad a nuestros usuarios, para que se sientan más seguros
            con la marca.
          </p>
        </section>

        <section id="limites">
          <h2>Límites</h2>
          <ul>
            <li>
              Es necesario que el dispositivo móvil cuente con una cámara
              frontal.
            </li>
            <li>
              Deben ser dispositivos de versiones Android no mayor a 5 años de
              antigüedad.
            </li>
            <li>El presupuesto que se asigne a este proyecto.</li>
            <li>
              La calidad de la cámara frontal, la funcionalidad se puede ver
              comprometida en cierta calidad de cámaras y en ciertos ángulos de
              enfoque.
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 - José Luis Chávez Flores</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acercade" element={<Acercade />} />
      </Routes>
    </Router>
  );
}
export default App;
