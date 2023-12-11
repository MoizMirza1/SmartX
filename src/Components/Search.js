import React, { useContext } from 'react'
import { SearchOutline } from 'react-ionicons';

import WatchNameDropDown from './WatchNameDropDown.js'
import CategoryDropDown from './CategoryDropDown.js'
import PriceDropDown from './PriceDropDown.js'

//import WatchContext

import { WatchContext } from './WatchContext.js';


const Search = () => {
  
  const { handleClick } = useContext(WatchContext)
  // const { watches } = useContext(WatchContext)
      
  // console.log(watches)   // check data in console 
  return (
    <div className='px-[30px] py-6  max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative  lg:shadow-xl rounded-3xl bg-gray-100 bg-opacity-30 mt-4 items-center'>
        <CategoryDropDown/>
        <WatchNameDropDown/>
        <PriceDropDown/>
        <button onClick={() => handleClick()} className='bg-indigo-700 hover:bg-indigo-800 w-full lg:max-w-[162px] h-16 rounded-xl flex items-center justify-center'><SearchOutline color={'white'}/></button>
    </div>
  )
}

export default Search