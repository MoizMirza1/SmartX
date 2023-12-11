import React from 'react';

const Brands = () => {
  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden bg-white [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] -my-20">
      <ul className="brands-wrapper flex justify-center items-center">
        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <li key={index}>
            <img
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${index}.png`}
              width="250"
              height="100"
              alt={`Brand ${index}`}
            />
          </li>
        ))}
      </ul>
      <ul className="brands-wrapper" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <li key={index}>
            <img
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${index}.png`}
              width="250"
              height="100"
              alt={`Brand ${index}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
