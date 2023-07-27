import React from 'react';

const TopicList = ({ topic }) => {
    const { topic1Name } = topic;
    return (
        <div>
            <p className='p-4 font-bold border-b-2'><small>{topic1Name}</small></p>
        </div>
    );
};

export default TopicList;