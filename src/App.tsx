import React, {FC} from 'react';
import {Header} from "./Components/Header/Header";
import {Outlet} from "react-router-dom";

const App: FC = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export {App};


