import {Outlet} from "react-router-dom";

import {Footer, Header} from "../components";
import css from './MainLayout.module.css'

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