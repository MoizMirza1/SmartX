import React, { useContext, useState } from 'react';
import { WatchContext } from './WatchContext';
import Watch from './Watch.js';
import { Link } from 'react-router-dom';

import ContactUsImg from '../assets/img/watchList.jpeg';

const WatchList = () => {
  const { watches, loading } = useContext(WatchContext);
  const [displayCount, setDisplayCount] = useState(6);

  if (loading) {
    return (
      <section id='Product' className='pt-10 bg-black'>
        <div className='container mx-auto flex justify-center items-center'>
          <div className='animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900'></div>
        </div>
      </section>
    );
  }

  if (watches.length === 0) {
    return (
      <section id='Product' className='pt-10 bg-black'>
        <div className='container mx-auto flex justify-center items-center'>
          <h1 className='flex items-center justify-center mx-auto text-center text-xl text-gray-400 font-Inter'>
            Sorry, no product matched your search.
          </h1>
        </div>
      </section>
    );
  }

  const sortedWatches = watches.slice(0, displayCount);

  return (
    <section
      id='Product'
      className='mb-20 bg-black p-[50px]'
      style={{ backgroundImage: `url('${ContactUsImg}')`, backgroundAttachment: 'fixed' }}
    >
      <div className='container mx-auto '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
          {sortedWatches.map((watch, index) => (
            <Link to={`/property/${watch.id}`} key={index}  >
              <div className='flex justify-center items-center'>
                <Watch watch={watch} />
              </div>
            </Link>
          ))}
        </div>
        {displayCount < watches.length && (
          <button
            className='bg-gray-800 text-white py-2 px-4 rounded-full mt-4'
            onClick={() => setDisplayCount(displayCount + 3)}
          >
            Load More
          </button>
        )}
        
      </div>
    </section>
  );
};

export default WatchList;
