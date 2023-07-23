import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <div className='bg-[#2699fb] p-4'>
                <div className='py-3 items-center flex justify-between max-w-[1240px] mx-auto'>
                    <div className='text-3xl font-bold'>
                        JackBack
                    </div>
                    {
                        toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'></AiOutlineClose>
                            :
                            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'></AiOutlineMenu>
                    }

                    {/*  */}
                    <ul className='hidden md:flex gap-7 text-white'>
                        <li><Link>Contact</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>LogIn</Link></li>
                        <li><Link>LogOut</Link></li>

                    </ul>
                    {/* mobile device */}
                    <ul className={`duration-300 md:hidden fixed ${toggle ? 'left-0' : 'left-[-100%]'} top-[92px] w-full h-screen bg-black text-white`}>
                        <li className='p-5'><Link>Contact</Link></li>
                        <li className='p-5'><Link>About</Link></li>
                        <li className='p-5'><Link>LogIn</Link></li>
                        <li className='p-5'><Link>LogOut</Link></li>

                    </ul>

                </div>

            </div>
        </div>
    );
};

export default NavBar;