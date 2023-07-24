import React from 'react';
import img from '../../assets/laptop.jpg'

const Experts = () => {
    return (
        <div>
            <div className='my-10 mx-w-[1240px]  mx-auto md:grid grid-cols-2'>
                <div className='col-span-1 md:w-[80%]'>
                    <img src={img} alt="" />
                </div>
                <div className=' col-span-1 p-4 flex flex-col justify-center'>
                    <h2 className='mb-2 font-bold'>Experts</h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam, ut error sit voluptates numquam quo rem omnis libero harum repellat aspernatur voluptate voluptatem architecto itaque doloribus voluptatibus saepe quia ab totam aperiam, blanditiis nulla debitis nobis? Omnis placeat ipsam iste doloribus aliquam similique adipisci soluta quam odit. Laudantium, excepturi.</small></p>
                    <button className='bg-black mt-4 w-[125px] text-white p-3 rounded-md'>Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default Experts;