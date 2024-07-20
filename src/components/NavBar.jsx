const NavBar = () => {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center">
      <div className="space-x-4">
        <a href="/" className="hover:underline">
          Inicio
        </a>
        <a href="/productos" className="hover:underline">
          Productos
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
