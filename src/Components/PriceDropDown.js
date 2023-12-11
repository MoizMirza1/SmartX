import React, { useContext, useState } from 'react';
import { LayersOutline, ChevronDownOutline, ChevronUpOutline } from 'react-ionicons';
import { Menu } from '@headlessui/react';
import { WatchContext } from './WatchContext.js';


// import custom style for scrolbar

import './bounce.css'

const PriceDropDown = () => {
  const { price, setPrice,  } = useContext(WatchContext);
  
  const prices = [
    {value: 'Price range (any)'},
    {value: '0-1000'},
    {value: '1000-2000'},
    {value: '2000-3000'},
    {value: '3000-4000'},
    {value: '4000-5000'},
    {value: '5000-6000'},
    {value: '6000-7000'},
    {value: '7000-8000'},
    {value: '8000-9000'},
    {value: '9000-10000'},
    {value: '10000-11000'},
    {value: '11000-12000'},
    {value: '12000-13000'},
    {value: '13000-14000'},
    {value: '14000-15000'},
    {value: '15000-16000'},
    {value: '16000-17000'},
    {value: '17000-18000'},
    {value: '18000-19000'},
    {value: '19000-20000'},
    {value: '20000-21000'},
    {value: '21000-22000'},
    {value: '22000-23000'},
    {value: '23000-24000'},
    {value: '24000-25000'},
    {value: '25000-26000'},
    {value: '26000-27000'},
    {value: '27000-28000'},
    {value: '28000-29000'},
    {value: '29000-30000'},
    {value: '30000-31000'},
    {value: '31000-32000'},
    {value: '32000-33000'},
    {value: '33000-34000'},
    {value: '34000-35000'},
    {value: '35000-36000'},
    {value: '36000-37000'},
    {value: '37000-38000'},
    {value: '38000-39000'},
    {value: '39000-40000'},
    {value: '40000-41000'},
    {value: '41000-42000'},
    {value: '42000-43000'},
    {value: '43000-44000'},
    {value: '44000-45000'},
  ]
  




  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left relative='>
        <div className='flex items-center'>
          <LayersOutline className='dropdown-icon-primary' />
          <div className='ml-2'>
            <div className='text-[15px] font-medium leading-tight'>{price}</div>
            <div className='text-[13px]'>Price Range</div>
          </div>
        </div>
        <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
          {isOpen ? <ChevronUpOutline className='dropdown-icon-secondary' /> : <ChevronDownOutline className='dropdown-icon-secondary' />}
        </div>
      </Menu.Button>

      <Menu.Items className='dropdown-menu custom-scrollbar max-h-40'>
        {prices.map((price, index) =>{
          return(
            <Menu.Item className='cursor-pointer hover:text-white hover:bg-indigo-700 transition p-3 rounded-xl' as= 'li' key={index} onClick={()=> setPrice(price.value) }>
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceDropDown;
