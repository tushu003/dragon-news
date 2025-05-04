import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex bg-[#F3F3F3] p-4 gap-3 w-11/12 mx-auto items-center'>
            <p className='text-white bg-[#D72050] px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5 pauseOnHover={true}'>
            <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match 
            Highlights: Germany vs Spain as...</p>
            <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match 
            Highlights: Germany vs Spain as...</p>
            <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match 
            Highlights: Germany vs Spain as...</p>
            </Marquee>
           
        </div>
    );
};

export default LatestNews;