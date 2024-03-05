import React, { useState } from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaCaretDown } from 'react-icons/fa';
import { IoMdAirplane } from 'react-icons/io';

const FlightCard = ({ flight }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-4/5 mx-auto hover:bg-gray-100 cursor-pointer">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center">
            <FaPlaneDeparture className="text-blue-500" />
            <p className="ml-2">{flight.departureAirport} - {flight.departureCity}, {flight.departureTime}</p>
          </div>
          <div className="flex items-center my-2">
            <IoMdAirplane className="mx-2" /> <span>{flight.flightType}</span>
          </div>
          <div className="flex items-center">
            <FaPlaneArrival className="text-green-500" />
            <p className="ml-2">{flight.arrivalAirport} - {flight.arrivalCity}, {flight.arrivalTime}</p>
          </div>
          <p>Total time: {flight.totalTime}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="hover:text-blue-500">{flight.class}</p>
          <p className="hover:text-blue-500">{flight.rate}</p>
          <FaCaretDown className="text-gray-400 hover:text-black" onClick={toggleDetails} />
        </div>
      </div>
      {showDetails && (
        <div className="mt-4">
          <p>Terms and Conditions</p>
          <ul className="list-disc ml-4">
            <li>Non-refundable</li>
            <li>One carry-on bag allowed</li>
            {/* Add more terms as needed */}
          </ul>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-2 hover:bg-blue-600">Proceed</button>
        </div>
      )}
    </div>
  );
};

export default FlightCard;