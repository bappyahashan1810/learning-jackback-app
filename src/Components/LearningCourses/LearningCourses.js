import React from 'react';

const LearningCourses = () => {
    return (
        <div className='py-[100px] '>
            <div className='max-w-[1240px] mx-[60px] md:grid grid-cols-3 gap-5'>
                <div className=' shadow-amber-300 shadow-xl h-[300px] hover:scale-105 duration-500 my-4'></div>
                <div className=' shadow-amber-300 shadow-xl h-[300px] bg-gray-100 hover:scale-105 duration-500 my-4'></div>
                <div className=' shadow-amber-300 shadow-xl h-[300px] hover:scale-105 duration-500 my-4'></div>

            </div>
        </div>
    );
};

export default LearningCourses;