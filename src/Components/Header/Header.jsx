import React from 'react';
import Logo from '../../assets/logo.png'
import { format } from 'date-fns';



const Header = () => {
    return (
        <div className='flex flex-col mt-10 mb-5  justify-center items-center'>
           <img className='w-[371px] text-center mx-auto'  src={Logo} alt="" />
           <p className='mt-3 text-[#9F9F9F]'>Journalism Without Fear or Favour</p>
           <p className='font-semibold text-[#9F9F9F]'>{format(new Date(), "EEEE, MMMM d,uuuu")}</p>
        </div>
    );
};

export default Header;