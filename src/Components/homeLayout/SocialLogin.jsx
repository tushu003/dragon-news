import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-semibold'>Login With</h1>
            <div className='space-y-3 mt-6'>
                <button className='btn btn-outline w-full btn-secondary'><FcGoogle size={24} /> Login With Google</button>
                <button className='btn btn-outline w-full btn-primary'> <FaGithub size={24} />Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;