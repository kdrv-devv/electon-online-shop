import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home-page";
import About from "../pages/about-page";



export const root = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    }

])