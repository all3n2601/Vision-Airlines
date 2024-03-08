import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import FlightCard from './FlightCard';
import { FaSortAmountDownAlt } from 'react-icons/fa';

function FlightSearch() {
  const [isSortOptionsVisible, setIsSortOptionsVisible] = useState(false);
  const [flights, setFlights] = useState([]);

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
    rate: '$200'
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
    rate: '$1200'
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
    rate: '$2500'
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
    rate: '$700'
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
    rate: '$1100'
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
    rate: '$900'
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
      <p>{flights.length} Flights Found For Your Trip</p>
      <button onClick={() => setIsSortOptionsVisible(!isSortOptionsVisible)} className="bg-white p-2 rounded-full border shadow flex items-center justify-center">
        <FaSortAmountDownAlt className="text-lg" />
      </button>
    </div>
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
