import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeSharp, RibbonSharp, InformationCircleSharp,GridSharp, AccessibilitySharp } from 'react-ionicons';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import CompanyLogo from '../assets/img/Mylogo.png';
import bgImage from '../assets/img/BannerImg.jpeg'

const Header = () => {
  const Menus = [
    
   { name : "Home" , icon :< HomeSharp color={'#d3dce6'}  />, des : "translate-x-0" },
   { name : "Featured" , icon : <RibbonSharp color={'#ffffff'} /> , des : "translate-x-16" },
   { name : "About" , icon :  <InformationCircleSharp color={'#ffffff'}  /> , des : "translate-x-32" },
   { name : "Product" , icon :  <GridSharp color={'#ffffff'} /> , des : "translate-x-48" },
   { name : "Team" , icon : <AccessibilitySharp color={'#ffffff'}  /> , des : "translate-x-64" },
    
  ]



  const [active, setActive] = useState(0);

  

  return (
    <header  className='py-6 border-b bg-gray-900'
    style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed'  }}>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo div */}
        <Link to='/'>
          <div className='flex items-center' style={{ maxWidth: '200px' }}>
   
            <img className='md:w-32 w-24 md:ml-0 ml-5' src={CompanyLogo} alt="Company Logo" />
          </div>
        </Link>

        {/* Navigation div  */}
      <div className='hidden sm:block flex items-center justify-center w-[400px] px-6 max-h-[4.3rem] rounded-full bg-gray-700 bg-opacity-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
  <ul className='flex relative'>
    <span className={`bg-rose-900 duration-700 ${Menus[active].des} border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full bac`}>
      <span className='w-3.5 h-3.5 bg-red-300 absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1 bg-transparent'></span>
      <span className='w-3.5 h-3.5 bg-red-300 absolute top-4 -right-[18px] rounded-tl-[11px] bg-transparent shadow-myShadow2'></span>
    </span>
    {Menus.map((menu, i) => (
      <li key={i} className='w-16'>
        <ScrollLink to={menu.name} activeClass = 'active' spy ={true} smooth={true} duration={500} >
        <a className='flex flex-col text-center items-center pt-6' onClick={() => setActive(i)}>
          <span className={`text-xl cursor-pointer duration-500 z-10 ${i === active && "-mt-6 "}`}>
            {menu.icon}
            
          </span>
          <span className={`text-white ${active === i ? 'translate-y-6 duration-700 opacity-100' : 'opacity-0 translate-y-10'}`}>{menu.name}</span>
        </a>
          </ScrollLink>
      </li>
    ))}
  </ul>
</div>


        {/* Button div */}
        <div className='text-white flex items-center gap-x-4 md:p-0 p-5'>
          {/* Login Button */}
          <Link className='text-base px-5 py-2 rounded-xl text-md transition-all' to='/'>
            Login
          </Link>

          {/* Sign Up Button */}
          <Link
            className='font-Inter ring-2 ring-indigo-300 bg-indigo-700 hover:bg-indigo-800 px-5 py-2 rounded-xl text-sm transition-all font-bold'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
