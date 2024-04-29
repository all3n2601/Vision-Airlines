import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import FlightCard from './FlightCard';
import { FaSortAmountDownAlt, FaEdit } from 'react-icons/fa'; 



function FlightSearch() {
  const [isSortOptionsVisible, setIsSortOptionsVisible] = useState(false);
  const [flights, setFlights] = useState([]);
  const [showModifyDialog, setShowModifyDialog] = useState(false);
  const handleShowModifyDialog = () => {
    setShowModifyDialog(true);
  };


  
  useEffect(() => {
    const flightsData = [
  {
    id: 1,
    departureDate: '2024-03-01',
    departureAirport: 'BLR',
    departureCity: 'Bengaluru',
    departureTime: '13:00',
    arrivalAirport: 'LAX',
    arrivalCity: 'Los Angeles',
    arrivalTime: '11:00',
    flightType: 'Airbus A320',
    totalTime: '21h',
    class: 'Economy',
    rate: '200'
  },
  {
    id: 2,
    departureDate: '2024-03-02',
    departureAirport: 'JFK',
    departureCity: 'New York',
    departureTime: '09:00',
    arrivalAirport: 'CDG',
    arrivalCity: 'Paris',
    arrivalTime: '21:00',
    flightType: 'Boeing 777',
    totalTime: '12h',
    class: 'Business',
    rate: '1200'
  },
  {
    id: 3,
    departureDate: '2024-03-03',
    departureAirport: 'SFO',
    departureCity: 'San Francisco',
    departureTime: '11:00',
    arrivalAirport: 'NRT',
    arrivalCity: 'Tokyo',
    arrivalTime: '15:00',
    flightType: 'Boeing 787 Dreamliner',
    totalTime: '14h',
    class: 'First Class',
    rate: '2500'
  },
  {
    id: 4,
    departureDate: '2024-03-04',
    departureAirport: 'LHR',
    departureCity: 'London',
    departureTime: '14:00',
    arrivalAirport: 'DXB',
    arrivalCity: 'Dubai',
    arrivalTime: '00:00',
    flightType: 'Airbus A380',
    totalTime: '10h',
    class: 'Economy',
    rate: '700'
  },
  {
    id: 5,
    departureDate: '2024-03-05',
    departureAirport: 'SYD',
    departureCity: 'Sydney',
    departureTime: '16:00',
    arrivalAirport: 'SIN',
    arrivalCity: 'Singapore',
    arrivalTime: '22:00',
    flightType: 'Airbus A350',
    totalTime: '8h',
    class: 'Business',
    rate: '1100'
  },
  {
    id: 6,
    departureDate: '2024-03-06',
    departureAirport: 'DEL',
    departureCity: 'Delhi',
    departureTime: '18:00',
    arrivalAirport: 'YYZ',
    arrivalCity: 'Toronto',
    arrivalTime: '08:00',
    flightType: 'Boeing 747',
    totalTime: '14h',
    class: 'Economy',
    rate: '900'
  }
];

      
setFlights(flightsData);
  }, []);

  const handleSort = (sortKey) => {
    let sortedFlights = [...flights];
    if (sortKey === "cheapest") {
        sortedFlights.sort((a, b) => parseFloat(a.rate.replace('$', '')) - parseFloat(b.rate.replace('$', '')));
    } else if (sortKey === "duration") {
      sortedFlights.sort((a, b) => {
        const durationA = parseInt(a.totalTime);
        const durationB = parseInt(b.totalTime);
        return durationA - durationB;
      });
    } else if (sortKey === "earliest") {
        sortedFlights.sort((a, b) => new Date(a.departureDate) - new Date(b.departureDate));
    } else if (sortKey === "latest") {
        sortedFlights.sort((a, b) => new Date(b.departureDate) - new Date(a.departureDate));
    }
    setFlights(sortedFlights);
};

return (
  <div className="bg-[#eeeeee] text-black min-h-screen pt-20 animate-float" style={{ fontFamily: "Anta" }}>
  <div className="p-4 flex justify-between items-center bg-white mx-auto" style={{ maxWidth: '80%' }}>
        <div>
          {flights.length > 0 && (
            <div className="flex items-center space-x-3">
              <div className="text-lg font-semibold">
                {flights[0].departureCity} to {flights[0].arrivalCity}
              </div>
            
            </div>
          )}
        </div>
        <p>{flights.length} Flights Found For Your Trip</p>
        <button
  onClick={handleShowModifyDialog}
  className="flex items-center justify-center text-sm font-semibold bg-blue-500 text-white p-2 rounded-md shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
>
  <FaEdit className="mr-2"/>
  Modify
</button>
        <button
          onClick={() => setIsSortOptionsVisible(!isSortOptionsVisible)}
          className="bg-white p-2 rounded-full border shadow flex items-center justify-center"
        >
          <FaSortAmountDownAlt className="text-lg" />
        </button>
      </div>
      {showModifyDialog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6 space-y-4">
            {/* Your form or modification content goes here */}
            <button
              onClick={() => setShowModifyDialog(false)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    {isSortOptionsVisible && (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={() => setIsSortOptionsVisible(false)}>
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
          <select onChange={(e) => handleSort(e.target.value)} className="border p-2 rounded-md w-full">
            <option value="cheapest">Cheapest</option>
            <option value="duration">Duration</option>
            <option value="earliest">Earliest</option>
            <option value="latest">Latest</option>
          </select>
        </div>
      </div>
    )}
    <div>
      {flights.map(flight => (
        <FlightCard key={flight.id} flight={flight} className="animate-float" />
      ))}
    </div>
  </div>
);
}
export default FlightSearch;
