import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import SecondMain from "../Main/SecondMain";
import CourseDetailsAndCart from "../Components/CourseDetailsAndCart/CourseDetailsAndCart";
import Login from "../Components/Login/Login";
import PrivateRoutes from "./PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('https://jackback-server.vercel.app/courses')




    },
    {
        path: '/courseDetails',
        element: <SecondMain></SecondMain>,
        children: [
            {
                path: '/courseDetails/:id',
                loader: ({ params }) => fetch(`https://jackback-server.vercel.app/courses/${params.id}`),
                element: <PrivateRoutes><CourseDetailsAndCart></CourseDetailsAndCart></PrivateRoutes>
            },
            {
                path: '/courseDetails/login',
                element: <Login></Login>
            }
        ]
    }


])