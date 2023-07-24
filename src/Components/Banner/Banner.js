import React from 'react';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <>
            <div className='bg-[#2699fb] w-full py-[100px]'>
                <div className='text-center font-bold py-[100px]'>
                    <h6 className='md:text-3xl text-xl'>Imagination is</h6>
                    <h2 className='md:text-[80px] text-[50px] md:py-[24px] text-white'>More important</h2>
                    <h1 className='md:text-4xl text-2xl py-2 md:py-[24px] text-white'>Than
                        <Typed className='pl-3 text-orange-500'
                            strings={['Knowledge', 'Power', 'Money']}
                            typeSpeed={100}
                            backSpeed={120}
                            loop={true}
                        /></h1>
                    <button className=' mt-4 bg-black text-white p-3 rounded-md'>Get Started</button>
                </div>
            </div>
        </>
    );
};

export default Banner;