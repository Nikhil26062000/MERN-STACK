import React from 'react';

const ServiceCards = ({ name, price, description, usage }) => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col">
      <div className="flex-grow bg-white rounded-lg overflow-hidden shadow-md p-6 m-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">Price: ${price}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-blue-500">{usage}</p>
      </div>
    </div>
  );
};

export default ServiceCards;
