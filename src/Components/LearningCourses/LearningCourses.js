import React from 'react';
import { BiPurchaseTag } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const LearningCourses = ({ course }) => {
    const { course_id, course_name, user, price, img } = course;
    return (
        <div>

            <div className=' shadow-amber-300 shadow-xl  hover:scale-105 duration-500 my-4 p-5'>
                <img className='w-[250px] object-cover mx-auto' src={img} alt="" />
                <h4 className='font-bold mt-3 '>{course_name}</h4>
                <div className='flex justify-between items-center mt-2'>
                    <p><BiPurchaseTag className='inline'></BiPurchaseTag> {user}</p>
                    <p className='text-xl font-bold'>BDT {price}</p>
                </div>
                <div className='w-full   justify-end flex'>
                    <Link to={`/courseDetails/${course_id}`}> <button className='bg-[#389bd9] p-2 w-[80px] text-white font-bold rounded mt-3'>Trial</button></Link>
                </div>
            </div>

        </div>
    );
};

export default LearningCourses;