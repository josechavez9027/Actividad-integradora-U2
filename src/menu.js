import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import imagen5 from "./imagen5.jpg";
import imagen6 from "./imagen6.JPG";
import imagen7 from "./imagen7.JPG";
import imagen8 from "./imagen8.JPG";
import imagen9 from "./imagen9.JPG";
import h1 from "./h1.JPG";
import h2 from "./h2.JPG";
import h3 from "./h3.JPG";
import h4 from "./h4.JPG";
import h5 from "./h5.JPG";
import a1 from "./a1.JPG";
import gp from "./gp.JPG";
function menu() {
  return (
    <div className="container">
      <header>
        <h1>Funcionalidad de detección de intrusos</h1>
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
        <h2 className="SubtituloMenu">
          Cronograma de actividades realizadas en el curso
        </h2>
        <iframe
          src="https://www.preceden.com/timelines/1274771/embed/7bbd3a55a593038604dcc22eea4ad244"
          width="100%"
          height="404"
          frameborder="0"
          title="timeline1"
        >
          <a href="https://www.preceden.com" target="_top">
            Preceden Timeline Maker
          </a>
        </iframe>

        <iframe
          src="https://www.preceden.com/timelines/1274777/embed/b595c2b924d021aac2102b215c6a6143"
          width="100%"
          height="665"
          frameborder="0"
          title="timeline2"
        >
          <a href="https://www.preceden.com" target="_top">
            Preceden Timeline Maker
          </a>
        </iframe>
        <div className="Menu-Seccion">
          <h3 className="Eviencia">Producto Backlog</h3>
          <img src={a1} id="a1" alt="Proyecto"></img>

          <h3 className="Eviencia">Fichas Backlog</h3>
          <img src={h1} className="Ficha" alt="Proyecto"></img>
          <img src={h2} className="Ficha" alt="Proyecto"></img>
          <img src={h3} className="Ficha" alt="Proyecto"></img>
          <img src={h4} className="Ficha" alt="Proyecto"></img>
          <img src={h5} className="Ficha" alt="Proyecto"></img>
        </div>
        <h3 className="Eviencia">Formato Spring y calendarización</h3>
        <table>
          <tr>
            <td>Elemento de trabajo pendiente</td>
            <td>Puntos de historia</td>
            <td>Responsable</td>
            <td>Estado</td>
            <td>Estimado original</td>
            <td>Semana 1</td>
            <td>Semana 2</td>
            <td>Semana 3</td>
            <td>Semana 4</td>
            <td>Semana 5</td>
            <td>Recursos</td>
            <td>Revisión del Sprint</td>
          </tr>
          <tr>
            <td>H001</td>
            <td>8</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>8</td>
            <td>2 días</td>
            <td>2 días</td>
            <td>2 días</td>
            <td>2 días</td>
            <td>0</td>
            <td>
              Servidor de pruebas, dataset de imágenes, software de
              reconocimiento facial
            </td>
            <td>Detección en menos de 2 segundos.</td>
          </tr>
          <tr>
            <td>Tarea: Diseñar algoritmo de detección facial.</td>
            <td>2</td>
            <td>Equipo de desarrollo</td>
            <td>En progreso</td>
            <td>2</td>
            <td>2 días</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>Bibliotecas de IA, herramientas de desarrollo</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Integrar cámara frontal con el algoritmo</td>
            <td>3</td>
            <td>Equipo de desarrollo</td>
            <td>En progreso</td>
            <td>3</td>
            <td>0</td>
            <td>2 días</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>Módulo de cámara, controladores de hardware</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Optimizar el tiempo de respuesta.</td>
            <td>3</td>
            <td>Equipo de desarrollo</td>
            <td>En progreso</td>
            <td>3</td>
            <td>0</td>
            <td>0</td>
            <td>1 día</td>
            <td>2 días</td>
            <td>0</td>
            <td>Herramientas de benchmarking, perfilador de código</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Pruebas de rendimiento.</td>
            <td>2</td>
            <td>Equipo de diagnóstico</td>
            <td>En progreso</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>2 días</td>
            <td>Entorno de pruebas, herramientas de monitoreo</td>
            <td></td>
          </tr>
          <tr>
            <td>H002</td>
            <td>6</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>5</td>
            <td>1 día</td>
            <td>2 días</td>
            <td>1 día</td>
            <td>1 día</td>
            <td>0</td>
            <td>Dataset de fotos, modelos de detección entrenados</td>
            <td>Detección de fotos estáticas</td>
          </tr>
          <tr>
            <td>Tarea: Investigar técnicas anti-spoofing.</td>
            <td>2</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>2</td>
            <td>1 día</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
              Equipos de computo, acceso a proyectos con técnicas de protocolos
              similares
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Implementar detección de fotos estáticas.</td>
            <td>2</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>2</td>
            <td></td>
            <td>1 día</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>Imágenes de prueba, software de validación</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Pruebas de validación.</td>
            <td>1</td>
            <td>Equipo de diagnóstico</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1 día</td>
            <td>0</td>
            <td>Herramientas de QA, documentación de pruebas</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Documentar resultados.</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1 día</td>
            <td>Editor de texto, plataforma de documentación</td>
            <td></td>
          </tr>
          <tr>
            <td>H003</td>
            <td>4</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>3</td>
            <td>1 día</td>
            <td>1 día</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>Servidor de mensajería, API de notificaciones</td>
            <td>Sistema de notificaciones</td>
          </tr>
          <tr>
            <td>Tarea: Diseñar sistema de notificaciones.</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>Framework de backend, herramientas de UI</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Integrar notificaciones por correo.</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>Servidor de correo, credenciales SMTP</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Pruebas de envío de alertas.</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>Usuarios de prueba, herramientas de logs</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Ajustar interfaz de notificaciones.</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1 día</td>
            <td>0</td>
            <td>Diseñador UI, librerías frontend</td>
            <td></td>
          </tr>
          <tr>
            <td>H004</td>
            <td>6</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>6</td>
            <td>2 días</td>
            <td>2 días</td>
            <td>1 día</td>
            <td>1 día</td>
            <td>0</td>
            <td>Base de datos de usuarios, herramientas de autenticación</td>
            <td>Diseño de perfiles</td>
          </tr>
          <tr>
            <td>vTarea: Diseñar sistema de perfiles.</td>
            <td>2</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>2</td>
            <td>2 días</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>Modelado de datos, gestor de usuarios</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Integrar perfiles con reconocimiento facial.</td>
            <td>2</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>2</td>
            <td>0</td>
            <td>2 días</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>API de reconocimiento facial, almacenamiento seguro</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Crear rutinas automáticas.</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>Automatización de tareas, cron jobs</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Pruebas de personalización.</td>
            <td>1</td>
            <td>Equipo de diagnóstico</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1 día</td>
            <td>0</td>
            <td>Usuarios de prueba, simulaciones de personalización</td>
            <td></td>
          </tr>
          <tr>
            <td>H005</td>
            <td>4</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>3</td>
            <td>1 día</td>
            <td>1 día</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>Herramienta de generación de reportes, base de datos</td>
            <td>Generación de reportes</td>
          </tr>
          <tr>
            <td>Tarea: Diseñar sistema de generación de reportes.</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>Framework de reportes, SQL</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Integrar métricas de rendimiento.</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>Herramienta de monitoreo, logs del sistema</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Pruebas de generación de reportes</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1 día</td>
            <td>0</td>
            <td>0</td>
            <td>Casos de prueba, validaciones de datos</td>
            <td></td>
          </tr>
          <tr>
            <td>Tarea: Documentar uso de reportes</td>
            <td>1</td>
            <td>Equipo de desarrollo</td>
            <td>Pendiente</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1 día</td>
            <td>0</td>
            <td>Guía de usuario, capturas de pantalla</td>
            <td></td>
          </tr>
          <tr>
            <td>Total</td>
            <td>28</td>
            <td></td>
            <td></td>
            <td>55</td>
            <td>14</td>
            <td>16</td>
            <td>12</td>
            <td>10</td>
            <td>3</td>
            <td></td>
            <td></td>
          </tr>
        </table>

        <div className="Menu-Seccion">
          <h2 className="SubtituloMenu">Sistema Implementado</h2>
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
            detectar rostros estáticos. <br></br>
            <br></br>En esta primera etapa del proyecto, se realizará un sitio
            web que contenga toda la información y detalles del mismo.
          </p>
          <img src={imagen5} id="imagen5" alt="Proyecto"></img>
        </div>

        <div className="Menu-Seccion">
          <h2 className="SubtituloMenu">Código fuente (comprimido) </h2>
          <p>
            Una forma fácil de expresar el código fuente es de la siguiente
            forma, qué básicamente es la misma forma en que se estructuran cada
            una de las páginas del código
          </p>
          <h3>Importaciones iniciales: </h3>
          <p>
            Se incluyen componentes de React, rutas con react-router-dom, hojas
            de estilo y recursos multimedia (imágenes), además de componentes
            personalizados como Contacto, Acercade y Menu2.
          </p>
          <img src={imagen6} id="imagen6" alt="codigo1"></img>
          <h3>Componente principal (Home):</h3>
          <ul>
            <li>
              Contiene el contenido del sitio: título, navegación, secciones
              descriptivas y un botón para activar la cámara mediante
              getUserMedia
            </li>
            <li>
              Las secciones están organizadas por temas: inicio, descripción del
              proyecto, objetivos, justificación y límites.
            </li>
            <li>
              Se utilizan useState y useRef para gestionar el estado de la
              cámara y mostrar mensajes de estado al usuario.
            </li>
          </ul>
          <img src={imagen7} id="imagen7" alt="codigo2"></img>

          <h3>Sistema de navegación:</h3>
          <ul>
            <li>
              Implementado con react-router-dom usando Router, Routes y Link.
            </li>
            <li>
              Las rutas llevan a páginas secundarias: contacto, acerca de y un
              menú adicional.
            </li>
          </ul>
          <img src={imagen8} id="imagen8" alt="codigo2"></img>

          <h3>Link de descarga de código comprimido: </h3>
          <a href="https://github.com/josechavez9027/Actividad-integradora-U2/archive/refs/heads/master.zip">
            Descarga el código presionando aquí
          </a>
        </div>

        <h2 className="SubtituloMenu">Reporte de modificaciones realizadas</h2>
        <h3>H-01 - Sitio informativo del proyecto</h3>
        <table id="Table">
          <tr>
            <td className="t-encabezado">Spring</td>
            <td className="t-encabezado">Fechas</td>
            <td className="t-encabezado">Avance</td>
            <td className="t-encabezado">Modificaciones sugeridas</td>
            <td className="t-encabezado">Commit en github</td>
          </tr>
          <tr>
            <td>
              -Diseñar estructura y estilo.<br></br>-Implementar en HTML/CSS.
            </td>
            <td>6 de marzo</td>
            <td>
              -Se generó la página principal del sitio, la página de Inicio con
              la sección de cámara, una imagen con relación al tema e
              información del proyecto.
            </td>
            <td>Agregar una página de contacto.</td>
            <td>Agregue el sprint2</td>
          </tr>

          <tr>
            <td>-Agregar página de contacto.</td>
            <td>25 de marzo</td>
            <td>
              -Instalación del Router Dom.<br></br> -Se añade función nueva en
              el código de la App para navegar entre páginas.<br></br> -Se
              agregó la página de contacto. <br></br>-Se ajusta el tamaño de la
              imagen de inicio.
              <br></br>
            </td>
            <td>
              Añadir formulario de contacto. <br></br>
              <br></br>Depuración de archivos de react
            </td>
            <td>Se agregó la página de contacto</td>
          </tr>

          <tr>
            <td>-Añadir formulario y depuración.</td>
            <td>31 de marzo</td>
            <td>
              -Se cambia la imagen de la página de Inicio. <br></br> -Se añade
              el formulario para enviar datos y entablar contacto con usuarios
              interesados.<br></br> -Se genera la depuración de archivos en las
              carpetas de react. <br></br>
            </td>
            <td>
              Añadir más información sobre el tema.<br></br>
              <br></br> Añadir un video que explique el funcionamiento del
              proyecto.
            </td>
            <td>
              Actividad 2. Segunda fase de desarrollo, revisión y ajuste de los
              Sprints y el backlog.
            </td>
          </tr>

          <tr>
            <td>-Añadir más información sobre reconocimiento facial.</td>
            <td>6 de abril</td>
            <td>
              -Se añade una nueva página llamada “acerca de”. <br></br> -Se
              añade información sobre el reconocimiento facial. <br></br> -Se
              añade un video explicando el reconocimiento facial. <br></br>{" "}
              -Corrección de rutas del menú superior.
            </td>
            <td>
              Hacer más armonioso el sitio web con más imágenes. <br></br>
              <br></br>
              Empezar a desarrollar el apartado de “menú” para el producto
              integrador.
            </td>
            <td>
              Actividad 3. Tercera fase de desarrollo, revisión y ajuste de los
              Sprints y el backlog.
            </td>
          </tr>

          <tr>
            <td>-Añadir más imágenes y trabajar en el botón de “menú”.</td>
            <td>10 de mayo</td>
            <td>
              -Se añaden más imágenes en la página de Inicio. <br></br> -Se
              desarrolla el menú para que quede fijo sin importar el scroll.
            </td>
            <td>Generar el producto integrador.</td>
            <td>Actividad 2. Reunión para revisión de modificaciones</td>
          </tr>

          <tr>
            <td>
              Añadir el botón de Menú con la información del producto integrador
            </td>
            <td>12 de mayo</td>
            <td>
              -Se añade una página de menú con lo siguiente: <br></br>
              <br></br> Actividades realizadas en el curso. <br></br> Sistema
              Implementado.
              <br></br> Código Fuente (comprimido). <br></br>Reporte (bitácora)
              de las modificaciones realizadas.
            </td>
            <td>Sin más cambios</td>
            <td>Producto Integrador</td>
          </tr>
        </table>

        <div className="Menu-Seccion">
          <h3 className="Eviencia">Gestor de proyectos</h3>
          <img src={gp} id="gp" alt="GestorProy"></img>
        </div>
        <div className="Menu-Seccion">
          <h3 className="Eviencia">
            Evidencia de todos los commit realizados:{" "}
          </h3>
          <img src={imagen9} id="imagen9" alt="Proyecto"></img>
          <h3 className="LigaGH">Liga de github </h3>
          <a href="https://github.com/josechavez9027/Actividad-integradora-U2">
            Accede presionando aquí
          </a>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 - José Luis Chávez Flores</p>
      </footer>
    </div>
  );
}

export default menu;
