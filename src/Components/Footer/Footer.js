import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillTwitterSquare, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='py-[100px]'>
            <div className='grid grid-cols-3 items-center gap-4 bg-[#2699fb] max-w-[1240px] mx-10 p-4'>
                <div className=' col-span-1'>
                    <h2 className='font-bold text-xl mb-3 '>JackBack Tech.</h2>
                    <p className='text-white'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nesciunt, quisquam corrupti cupiditate assumenda nulla.</small></p>
                    <div className='text-white flex mt-3 justify-between items-center text-xl'>
                        <AiFillFacebook></AiFillFacebook>
                        <AiOutlineInstagram></AiOutlineInstagram>
                        <AiFillTwitterSquare></AiFillTwitterSquare>
                        <AiFillGithub></AiFillGithub>


                    </div>
                </div>
                <div className=' col-span-2 flex justify-between mx-5'>
                    <div>
                        <h6 className='font-bold'>Solutions</h6>
                        <p className='text-white'><small>Analytic</small></p>
                        <p className='text-white'><small>Marketing</small></p>
                        <p className='text-white'><small>Commerce</small></p>
                        <p className='text-white'><small>Insights</small></p>
                    </div>
                    <div>
                        <h6 className='font-bold'>Support</h6>
                        <p className='text-white'><small>Pricing</small></p>
                        <p className='text-white'><small>Documentation</small></p>
                        <p className='text-white'><small>Guides</small></p>
                        <p className='text-white'><small>Api Status</small></p>
                    </div>
                    <div>
                        <h6 className='font-bold'>Company</h6>
                        <p className='text-white'><small>About</small></p>
                        <p className='text-white'><small>Blog</small></p>
                        <p className='text-white'><small>Jobs</small></p>
                        <p className='text-white'><small>Press</small></p>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default Footer;