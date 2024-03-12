import React from 'react';
import { FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

const Card = ({ cityName, country, price, imageSrc }) => {
  return (
    <div className="relative overflow-hidden rounded-lg transition duration-300 ease-in-out group bg-white border-2 border-gray-300 hover:-translate-y-1 hover:scale-105"
         style={{ height: "250px", fontFamily: "Anta", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -4px rgba(0, 0, 0, 0.1)" }}>
      <img src={imageSrc} alt={cityName} 
           className="object-cover rounded-lg w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110" />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
        <h3 className="text-xl font-bold flex items-center"><FaMapMarkerAlt className="mr-2" />{cityName}</h3>
        <p className="flex items-center"><FaMapMarkerAlt className="mr-2" />{country}</p>
        <p className="flex items-center"><FaMoneyBillWave className="mr-2" />Starts from ₹{price}</p>
      </div>
    </div>
  );
};

export default Card;

