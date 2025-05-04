import React from 'react';
import swimming from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import play from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 mt-7 rounded-sm'>
            <h1 className='font-semibold pt-5 px-3'>QZone</h1>
            <div className='space-y-4 mt-4'>
                <img src={swimming} alt="" />
                <img src={classImage} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default QZone;