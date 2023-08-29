import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import brand from "../assets/logo.png"


const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <div className="foot-logo">
          <img src={brand} alt="imagenlogo" />
        </div>
        <nav>
          <div className="nav-footer">
            <h4>Nosotros</h4>
            <ul>
              <li>
                <span>Terminos y Condiciones</span>
              </li>
              <li>
                <span href="#">Como Comprar</span>
              </li>
              <li>
                <span href="#">Sobre Nosotros</span>
              </li>
              <li>
                <span href="#">Sucursales</span>
              </li>
            </ul>
          </div>
          <div className="nav-footer">
            <h4>Informacion</h4>
            <ul>
              <li>
                <span href="#">Medios de pago</span>
              </li>
              <li>
                <span href="#">Preguentas frecuentes</span>
              </li>
              <li>
                <span href="#">Politicas de Cambio</span>
              </li>
              <li>
                <span href="#">Politicas de Envio</span>
              </li>
            </ul>
          </div>
          <div className="nav-footer">
            <h4>Seguinos en</h4>
            <ul className="list-icons">
              <BsFacebook className="icon-footer" />
              <span>Facebook</span>

              <BsInstagram className="icon-footer"/>
              <span>Instagram</span>

              <BsTwitter className="icon-footer" />
              <span>Twitter</span>

              <BsLinkedin className="icon-footer"/>
              <span>Linkedin</span>
            </ul>
          </div>
        </nav>
      </div>

      <div className="final-footer">
        <span>Todos los derechos Reservados | © Qtech</span>
      </div>
    </footer>
  );
};

export default Footer;
