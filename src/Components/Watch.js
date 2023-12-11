import React from 'react';
import { BatteryFullOutline, AppsOutline, TabletPortraitOutline } from 'react-ionicons';
import './bounce.css'; // Import the stylesheet for additional styles

const Watch = ({ watch }) => {
  const { image, type, Protection, BatteryLife, year, name, price, Apps} = watch;

  return (
    <div className='watch-card mt-[20px] '>
      <div className='blurry-container '>
        <img className='  w-full h-auto  object-cover hover:scale-110 transition duration-500' src={image} alt='productImg' />
        <div className='absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 text-white text-xs px-2 py-1 rounded-full'>
          {Protection}
        </div>
      </div>
      <div className='content'>
        <div className='flex items-center justify-between mt-4'>
     
          <div className='ml-3 text-white text-[18px] font-Inter font-semibold'>{name}</div>
        </div>
        <div className='flex gap-x-3 text-sm mt-2 ml-3'>
          <div className='bg-orange hover:bg-red-400 rounded-full text-white px-2'>{BatteryLife}</div>
          <div className='bg-yellow-700 hover:bg-yellow-600 text-yellow-200 text-sm px-2 rounded-full'>{year}</div>
        </div>

        <div className='container mt-5 flex justify-around items-center'>
          
        <div className='flex items-center text-gray-600 gap-1 text-[15px] mt-2 ml-3 p-1'>
          <div className='text-[10px]'><BatteryFullOutline   color={'#e6e6e6'}  /></div>
          <div className = 'text-white'>{BatteryLife}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1 text-[15px] mt-2 ml-3 p-1'>
          <div className='text-[10px]'><AppsOutline    color={'#dedede'} /></div>
          <div className = 'text-white'>{Apps}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1 text-[15px] mt-2 ml-3 p-1'>
          <div className='text-[10px]'><TabletPortraitOutline   color={'#ffffff'} /></div>
          <div className = 'text-white'>{type}</div>
        </div>
        </div>
        <div className='text-white sm:text-[20px] text-[15px] font-Inter font-semibold my-4 flex items-center'>
          <span className='text-yellow-700 ml-3'>{price}</span>
          <span className='text-gray-400 ml-1  '>$</span>
        </div>
      </div>
    </div>
  );
};

export default Watch;
