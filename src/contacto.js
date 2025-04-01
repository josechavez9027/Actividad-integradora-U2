import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const contactos = [
    {
      puesto: "Scrum Master",
      nombre: "José Luis Chávez Flores",
      email: "jose.chavez9027@alumnos.udg.mx",
      telefono: "555-1234",
    },
    {
      puesto: "Product Owner",
      nombre: "José Omar Real Solano",
      email: "omarsoreyal@alumnos.udg.mx",
      telefono: "555-5678",
    },
    {
      puesto: "Desarrollador",
      nombre: "Tania Sánchez Islas",
      email: "taniaislas2912@alumnos.udg.mx",
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
      <section className="contact-form">
        <h2>Envíanos un mensaje</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Enviar Mensaje
          </button>
        </form>
      </section>
      <footer>
        <p>&copy; 2025 - José Luis Chávez Flores</p>
      </footer>
    </div>
  );
};

export default Contacto;
