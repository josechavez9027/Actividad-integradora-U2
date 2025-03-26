import React from "react";
import "./App.css";

const Contacto = () => {
  const contactos = [
    {
      nombre: "María Gómez",
      email: "maria.gomez@example.com",
      telefono: "555-1234",
    },
    {
      nombre: "Carlos Pérez",
      email: "carlos.perez@example.com",
      telefono: "555-5678",
    },
    {
      nombre: "Laura Fernández",
      email: "laura.fernandez@example.com",
      telefono: "555-9101",
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>
          Actividad integradora 2. El backlog y el spring Schedule del proyecto
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#acerca">Acerca de</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <a href="#documentacion">Documentación</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="contacto">
          <h2>Contacto</h2>
          <p>Si tienes alguna consulta, no dudes en contactarnos.</p>
          <ul>
            {contactos.map((contacto, index) => (
              <li key={index}>
                <strong>{contacto.nombre}</strong>
                <br />
                Email: <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
                <br />
                Teléfono: {contacto.telefono}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 - José Luis Chávez Flores</p>
      </footer>
    </div>
  );
};

export default Contacto;
