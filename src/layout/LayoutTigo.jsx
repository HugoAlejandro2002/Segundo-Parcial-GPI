import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const LayoutTigo = () => {
    return (
        <>
            <Navbar />
            <main className="pt-16 p-10 overflow-auto"> {/* Ajuste el padding-top si es necesario */}
                <Outlet />
            </main>
        </>
    );
};

export default LayoutTigo;
