import React from 'react';
import { Link } from 'react-router-dom';

const CoursesName = () => {
    return (
        <div className='bg-[#1c2b38] p-4 flex justify-between mx-auto w-max-[1240px] py-[110px]'>
            <div className=''>
                <div className=' border border-black'>
                    <h1 className='md:text-3xl text-2xl text-white'>What to learn latest skill?</h1>
                </div>
                <div className='text-white border border-black'>
                    <p><small>SignUp to Our course and stay Upto date</small></p>
                </div>
            </div>
            <div>
                <input type="text" className='mr-2 p-2 text-slate-600 ' placeholder='Email' />
                <button className='bg-sky-500 inline text-white p-2 rounded mt-2'>Get Experts</button>
                <p className='text-white'><small>We care about your learning process and learn <Link className='text-blue-500'>privacy and policy</Link></small></p>
            </div>

        </div>
    );
};

export default CoursesName;