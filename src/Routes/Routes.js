import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import SecondMain from "../Main/SecondMain";
import CourseDetailsAndCart from "../Components/CourseDetailsAndCart/CourseDetailsAndCart";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('http://localhost:5000/courses')




    },
    {
        path: '/courseDetails',
        element: <SecondMain></SecondMain>,
        children: [
            {
                path: '/courseDetails/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetailsAndCart></CourseDetailsAndCart>
            }
        ]
    }


])