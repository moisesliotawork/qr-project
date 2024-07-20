import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "./layout/LayoutPublic";
import LandingPage from "./pages/LandingPage";
//import NotFound from "./pages/NotFound"; // Agrega un componente de error si aún no existe

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    //    errorElement: <NotFound />, // Asegúrate de tener un componente NotFound para manejar errores
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      // Otras rutas pueden ir aquí en el futuro
    ],
  },
]);
