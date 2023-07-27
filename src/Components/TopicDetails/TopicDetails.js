import React from 'react';

const TopicDetails = ({ topic }) => {

    const { suggest1, topic1Img } = topic;
    return (
        <div>
            <img src={topic1Img} alt="" />
            <p className='mt-2'>{suggest1}</p>
        </div>
    );
};

export default TopicDetails;