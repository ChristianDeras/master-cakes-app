import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
 return (
  <footer className="text-white py-3" id="contact">
   <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-6 col-md-4 mb-3 mb-md-0">
        <img src="../logo.png" width="120px"/>
      </div>
      <div className="col-12 col-md-3 mb-3 mb-md-0">
        <h3>Contáctanos</h3>
        <ul className="list-unstyled">
          <li> <i className="fas fa-envelope"> </i> Correo: ejemplo@correo.com </li>
          <li> <i className="fas fa-phone"> </i> Teléfono: 1234-5678 </li>
          <li> <i className="fas fa-map-marker-alt"> </i> Dirección: Calle 123, Ciudad </li>
        </ul>
      </div>
      <div className="col-6 col-md-3 mb-3 mb-md-0">
        <h3> Información </h3>
        <ul className="list-unstyled">
          <li> <a href="#"> Políticas de envío </a> </li>
          <li> <Link to="/privacy-policy"> Políticas de privacidad </Link> </li>
          <li> <a href="#"> Políticas de devoluciones </a> </li>
          <li> <a href="#"> Contáctanos </a> </li>
        </ul>
      </div>
      <div className="col-md-2 mb-3 mb-md-0">
        <ul className="list-unstyled">
          <h3> Horarios </h3>
          <li> <i className="fas fa-clock"> </i> Lun - Sab 8:00 am - 6:00 pm. <br/> Dom 8:00 am - 2:00 pm </li>
        </ul>
      </div>
    </div>
   </div>
   <hr/>
   <div>
    <p className='text-center'> Copyright 2023. Master cakes pasteleria El Salvador. Todos los derechos reservados.
    </p>
   </div>
  </footer>
 );
}

export default Footer;
