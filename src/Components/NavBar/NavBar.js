import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className='bg-[#2699fb] p-4'>
                <div className='py-3 items-center  flex justify-between max-w-[1240px] mx-auto'>
                    <div className='text-3xl font-bold'>
                        JackBack
                    </div>
                    <ul className='hidden md:flex gap-7 text-white'>
                        <li><Link>Contact</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>LogIn</Link></li>
                        <li><Link>LogOut</Link></li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;