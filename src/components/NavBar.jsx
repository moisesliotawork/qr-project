import { Link } from "react-router-dom";
import kfcLogo from "/KFC_header.png";

const NavBar = () => {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-center items-center">
      <div className="flex items-center space-x-8">
        <img src={kfcLogo} alt="KFC Logo" className="w-24" />
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <span className="border-l-2 border-white h-6"></span>
          <Link to="/productos" className="hover:underline">
            Productos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
