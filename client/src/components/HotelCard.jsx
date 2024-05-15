import React from 'react';
// import hotelImage from './hotel-image.jpg'; // Importing sample image

const HotelCard = () => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src='' alt="Hotel Image" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Hotel Name</h3>
        <p className="text-gray-600">Starting from $100 per night</p>
        <div className="flex items-center mt-2">
          <svg className="w-4 h-4 fill-current text-yellow-500 mr-1" viewBox="0 0 20 20">
            <path d="M10 1l2.5 6h6.5l-5 4.5 2 7-6-4.5-6 4.5 2-7-5-4.5h6.5l2.5-6z"></path>
          </svg>
          <p className="text-gray-600">4.5 stars (200 reviews)</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50">Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;