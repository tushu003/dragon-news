import React from 'react';
import { FaFaceKiss } from 'react-icons/fa6';
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold my-5'>Find Us On</h1>
            <div>
                <div>
                    <button className='btn join-item justify-start w-full py-6'>
                    <IoLogoFacebook /> Facebook</button>
                    <button className='btn join-item justify-start w-full py-6'>
                    <AiFillTwitterCircle />    Twitter</button>
                    <button className='btn join-item justify-start w-full py-6'>
                    <AiFillInstagram />    Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;