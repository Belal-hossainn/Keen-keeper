import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {  
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer/>
        </div>
    )
}

export default MainLayout;