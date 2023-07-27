import React from 'react';
import TopicList from '../TopicList/TopicList';
import { BiLogoDiscourse } from 'react-icons/bi'
import { PiStudentFill } from 'react-icons/pi'
import { AiOutlineStar } from 'react-icons/ai'
import { GoCodeReview } from 'react-icons/go'
import TopicDetails from '../TopicDetails/TopicDetails';
import { AiFillStar } from 'react-icons/ai'

const CourseIndex = ({ index }) => {
    const { author, topic1, course_name, price } = index;
    console.log(index);
    return (
        <div className='grid grid-cols-4 gap-4 mt-8 max-w-[1240px] mx-[60px] '>
            <div className=' p-3 relative'>
                <h1 className='font-bold text-xl '>Course List</h1>
                <div className='sticky top-0 '>
                    {
                        topic1.map(topic => <TopicList
                            key={topic.details_id}
                            topic={topic}
                        ></TopicList>)
                    }
                </div>

            </div>
            <div className='border border-black h-[300px] col-span-2 '>
                {
                    topic1.map(topic => <TopicDetails

                        key={topic.details_id}
                        topic={topic}></TopicDetails>)
                }

            </div>
            <div className='row-span-2'>
                <img className='rounded-full w-[250px]' src={author.img} alt="" />
                <h3 className='text-center font-bold mt-2'>{author.author_name}</h3>
                <p><span>{author.author_details}</span></p>
                <div className='flex justify-between items-center mt-3'>
                    <div className='flex items-center'>
                        <BiLogoDiscourse className='text-xl'></BiLogoDiscourse><p>{author.author_courses}</p>
                    </div>
                    <div className='flex items-center'>
                        <PiStudentFill className='text-xl'></PiStudentFill><p>{author.author_students}</p>
                    </div>
                    <div className='flex items-center'>
                        <AiOutlineStar className='text-xl  mr-2'></AiOutlineStar><p>{author.autor_rating}</p>
                    </div>
                    <div className='flex items-center'>
                        <GoCodeReview className='text-xl  mr-2'></GoCodeReview><p>{author.author_reviews}</p>
                    </div>
                </div>
                <div className='mt-12 border border-black p-3'>
                    <div>
                        <h4 className='font-bold text-xl mb-3'>Course Name:{course_name}</h4>
                        <p className=''>Instructor: {author.author_name}</p>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <AiFillStar className='text-yellow-500 mr-2'></AiFillStar><p>{author.autor_rating}</p>
                            </div>
                            <div>
                                <p className='text-xl font-bold'>Price:BDT {price}</p>
                            </div>
                        </div>
                        <button className='w-full bg-blue-400 p-3 mt-5 rounded-md'>BUY</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CourseIndex;