import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {CarsPage} from "../pages/CarsPage/CarsPage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index:true, element:<AuthPage/>},
            {path: 'cars', element:<CarsPage/>}
        ]
    }
])

export default router