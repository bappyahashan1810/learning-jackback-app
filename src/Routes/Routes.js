import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Banner from "../Components/Banner/Banner";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            }
        ]
    },

])