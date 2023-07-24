import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Banner from '../Components/Banner/Banner';
import Experts from '../Components/Experts/Experts';
import CoursesName from '../Components/CoursesName/CoursesName';
import LearningCourses from '../Components/LearningCourses/LearningCourses';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Experts></Experts>
            <CoursesName></CoursesName>
            <LearningCourses></LearningCourses>
            <Footer></Footer>

        </div>
    );
};

export default Main;