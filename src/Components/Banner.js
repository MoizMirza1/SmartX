import React from 'react';
import heroImg2 from '../assets/img/HeroImg2.png';
import { Link } from 'react-router-dom';
import './bounce.css'   // custom style
import bgImage from '../assets/img/BannerImg.jpeg'


const Banner = () => {
  return (
    
<section 
  style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed'  }}
  id='Home' 
  className="hero-section flex flex-col md:flex-row items-center mt-[-2rem]  text-white md:h-[600px] object-contain">

  <div className="md:w-1/2 md:pr-8 sm:mb-0 mt-24 sm:mt-0 mb-14 text-center md:text-left px-14">
    <h1 className="cursor-default text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-Inter font-bolder">
     <span className='text-blue '> Explore </span>the Future on Your Wrist
    </h1>
    <p className="text-lg mb-8 font-thin cursor-default">
      Discover the latest and most innovative smart watches at our brand store.
      Elevate your lifestyle with cutting-edge technology.
    </p>
  
    <hr
  class="my-12 h-1px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    <a
      href="#shop"
      className=" font-normal bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-full text-lg font-bold transition-all"
    >
      Shop Now
    </a>
  </div>
  <div className="md:w-1/2 w-[300px]  ">
    <img  className="  animate-bounce-small mx-auto max-w-full  bg-opacity-5  " src={heroImg2} alt="Smart Watches " />
    
  </div>
</section>

  );
};

export default Banner;
