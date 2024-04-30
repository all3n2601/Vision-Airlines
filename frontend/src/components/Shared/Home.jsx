import React, { useState, useEffect, useRef } from "react";
import Card from "./city_card.jsx";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import bck from "../../assets/images/bck.jpeg";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.webp";
import c1 from "../../assets/images/london.jpg";
import c2 from "../../assets/images/melbourne.jpg";
import c3 from "../../assets/images/paris.avif";
import c4 from "../../assets/images/rome.jpg";
import c5 from "../../assets/images/singapore.jpg";
import c6 from "../../assets/images/sydney.jpg";
import c7 from "../../assets/images/bali.avif";
import c8 from "../../assets/images/brisbane.avif";
import leftArrow from "../../assets/images/left.png";
import rightArrow from "../../assets/images/right.png";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import black_white from "../../assets/images/logo-png-back.png";
const items = [img1, img2, img3];
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [airport, setAirports] = useState([]);

  const [searchParams, setSearchParams] = useState({
    departure: "",
    destination: "",
    departureDate: new Date(),
    class: "",
    adults: 1,
    children: 0,
  });

  const navigate = useNavigate();

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
    setSearchParams((prevParams) => ({ ...prevParams, [name]: value }));
  };

  const areRequiredFieldsFilled = () => {
    return (
      searchParams.departure &&
      searchParams.destination &&
      searchParams.class &&
      searchParams.departureDate
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (areRequiredFieldsFilled()) {
      navigate("/search-flights", {
        state: { searchParams },
      });
    }
  };


  useEffect(() => {
    const fetchAirports = async (e) => {
      const res = await axios.get(
        "http://localhost:4451/api/airport/getAirport"
      );
      setAirports(res.data);
    };

    fetchAirports();
  }, []);

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
    {
      cityName: "Melbourne",
      country: "Australia",
      price: "24,599",
      imageSrc: c2,
    },
    { cityName: "Paris", country: "France", price: "31,299", imageSrc: c3 },
    { cityName: "Rome", country: "Italy", price: "29,999", imageSrc: c4 },
    {
      cityName: "Singapore",
      country: "Singapore",
      price: "17,999",
      imageSrc: c5,
    },
    { cityName: "Sydney", country: "Australia", price: "18,000", imageSrc: c6 },
    { cityName: "Bali", country: "Indonesia", price: "14,499", imageSrc: c7 },
    { cityName: "Brisbane", country: "USA", price: "51,999", imageSrc: c8 },
  ];

  return (
    <>
      {/* <div className="bg-[#f9f9f9] text-black min-h-screen snap-y snap-mandatory "> */}
      <section className="min-h-screen relative">
        <img
          src={bck}
          alt="Background"
          className="w-full object-cover"
          style={{ height: "90vh" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl p-5 bg-white bg-opacity-90 rounded-lg shadow">
          <h2 className="text-center text-2xl font-bold mb-5">
            Hi, where would you like to go?
          </h2>
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <select
                  id="departure"
                  name="departure"
                  value={searchParams.departure}
                  onChange={handleInputChange}
                  onFocus={() => setShowExtendedContent(true)}
                  className="flex-1 mx-2 p-2 bg-[#f8f8f886] border-2 border-[#0000007b] text-[#070e17] rounded-md"
                >
                  <option value="" disabled>
                    Select Departure
                  </option>
                  {airport.map((airport, index) => (
                    <option
                      key={airport.airportID}
                      value={airport.airportID}
                    >
                      {airport.airportName}
                    </option>
                  ))}
                </select>
                <select
                  id="destination"
                  name="destination"
                  value={searchParams.destination}
                  onChange={handleInputChange}
                  onFocus={() => setShowExtendedContent(true)}
                  className="flex-1 mx-2 p-2 bg-[#f8f8f886] border-2 border-[#0000007b] text-[#070e17] rounded-md"
                >
                  <option value="" disabled>
                    Select Destination
                  </option>
                  {airport.map((airport, index) => (
                    <option key={airport.airportID} value={airport.airportID}>
                      {airport.airportName}
                    </option>
                  ))}
                </select>
              </div>
              {showExtendedContent && (
                <>
                  <div className="flex items-center justify-between w-full space-x-4">
                    <div className="w-2/6">
                      <ReactDatePicker
                        selected={searchParams.departureDate}
                        onChange={(date) =>
                          setSearchParams((prevParams) => ({
                            ...prevParams,
                            departureDate: date,
                          }))
                        }
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
                              children:
                                prev.children > 0 ? prev.children - 1 : 0,
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
                </>
              )}
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Search Flights
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen">
        <h2 className="text-lg lg:text-xl font-bold tracking-wide ml-4">
          Trending From Chennai <FaMapMarkerAlt className="inline ml-2" />
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(to bottom, #a2bcd9, #ffffff)" }}
      >
        <div className="relative flex flex-col items-start justify-center mt-1 ">
          <h2
            className="text-black text-lg lg:text-xl font-bold tracking-wide m-4 "
            style={{ fontFamily: "Anta" }}
          >
            Travel with Vision Airline's..
          </h2>
          <div
            className="w-full max-w-5xl p-4 shadow-xl overflow-hidden "
            style={{
              borderRadius: "20px",
              backgroundColor: "#e0e1e8",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="flex items-center justify-between relative p-4">
              <button
                onClick={goToPreviousImage}
                className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300 transition duration-150 ease-in-out w-12 h-12"
              >
                <img
                  src={leftArrow}
                  alt="Previous"
                  className="w-full h-full object-contain"
                />
              </button>
              <img
                src={items[currentImageIndex]}
                alt="Gallery"
                className="object-cover rounded-lg"
                style={{ height: "500px", width: "100%" }}
              />
              <button
                onClick={goToNextImage}
                className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300 transition duration-150 ease-in-out w-12 h-12"
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
      </section>

      {/* </div> */}
    </>
  );
}
export default Home;
