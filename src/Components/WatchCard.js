// WatchCard.js
import React from 'react';

const WatchCard = ({ image, title, description, Button }) => {
  return (
    <section  className=" max-w-sm mx-auto mb-8">
      <div className="flex  w-[200px] h-[200px] rounded-full    md:h-[250px]  md:w-auto  md:rounded-bl-[100px] md:rounded-tr-[100px] overflow-hidden bg-slate-950    shadow-lg bg-opacity-40 flex items-center justify-center mx-auto 5 hover:bg-violet-950/40 transition transition-all  hover:translate-y-2 backdrop-blur-md ">
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat relative md:w-full md:h-full w-[200px] h-[200px] ">
          <img className="mx-auto w-[60%] h-full object-cover hover:scale-110 transition transition-all " src={image} alt={title} />
        </div>
      </div>
      <h2 className=" font-serif text-xl font-semibold text-white mx-auto text-center mt-9 hover:translate-y-2 transition transition-all cursor-default ">{title}</h2>
      <p className="text-gray-400 p-2 text-center mt-4 font-Inter text-sm ">{description}</p>
      <a className='px-3 py-3 bg-indigo-700 rounded-xl text-sm flex justify-center text-white hover:bg-indigo-800 cursor-pointer'>{Button}</a>
    </section>
  );
};

export default WatchCard;

