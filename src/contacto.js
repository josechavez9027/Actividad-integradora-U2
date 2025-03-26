import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Contacto = () => {
  const contactos = [
    {
      puesto: "Project Manager",
      nombre: "José Luis Chávez Flores",
      email: "jose.chavez9027@alumnos.udg.mx",
      telefono: "555-1234",
    },
    {
      puesto: "Product Owner",
      nombre: "Carlos Pérez",
      email: "carlos.perez@example.com",
      telefono: "555-5678",
    },
    {
      puesto: "Scrum Master",
      nombre: "Laura Fernández",
      email: "laura.fernandez@example.com",
      telefono: "555-9101",
    },
  ];

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

      <main className="MainContact">
        <section id="contacto">
          <h2>Contacto</h2>
          <p>Si tienes alguna consulta, no dudes en contactarnos.</p>
          <ul>
            {contactos.map((contacto, index) => (
              <li key={index}>
                <strong>{contacto.puesto}</strong>
                <br />
                Nombre: {contacto.nombre}
                <br />
                Email: <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
                <br />
                Teléfono: {contacto.telefono}
                <br />
                <br />
              </li>
            ))}
          </ul>
        </section>
        <div className="Imgcontact">
          <img src="https://img.freepik.com/vector-gratis/ilustracion-soporte-al-cliente_23-2148886085.jpg?t=st=1742960076~exp=1742963676~hmac=63068aba3088824e35f8ec6cc7ed680193586ca9fc7156801f5384454d0bebfd&w=826"></img>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 - José Luis Chávez Flores</p>
      </footer>
    </div>
  );
};

export default Contacto;
