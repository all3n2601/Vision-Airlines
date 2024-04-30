import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import FlightCard from "./FlightCard";
import { FaSortAmountDownAlt, FaEdit } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function FlightSearch() {
  const location = useLocation();
  const searchParams = location.state?.searchParams;
  const [isSortOptionsVisible, setIsSortOptionsVisible] = useState(false);
  const [flights, setFlights] = useState([]);
  const [showModifyDialog, setShowModifyDialog] = useState(false);
  const handleShowModifyDialog = () => {
    setShowModifyDialog(true);
  };

  const departure = searchParams.departure;
  const destination = searchParams.destination;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlights = async (e) => {
      const res = await axios.get(
        "http://localhost:4451/api/flight/getbyRoute",
        {
          params: {
            start: departure,
            end: destination,
          },
        }
      );
      setFlights(res.data);
    };

    fetchFlights();
  }, []);


  const handleSort = (sortKey) => {
    let sortedFlights = [...flights];
    if (sortKey === "cheapest") {
      sortedFlights.sort(
        (a, b) =>
          parseFloat(a.rate.replace("$", "")) -
          parseFloat(b.rate.replace("$", ""))
      );
    } else if (sortKey === "duration") {
      sortedFlights.sort((a, b) => {
        const durationA = parseInt(a.totalTime);
        const durationB = parseInt(b.totalTime);
        return durationA - durationB;
      });
    } else if (sortKey === "earliest") {
      sortedFlights.sort(
        (a, b) => new Date(a.departureDate) - new Date(b.departureDate)
      );
    } else if (sortKey === "latest") {
      sortedFlights.sort(
        (a, b) => new Date(b.departureDate) - new Date(a.departureDate)
      );
    }
    setFlights(sortedFlights);
  };

  return (
    <div
      className="bg-[#eeeeee] text-black min-h-screen pt-20 animate-float"
      style={{ fontFamily: "Anta" }}
    >
      <div
        className="p-4 flex justify-between items-center bg-white mx-auto"
        style={{ maxWidth: "80%" }}
      >
        <div>
          {
            <div className="flex items-center space-x-3">
              <div className="text-lg font-semibold">
                {searchParams.departure} to {searchParams.destination}
              </div>
            </div>
          }
        </div>
        <p>{flights.length} Flights Found For Your Trip</p>
        <button
          onClick={handleShowModifyDialog}
          className="flex items-center justify-center text-sm font-semibold bg-blue-500 text-white p-2 rounded-md shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <FaEdit className="mr-2" />
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
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          onClick={() => setIsSortOptionsVisible(false)}
        >
          <div
            className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <select
              onChange={(e) => handleSort(e.target.value)}
              className="border p-2 rounded-md w-full"
            >
              <option value="cheapest">Cheapest</option>
              <option value="duration">Duration</option>
              <option value="earliest">Earliest</option>
              <option value="latest">Latest</option>
            </select>
          </div>
        </div>
      )}
      <div>
        {flights.map((flight) => (
          <FlightCard
            key={flight.aeroplaneID}
            flight={flight}
            className="animate-float"
          />
        ))}
      </div>
    </div>
  );
}
export default FlightSearch;
