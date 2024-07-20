import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import venupLogo from "/venUp.png"; // Asegúrate de actualizar la ruta al logo de VenUp

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={venupLogo} alt="VenUp Logo" className="footer-logo" />
        <div className="footer-left-text">
          <p>¿Te gusto esta página?</p>
          <p>Nosotros te hacemos la tuya</p>
          <button className="bg-white text-red-600 px-4 py-2 rounded-full footer-left-button">
            Venup
          </button>
        </div>
      </div>
      <div className="footer-separator"></div>
      <div className="footer-right">
        <p>Redes Sociales - KFC</p>
        <div className="footer-right-icons">
          <a href="#" className="text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-white">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-white">
            <BsTiktok />
          </a>
          <a href="#" className="text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-white">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
