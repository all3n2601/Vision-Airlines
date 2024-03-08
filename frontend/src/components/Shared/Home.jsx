import React, { useState } from "react";
import Card from "./city_card.jsx";
import { FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import bck from "../../assets/flight.png";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.webp";
import c1 from "../../assets/Lonodn.jpg";
import c2 from "../../assets/Melborne.jpg";
import c3 from "../../assets/PAris.avif";
import c4 from "../../assets/Rome.jpg";
import c5 from "../../assets/singapore.jpg";
import c6 from "../../assets/sydney.jpg";
import c7 from "../../assets/bali.avif";
import c8 from "../../assets/brisbane.avif";
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const items = [img2, img1, img3];

function Home() {
  const [searchParams, setSearchParams] = useState({
    departure: "",
    destination: "",
    departureDate: new Date(),
    returnDate: "",
    class: "",
    passengers: 1,
    adults: 1,
    children: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };
  const incrementPassengers = () => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      passengers: prevParams.passengers < 9 ? prevParams.passengers + 1 : 9,
    }));
  };
  const decrementPassengers = () => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      passengers: prevParams.passengers > 1 ? prevParams.passengers - 1 : 1,
    }));
  };

  const cardData = [
    { cityName: "London", country: "UK", price: "23,999", imageSrc: c1 },
    { cityName: "Melbourne", country: "Australia", price: "24,599", imageSrc: c2 },
    { cityName: "Paris", country: "France", price: "31,299", imageSrc: c3 },
    { cityName: "Rome", country: "Italy", price: "29,999", imageSrc: c4 },
    { cityName: "Singapore", country: "Singapore", price: "17,999", imageSrc: c5 },
    { cityName: "Sydney", country: "Australia", price: "18,000", imageSrc: c6 },
    { cityName: "Bali", country: "Indonesia", price: "14,499", imageSrc: c7 },
    { cityName: "Brisbane", country: "USA", price: "51,999", imageSrc: c8 },
  ];
  const [showExtendedContent, setShowExtendedContent] = useState(false);
  const handleDateChange = (date) => {
    setSearchParams({ ...searchParams, departureDate: date });
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  const customDatePickerStyle = {
    className:
      "text-center bg-[#fdfdfd67] text-yellow-500 rounded-md border border-yellow-500",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchParams);
  };

  return (
    <div className=" bg-[#f9f9f9] text-black min-h-screen">
      <main className="relative">
        <div className="relative min-h-screen" style={{ paddingLeft: "0%" }}>
          <img
            src={bck}
            alt="Background"
            className="w-full h-[80vh] object-cover"
          />
          <div className="absolute top-[50%] left-20% w-full max-w-[80%] p-5 bg-[#fdfdfd67] text-[#0d0d0d] rounded-lg transform translate-x-[13%] -translate-y-[50%]">
      <h2 className="text-center text-2xl font-bold mb-5" style={{ fontFamily: 'Anta' }}>Hi, where would you like to go?</h2>
      <div className="h-1 bg-[#070e17] my-10 mx-14"></div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-5">
        <div className="flex justify-between w-full">
          <input
            type="text"
            id="departure"
            name="departure"
            value={searchParams.departure}
            onChange={handleInputChange}
            onFocus={() => setShowExtendedContent(true)} // Show extended content when input is focused
            placeholder="Departure"
            className="flex-1 mx-2 p-2 bg-[#f8f8f886] border-2 border-[#0000007b] text-[#070e17] rounded-md placeholder-[#070e17]"
            style={{ fontFamily: 'Anta' }}
          />
          <input
            type="text"
            id="destination"
            name="destination"
            value={searchParams.destination}
            onChange={handleInputChange}
            onFocus={() => setShowExtendedContent(true)} // Show extended content when input is focused
            placeholder="Destination"
            className="flex-1 mx-2 p-2 bg-[#f8f8f886] border-2 border-[#0000007b] text-[#070e17] rounded-md placeholder-[#070e17]"
            style={{ fontFamily: 'Anta' }}
          />
        </div>
        {showExtendedContent && (
          <>

              <div className="flex justify-between w-full">
                <div className="flex-1 mx-2" style={{ fontFamily: "Anta" }}>
                  <ReactDatePicker
                    name="Date"
                    selected={searchParams.departureDate}
                    onChange={handleDateChange}
                    monthsShown={2}
                    className="w-full p-4 border-2 bg-[#edebebe7] text-[#070e17] rounded-md border-2:"
                    style={{ fontFamily: "Anta" }}
                  />
                </div>
                <div className="flex-1 mx-2" style={{ fontFamily: "Anta" }}>
                  <select
                    name="class"
                    value={searchParams.class}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 bg-[#edebebe7] border-0 text-[#070e17]"
                    style={{ fontFamily: "Anta" }}
                  >
                    <option value="" disabled>
                      Class
                    </option>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="firstClass">First Class</option>
                  </select>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex-1 mx-2">
                    <label
                      className="block mb-2 text-[#070e17]"
                      style={{ fontFamily: "Anta" }}
                    >
                      Adults
                    </label>
                    <div className="flex items-center bg-[#070e17] rounded-md">
                      <button
                        type="button"
                        onClick={() =>
                          setSearchParams((prev) => ({
                            ...prev,
                            adults: prev.adults > 0 ? prev.adults - 1 : 0,
                          }))
                        }
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={`${searchParams.adults} Adult${
                          searchParams.adults > 1 ? "s" : ""
                        }`}
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                        readOnly
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setSearchParams((prev) => ({
                            ...prev,
                            adults: prev.adults + 1,
                          }))
                        }
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 mx-2">
                    <label
                      className="block mb-2 text-[#070e17]"
                      style={{ fontFamily: "Anta" }}
                    >
                      Children
                    </label>
                    <div className="flex items-center bg-[#070e17] rounded-md">
                      <button
                        type="button"
                        onClick={() =>
                          setSearchParams((prev) => ({
                            ...prev,
                            children: prev.children > 0 ? prev.children - 1 : 0,
                          }))
                        }
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={`${searchParams.children} Child${
                          searchParams.children > 1 ? "ren" : ""
                        }`}
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                        readOnly
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setSearchParams((prev) => ({
                            ...prev,
                            children: prev.children + 1,
                          }))
                        }
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
              <button
                type="submit"
                className="w-full p-4 border-2 bg-[#f7f7f7] text-[#000000] font-bold rounded-md hover:bg-[#cad9edb4]"
                style={{ fontFamily: "Anta" }}
              >
                Search Flights
              </button>
              </>
        )}
            </form>
          </div>
        </div>
      </main>

      <div className="ml-16 lg:ml-15 ">
        <h2
          className="text-black text-lg lg:text-xl font-bold tracking-wide"
          style={{ fontFamily: "Anta", paddingLeft: "0px" }}
        >
          Trending From Chennai <FaMapMarkerAlt className="mr-2" />
        </h2>
        <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
      </div>

      <div className="relative flex flex-col items-start justify-center mt-20 ml-4 lg:ml-2">
        <h2
          className="text-[#070e17] text-lg lg:text-xl font-bold tracking-wide mb-4 ml-8 lg:ml-16"
          style={{ fontFamily: "Anta" }}
        >
          Book Your Tickets Now!!
        </h2>
        <div className="flex items-center justify-center w-full">
          <button
            onClick={goToPreviousImage}
            className="absolute left-4 z-10 bg-white p-1 rounded-full shadow-lg hover:bg-gray-200 transition duration-150 ease-in-out"
            style={{ width: "50px", height: "50px" }}
          >
            <img
              src={leftArrow}
              alt="Previous"
              className="w-full h-full object-contain"
            />
          </button>
          <div className="max-w-screen-lg max-h-[500px] w-full h-full overflow-hidden rounded-lg shadow-xl">
            <img
              src={items[currentImageIndex]}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={goToNextImage}
            className="absolute right-4 z-10 bg-white p-1 rounded-full shadow-lg hover:bg-gray-200 transition duration-150 ease-in-out"
            style={{ width: "50px", height: "50px" }}
          >
            <img
              src={rightArrow}
              alt="Next"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
