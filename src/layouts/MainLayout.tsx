import {Footer} from "../components/Footer";
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};