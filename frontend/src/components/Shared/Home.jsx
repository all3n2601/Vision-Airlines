import React, { useState, useEffect, useRef } from "react";
import Card from "./city_card.jsx";
import { FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import bck from "../../assets/bck.jpeg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.webp";
import c1 from "../../assets/lonodn.jpg";
import c2 from "../../assets/melborne.jpg";
import c3 from "../../assets/paris.avif";
import c4 from "../../assets/rome.jpg";
import c5 from "../../assets/singapore.jpg";
import c6 from "../../assets/sydney.jpg";
import c7 from "../../assets/bali.avif";
import c8 from "../../assets/brisbane.avif";
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../components/Shared/Header";
const items = [img1, img2, img3];

function Home() {
  const [searchParams, setSearchParams] = useState({
    departure: "",
    destination: "",
    departureDate: new Date(),
    class: "",
    adults: 1,
    children: 0,
  });
  
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({ ...prevParams, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchParams);
    // Implement your submission logic here
  };

  const [showExtendedContent, setShowExtendedContent] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowExtendedContent(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);
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

  

  return (
    <>
      <div className="bg-[#f9f9f9] text-black min-h-screen snap-y snap-mandatory overflow-hidden">
      <div className="relative min-h-screen snap-start">
        <img src={bck} alt="Background" className="w-full object-cover" style={{ height: '90vh' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl p-5 bg-white bg-opacity-90 rounded-lg shadow">
          <h2 className="text-center text-2xl font-bold mb-5">Hi, where would you like to go?</h2>
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  id="departure"
                  name="departure"
                  value={searchParams.departure}
                  onChange={handleInputChange}
                  onFocus={() => setShowExtendedContent(true)} // Show extended content when input is focused
                  placeholder="Departure"
                  className="flex-1 mx-2 p-2 bg-[#f8f8f886] border-2 border-[#0000007b] text-[#070e17] rounded-md placeholder-[#070e17]"
                  style={{ fontFamily: 'Anta' }} />
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={searchParams.destination}
                  onChange={handleInputChange}
                  onFocus={() => setShowExtendedContent(true)} // Show extended content when input is focused
                  placeholder="Destination"
                  className="flex-1 mx-2 p-2 bg-[#f8f8f886] border-2 border-[#0000007b] text-[#070e17] rounded-md placeholder-[#070e17]"
                  style={{ fontFamily: 'Anta' }} />
              </div>
              {showExtendedContent && (
                <><div className="flex items-center justify-between w-full space-x-4">
                <div className="w-2/6">
                  <ReactDatePicker
                    selected={searchParams.departureDate}
                    onChange={(date) => setSearchParams(prevParams => ({ ...prevParams, departureDate: date }))}
                    monthsShown={2}
                    className="w-full p-4 border-2 bg-[#edebebe7] text-[#070e17] rounded-md"
                    style={{ fontFamily: "Anta" }}
                  />
                </div>
                <div className="w-4/6"> 
                  <select
                    name="class"
                    value={searchParams.class}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 bg-[#edebebe7] text-[#070e17] rounded-md"
                    style={{ fontFamily: "Anta" }}
                  >
                    <option value="">Select Class</option>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="firstClass">First Class</option>
                  </select>
                </div>
              </div>
              
                  <div className="flex justify-between">
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
                          onClick={() => setSearchParams((prev) => ({
                            ...prev,
                            adults: prev.adults > 0 ? prev.adults - 1 : 0,
                          }))}
                          className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={`${searchParams.adults} Adult${searchParams.adults > 1 ? "s" : ""}`}
                          className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                          readOnly />

                        <button
                          type="button"
                          onClick={() => setSearchParams((prev) => ({
                            ...prev,
                            adults: prev.adults + 1,
                          }))}
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
                          onClick={() => setSearchParams((prev) => ({
                            ...prev,
                            children: prev.children > 0 ? prev.children - 1 : 0,
                          }))}
                          className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={`${searchParams.children} Child${searchParams.children > 1 ? "ren" : ""}`}
                          className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                          readOnly />

                        <button
                          type="button"
                          onClick={() => setSearchParams((prev) => ({
                            ...prev,
                            children: prev.children + 1,
                          }))}
                          className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </>)}
              <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Search Flights</button>
          </form>
        </div>
      </div>
    </div>
    <div className="snap-start p-8 bg-white">
        <h2 className="text-lg lg:text-xl font-bold tracking-wide ml-4">Trending From Chennai <FaMapMarkerAlt className="inline ml-2" /></h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardData.map((card, index) => <Card key={index} {...card} />)}
        </div>
      </div><div className="snap-start flex items-center justify-center p-8 bg-white">
        <div className="relative flex flex-col items-start justify-center mt-20 lg:ml-2">
          <h2 className="flex items-center text-black text-lg lg:text-xl font-bold tracking-wide m-4 ml-8 lg:ml-16" style={{ fontFamily: "Anta", paddingLeft: "0px", paddingTop: "0px" }}>
            Travell with Vision Airline's..
          </h2>

          <div className="flex items-center justify-center w-full">
            <button
              onClick={goToPreviousImage}
              className="absolute left-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-150 ease-in-out w-12 h-12"
            >
              <img
                src={leftArrow}
                alt="Previous"
                className="  h-full object-contain" />
            </button>
            <div className="max-w-screen-lg max-h-[500px] w-full h-full overflow-hidden rounded-lg shadow-xl">
              <img
                src={items[currentImageIndex]}
                alt="Gallery"
                className="w-full h-full object-cover" />
            </div>
            <button
              onClick={goToNextImage}
              className="absolute right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-150 ease-in-out w-12 h-12"
            >
              <img
                src={rightArrow}
                alt="Next"
                className="w-full h-full object-contain" />
            </button>

          </div>
        </div>
      </div>
    </div></>
  );
}
export default Home;
