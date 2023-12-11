import React from 'react';
import { useParams } from 'react-router-dom';
import { CartOutline, HeartOutline } from 'react-ionicons';

import { WatchData } from '../Data';

import bgImage from '../assets/img/watchList.jpeg'

const Product = () => {
  const { id } = useParams();
  const watch = WatchData.find((watch) => watch.id === parseInt(id));

  if (!watch) {
    return <h2>Sorry, no product found</h2>;
  }

  const quantityOptions = [1, 2, 3, 4, 5];

  // Sample reviews data (replace this with actual reviews data)
  const reviews = [
    { id: 1, user: 'John Doe', rating: 5, comment: 'Great watch! Love the design and functionality.' },
    { id: 2, user: 'Jane Smith', rating: 4, comment: 'Good quality, but a bit pricey.' },
    // Add more reviews as needed
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8"style={{ backgroundImage: `url('${bgImage}')`, backgroundAttachment: 'fixed'  }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Left side of the page */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg mb-4">
              <img className="w-full h-full object-cover rounded-2xl" src={watch.image} alt="Product Image" />
            </div>
          </div>

          {/* Right side of the page */}
          <div className="md:flex-1 px-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{watch.name}</h2>


            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Price:</span>
              <span className="text-gray-600 dark:text-gray-300 font-extrabold">${watch.price}</span>
            </div>

            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div>
            </div>

            <div className="mb-2 mt-4">
              <span className="font-bold text-gray-700 dark:text-gray-300 mr-4 mt-10">Select Quantity:</span>
              <div className="relative inline-block w-32">
                <select
                  className="block appearance-none w-full bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-white py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:border-gray-500 dark:focus:border-gray-400 focus:shadow-outline-gray"
                  id="quantity"
                >
                  {quantityOptions.map((quantity) => (
                    <option key={quantity} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 12l-1 1-4-4 1-1 3 3 6-6 1 1" fillRule="evenodd" />
                  </svg>
                </div>
                
              </div>
            </div>
            <div className="mt-4">
  <span className="font-bold text-gray-700 dark:text-gray-300 ">Product Information:</span>
  <div className="flex flex-wrap mt-2">
    <div className="mb-2 mr-4">
      <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
        Battery: {watch.BatteryLife}
      </span>
    </div>
    <div className="mb-2 mr-4">
      <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
        Battery Life: {watch.BatteryLife}
      </span>
    </div>
    <div className="mb-2 mr-4">
      <span className="inline-block bg-yellow-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
        Protection: {watch.Protection}
      </span>
    </div>
    <div>
      <span className="inline-block bg-teal-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
        Year: {watch.year}
      </span>
    </div>
  </div>
</div>




            <div className="flex -mx-2 mb-4 mt-24">
              <div className="w-1/2 px-2">
                <button className="flex items-center w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  <HeartOutline width="20px" height="20px" className="mr-2" />
                  Add to Wishlist
                </button>
              </div>
              <div className="flex-1 ml-2">
                <button className="flex items-center max-w-[600px] bg-gray-200 text-gray-700 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                  <CartOutline width="20px" height="20px" className="mr-2" />
                  Add to Cart
                </button>
              </div>
              
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Customer Reviews</h3>
          {reviews.map((review) => (
            <div key={review.id} className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
              <div className="flex items-center mb-1">
                <span className="text-gray-600 dark:text-gray-300 mr-2">{review.user}</span>
                <div className="flex items-center">
                  {/* Star rating */}
                  {[...Array(review.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="h-5 w-5 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2l1.9 6.2H18l-4.6 3.6 1.7 6.1L10 15.4l-4.1 2.5 1.7-6.1L2 8.2h6.1L10 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
