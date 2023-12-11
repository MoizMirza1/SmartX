import React from 'react'

//  import  component

import Banner from '../Components/Banner'
import WatchCardsSection from '../Components/WatchCardsSection';
import Info from '../Components/Info';
import Search from '../Components/Search';
import WatchList from '../Components/WatchList.js'
import Contact from '../Components/Contact.js'
import Brands from '../Components/Brands.js'



const Home = () => {
  return (
    <div className='min-h-[1800px]'>

      
      <Banner/>
      <WatchCardsSection />
      <Info/>
      <Search/>
      <WatchList/>
        <Brands/>
      <Contact/>
     

      
    </div>
  )
}

export default Home