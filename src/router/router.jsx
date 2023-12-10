import {
    createBrowserRouter
  } from "react-router-dom";
import FaseInicio from "../pages/FaseInicio";
import FasePlanificacion from "../pages/FasePlanificacion";
import FaseDisenioDesarrollo from "../pages/FaseDisenioDesarrollo";
import FaseControlCalidad from "../pages/FaseControlCalidad";
import FaseCierre from "../pages/FaseCierre";

const router = createBrowserRouter([
    {
      path: "/",
      element:  <FaseInicio />,
    },
    {
      path: '/fase-planificacion',
      element: <FasePlanificacion />,
    },
    {
      path: '/fase-diseno-desarrollo',
      element: <FaseDisenioDesarrollo />,
    },
    {
      path: '/fase-control-calidad-implementacion',
      element: <FaseControlCalidad />,
    },
    {
      path: '/fase-cierre',
      element: <FaseCierre />,
    },
  ]);

  export default router;