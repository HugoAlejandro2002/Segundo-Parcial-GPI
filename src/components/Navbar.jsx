import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <nav className="w-full h-[191px] [background:linear-gradient(180deg,rgb(0,55,123)_81.35%,rgba(0,55,123,0)_100%)]">
            <div className="container mx-auto flex items-center h-full">
                <ul className="flex space-x-10 w-2/5 justify-end mt-[-2rem] ">
                    <li>
                        <Link
                            className={`${pathname === "/fase-inicio" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
                            to="/fase-inicio"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${pathname === "/fase-planificacion" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
                            to="/fase-planificacion"
                        >
                            Planificación
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${pathname === "/fase-diseno-desarrollo" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
                            to="/fase-diseno-desarrollo"
                        >
                            Diseño y Desarrollo
                        </Link>
                    </li>
                </ul>

                <div className="flex w-1/5 mt-[-2rem]  ">
                    <img
                        className="w-[187px] h-[123px] object-cover mx-auto"
                        alt="Imagen central"
                        src="https://c.animaapp.com/fKZtcvgc/img/image-11@2x.png"
                    />
                </div>

                <ul className="flex w-2/5 space-x-10  mt-[-2rem] ">
                    <li>
                        <Link
                            className={`${pathname === "/fase-control-calidad-implementacion" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
                            to="/fase-control-calidad-implementacion"
                        >
                            Control de Calidad
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`${pathname === "/fase-cierre" ? "font-bold" : ""} text-white text-[24px] [text-shadow:0px_10px_4px_#00000040]`}
                            to="/fase-cierre"
                        >
                            Cierre
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
