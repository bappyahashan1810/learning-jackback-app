import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet, useLoaderData, useRouteLoaderData } from 'react-router';
import Banner from '../Components/Banner/Banner';
import Experts from '../Components/Experts/Experts';
import CoursesName from '../Components/CoursesName/CoursesName';
import LearningCourses from '../Components/LearningCourses/LearningCourses';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Experts></Experts>
            <CoursesName></CoursesName>
            <div className='py-[100px] '>
                <div className='max-w-[1240px] mx-[60px] md:grid grid-cols-3 gap-5'>
                    {
                        courses.map(course => <LearningCourses
                            key={course.course_id}
                            course={course}
                        ></LearningCourses>)
                    }

                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;