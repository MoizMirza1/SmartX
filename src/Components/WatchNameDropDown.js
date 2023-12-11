import React, { useContext, useState } from 'react';
import { LayersOutline, ChevronDownOutline, ChevronUpOutline } from 'react-ionicons';
import { Menu } from '@headlessui/react';
import { WatchContext } from './WatchContext.js';


// import custom style for scrolbar

import './bounce.css'

const WatchNameDropDown = () => {
  const { name, setName, names } = useContext(WatchContext);
  // console.log(names)


  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left relative='>
        <div className='flex items-center'>
          <LayersOutline className='dropdown-icon-primary' />
          <div className='ml-2'>
            <div className='text-[15px] font-medium leading-tight'>{name}</div>
            <div className='text-[13px]'>Select name</div>
          </div>
        </div>
        <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
          {isOpen ? <ChevronUpOutline className='dropdown-icon-secondary' /> : <ChevronDownOutline className='dropdown-icon-secondary' />}
        </div>
      </Menu.Button>

      <Menu.Items className='dropdown-menu custom-scrollbar max-h-40'>
        {names.map((type, index) =>{
          return(
            <Menu.Item className='cursor-pointer hover:text-white hover:bg-indigo-700 transition p-3 rounded-xl' as= 'li' key={index} onClick={()=> setName(type) }>
              {type}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default WatchNameDropDown;
