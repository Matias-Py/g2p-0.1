import './App.css';
import React, { useState } from 'react'
import casa1 from './imagenes/casa1.jpg';
import casa2 from './imagenes/casa2.jpg';
import casa3 from './imagenes/casa3.jpg';
import casa4 from './imagenes/casa4.jpg';
import casa5 from './imagenes/casa5.jpg';
import casa6 from './imagenes/casa6.jpg';
import casa7 from './imagenes/casa7.jpg';
import instagram from './imagenes/instagram.svg';
import facebook from './imagenes/facebook.svg';
import whatsapp from './imagenes/whatsapp.svg';
import location from './imagenes/location.png';
import email from './imagenes/mail.png';
import phone from './imagenes/phone.png';
import ReactWhatsapp from 'react-whatsapp';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div id='header'>
        <div id='container-logo'>
          <h1>G2P Construcciones</h1>
        </div>
        <nav id='menu'>
          <ul>
            <li><a href ="#list-projects">Proyectos</a></li>
            <li id='contact'><a href="#footer">Contacto</a></li>
          </ul>
        </nav>
      </div>
      <section id='presentation'>
        <div id='our-presentation'>
          <h3 id='about-us'>Sobre Nosotros</h3>
          <p>Somos una empresa constructora dedicada a brindar soluciones integrales y personalizadas en diseño y construcción de alta calidad. Nos enfocamos en ofrecer un servicio excepcional, garantizando la satisfacción de nuestros clientes a través de la realización eficiente y efectiva de proyectos de construcción.
          </p>
          <button id='button'><a href='#list-projects'>Ver proyectos</a></button>
        </div>
        <div id='image-presentation'>
          <img id="imagen-presentacion" src={casa1} alt="casa construida por nosotros" width="450px"/>
        </div>
      </section>
      <section id='list-projects'>
        <h2 id='project-title'>Proyectos</h2>
        <div id='photos-projects'>
            <img className='foto-casa' src={casa3} alt="proyecto2"width="290px"/>
            <img className='foto-casa' src={casa4} alt="proyecto4"width="290px"/>
            <img className='foto-casa' src={casa5} alt="proyecto5"width="290px"/>
            <img className='foto-casa' src={casa2} alt="proyecto1"width="290px"/>
            <img className='foto-casa' src={casa6} alt="proyecto6"width="290px"/>
            <img className='foto-casa' src={casa7} alt="proyecto7"width="290px"/>             
        </div>
      </section>
      <div id="footer">
        <div id="contenedor-redes">
          <h1 id='footer-title'>G2P Construcciones</h1>
          <ul id='lista-redes'>
            <li><a className='redes' href='https://www.instagram.com/g2pconstrucciones' target="_blank">
              <img className='imagen-red' src={instagram} width="30px"/>
            </a>
            </li>
            <li><a className='redes' href="https://www.facebook.com/PlanosMunicipalesProyectoDireccion" target="_blank">
              <img className='imagen-red' src={facebook} width="30px"/>
            </a>
            </li>
            <li><a className='redes' href='#'>
            <ReactWhatsapp id="boton-whatsapp" number="+5491161830483" message="Hola, visité su página y me gustaría hacerles una consulta.">
              <img className='imagen-red' src={whatsapp} width="30px"/>
            </ReactWhatsapp>
            </a>
            </li>
          </ul>
        </div>
        <div id='contenedor-contactos'>
          <h2 id="contactos-footer">Contacto</h2>
          <ul id='lista-footer'>
            <li className = 'menu-footer'>
              <p className='texto-logo'>+5491161830483</p>
            </li>
            <li className='menu-footer'>
              <p className='texto-logo'>planosmunicipales@outlook.com</p>
            </li>
            <li className = 'menu-footer'>
              <p className='texto-logo'>O'Connor 1284 - Pilar - Buenos Aires - Argentina</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;
