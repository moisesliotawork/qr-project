import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 KFC. Todos los derechos reservados.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-white">
          <FaInstagram />
        </a>
        <a href="#" className="text-white">
          <FaFacebook />
        </a>
        <a href="#" className="text-white">
          <FaLinkedin />
        </a>
      </div>
      <div className="mt-4">
        <img src="venup-logo.png" alt="VenUp Logo" className="w-16 mx-auto" />
      </div>
    </footer>
  );
};

export default Footer;
