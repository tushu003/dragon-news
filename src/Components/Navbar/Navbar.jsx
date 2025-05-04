import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto mt-5'>
            <div></div>
            <div className="nav flex gap-4 text-[#9F9F9F]">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carrer'>Career</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={user} alt="" />
                <button className=' bg-[#403F3F] px-8 rounded-sm py-2 text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;