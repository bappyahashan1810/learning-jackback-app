import React from 'react';
import { useLoaderData } from 'react-router';
import CourseIndex from '../CourseIndex/CourseIndex';

const CourseDetailsAndCart = () => {
    const courseDetails = useLoaderData();
    // const { topic1 } = courseDetails;
    console.log(courseDetails);
    return (
        <div >

            {
                courseDetails.map(index => <CourseIndex
                    key={index.details_id}
                    index={index}
                ></CourseIndex>)
            }

        </div>
    );
};

export default CourseDetailsAndCart;