import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  if (location.pathname.includes("/productos")) {
    return (
      <footer className="bg-red-600 text-white py-4 text-center mt-auto">
        <div className="container mx-auto flex items-center justify-center">
          <img src={venupLogo} alt="VenUp Logo" className="footer-logo mb-2" />
          <p className="text-center ml-2">Derechos Reservados</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={venupLogo} alt="VenUp Logo" className="footer-logo" />
        <div className="footer-left-text">
          <p>¿Te gustó esta página?</p>
          <p>Nosotros te hacemos la tuya</p>
          <button className="footer-left-button">VenUp</button>
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
