import React from 'react';
import { FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

const Card = ({ cityName, country, price, imageSrc }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl border-2 border-gray-300 transition duration-200 ease-in-out hover:scale-105 group bg-white" style={{ height: "330px" ,fontFamily:"Anta"}}>
      <img src={imageSrc} alt={cityName} className="object-cover rounded-lg w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110" />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
        <h3 className="text-xl font-bold flex items-center"><FaMapMarkerAlt className="mr-2" />{cityName}</h3>
        <p className="flex items-center"><FaMapMarkerAlt className="mr-2" />{country}</p>
        <p className="flex items-center"><FaMoneyBillWave className="mr-2" />Starts from ₹{price}</p>
      </div>
    </div>
  );
};

export default Card;
