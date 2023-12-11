import React, { createContext, useEffect, useState } from 'react';

// import data 

import {WatchData} from '../Data'

export const WatchContext = createContext();

const WatchContextProvider = ({ children }) => {
 
  const [watches, setWatches] = useState(WatchData)
  const [name , setName] = useState('Watch name (any)')
  const [names, setNames] = useState([])
  const [brand , setBrand] = useState('Watch brand (any)')
  const [brands , setBrands] = useState([])
  const [price , setPrice] = useState('Price range (any)')
  const [loading , setLoading] = useState(false)


  // return watchbrand
  useEffect(() => {
    const allCountries = watches.map((watch) => {
      return watch.brand
    })
    
    const uniqueWatches = ['Watch brand (any)' , ...new Set(allCountries)]
    // console.log(uniqueWatches)

    // set brands state

    setBrands(uniqueWatches);
  },[])

  // return watchname
  useEffect(() => {
    const allNames = watches.map((watch) => {
      return watch.name
    })
    
    const uniqueNames = ['Watch name (any)' , ...new Set(allNames)]
    // console.log(uniqueNames)

    // set brands state

    setNames(uniqueNames);
  },[])

  const handleClick = () => {
    setLoading(true);
  
    setTimeout(() => {
      let filteredWatches = [...WatchData];
  
      // Filter by name
      if (name !== 'Watch name (any)') {
        filteredWatches = filteredWatches.filter((watch) => watch.name === name);
      }
  
      // Filter by brand
      if (brand !== 'Watch brand (any)') {
        filteredWatches = filteredWatches.filter((watch) => watch.brand === brand);
      }
  
      // Filter by price range (assuming price is a number)
      if (price !== 'Price range (any)') {
        filteredWatches = filteredWatches.filter((watch) => watch.price === parseInt(price));
      }
  
      setWatches(filteredWatches);
      setLoading(false);
    }, 2000);
  };
  

  return (
    <WatchContext.Provider value={{
      name,
      setName,
      names,
      setNames,
      brand,
      setBrand,
      brands,
      price,
      setPrice,
      watches,
      loading,
      handleClick,
      
    }}>
      {children}
    </WatchContext.Provider>
  );
};

export default WatchContextProvider;
