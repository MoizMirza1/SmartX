// WatchCardsSection.js
import React from 'react';
import WatchCard from './WatchCard'; // Make sure to provide the correct path
import image1 from  '../assets/img/watch1.png'
import image2 from  '../assets/img/watch2.png'
import image3 from  '../assets/img/watch3.png'

import bgImage from '../assets/img/BannerImg.jpeg'



const WatchCardsSection = () => {
  return (  
    <section id='Featured' className=" watch-cards-section py-16 bg-gradient-to-t from-gray-900 via-indigo-950 to-blue-950" style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed', objectFit: 'cover'  }}>
      <div className="container mx-auto ">
        <h2 className="font-Inter md:text-4xl text-3xl font-bold mb-8 text-white text-center"> <span className='text-blue '>Featured</span> Watches</h2>
      
      
        <div className="flex flex-wrap justify-center items-center">
          <WatchCard
            image={image1} 
            title="Bulova || Innovation Beyond Measure"
            description="Bulova is celebrated for its precision timekeeping and innovations, including the Accutron"
            Button="View Details"
          />
          <WatchCard
            image={image2}  
            title="Omega || Innovate Your Time"
            description="Omega has been at the forefront of watchmaking innovation. Known for its association with space exploration"
            Button="View Details"
          />
          <WatchCard
            image={image3}  
            title="Rolex || Crafting Perfection"
            description="Rolex is synonymous with luxury and precision. With a rich history and timeless designs."
            Button="View Details"
          />
        </div>
      </div>
    </section>
  );
};

export default WatchCardsSection;
