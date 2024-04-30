import React, { useState, useEffect, useRef } from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaCaretDown, FaUtensils, FaSuitcaseRolling, FaCoins, FaExchangeAlt, FaTimesCircle, FaRegCheckCircle } from 'react-icons/fa';
import { IoMdAirplane } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

const FlightCard = ({ flight }) => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);
  const navigate = useNavigate();

  const handleProceed =() =>{
    navigate('/passenger-detail')
  }

  const classPricing = {
    "Economy": 3000, // Base price for Economy class
    "Business-Class": 8000, // Higher price for Business class
    "First-Class": 15000, // Premium price for First class
  };
  
  // Function to assign a price based on the class of flight
  function getPriceByClass(flightClass) {
    return classPricing[flightClass] || 0; // Default to 0 if class not found
  }

  function calculateTotalTime(startTime, endTime) {
   
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);
  
    // Convert start and end times to minutes past midnight
    const startInMinutes = startHour * 60 + startMinute;
    const endInMinutes = endHour * 60 + endMinute;
  
    // Calculate the difference in minutes
    let durationInMinutes = endInMinutes - startInMinutes;
  
    // Handle cases where the end time is on the next day (overnight flights)
    if (durationInMinutes < 0) {
      durationInMinutes += 24 * 60; // Add 24 hours in minutes
    }
  
    // Convert the total minutes into hours and minutes
    const durationHours = Math.floor(durationInMinutes / 60);
    const durationMinutes = durationInMinutes % 60;
  
    return { hours: durationHours, minutes: durationMinutes };
  }
  
  // Example usage
  const startTime = flight.startTime;
  const endTime = flight.endTime;
  const price = getPriceByClass(flight.classs);
  
  const { hours, minutes } = calculateTotalTime(startTime, endTime);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setShowDetails(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-4/5 mx-auto hover:bg-gray-100 cursor-pointer animate-float" ref={detailsRef}>
      <div className="flex justify-between items-center">
        <div className="w-9/12">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              
              <div className="flex flex-col">
                <span>{flight.startDestination}</span>
                <span className="text-sm">{flight.startDestination}</span>
                <span className="text-sm">{flight.startTime}</span>
              </div>
              <FaPlaneDeparture className="text-blue-500 mr-2" />
            </div>

            <div className="relative flex-grow">
              <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 border-dotted border-t-2 border-gray-300"></div>
              <IoMdAirplane className="animate-pulse mx-auto text-3xl rotate-90 text-gray-500" />
            </div>

            <div className="flex items-center">
            <FaPlaneArrival className="text-green-500 ml-2" />
              <div className="flex flex-col text-right">
                <span>{flight.arrivalAirport}</span>
                <span className="text-sm">{flight.endDestination}</span>
                <span className="text-sm">{flight.endTime}</span>
              </div>
              
            </div>
          </div>
          <div className="text-center my-2">
            <span>{flight.aeroplaneName}</span>
            <p>Total time: {hours + ':'+ minutes}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-lg hover:text-blue-500">{flight.classs}</p>
          <p className="text-lg hover:text-blue-500" style={{ fontFamily: "anta" }}>₹{price}</p>
          <FaCaretDown className="text-gray-400 hover:text-black mt-2" onClick={() => setShowDetails(!showDetails)} />
        </div>
      </div>
      {showDetails && (
        <div className="mt-4 relative">
        <h4 className="font-bold">Standard Amenities</h4>
        <div className="flex items-center"><FaUtensils className="mr-2" /> Meals - Complimentary</div>
        <div className="flex items-center"><FaRegCheckCircle className="mr-2" /> Seat Selection - Limited Free Seats</div>
        
        <h4 className="font-bold mt-2">Convenience</h4>
        <div className="flex items-center"><FaSuitcaseRolling className="mr-2" /> Check-In Baggage - 25kg</div>
        <div className="flex items-center"><FaCoins className="mr-2" /> Earn Points - 70%</div>
        
        <h4 className="font-bold mt-2">Flexibility</h4>
        <div className="flex items-center"><FaExchangeAlt className="mr-2" /> Change Fee - Zero Fee till 72 hours</div>
        <div className="flex items-center"><FaTimesCircle className="mr-2" /> Cancel & Refund Fee - INR 2500 till 72 hours</div>
        <div className="flex items-center"><FaTimesCircle className="mr-2" /> NoShow Fee - Charges Apply</div>
        
        <button onClick={handleProceed}  className="bg-blue-500 text-white rounded-lg px-4 py-2 absolute right-0 bottom-0 hover:bg-blue-600 cursor-pointer">Proceed</button>
      </div>

      )}
    </div>
  );
};

export default FlightCard;
