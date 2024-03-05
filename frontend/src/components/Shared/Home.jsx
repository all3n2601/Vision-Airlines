import React, { useState } from 'react';
import logo from '../../assets/logo.png'; 
import bck from '../../assets/flight.jpg';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.webp';
import c1 from '../../assets/c (1).jpeg';
import c2 from '../../assets/c (2).jpeg';
import c3 from '../../assets/c (3).jpeg';
import c4 from '../../assets/c (4).jpeg';
import c5 from '../../assets/c (5).jpeg';
import c6 from '../../assets/c (6).jpeg';
import leftArrow from '../../assets/left.png'; 
import rightArrow from '../../assets/right.png';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const items = [img2,img1,img3];


function Home() {
  const [searchParams, setSearchParams] = useState({
    departure: '',
    destination: '',
    departureDate: new Date(), 
    returnDate: '',
    class: '',
    passengers: 1, 
    adults: 1,
    children: 0,
  });
  
  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value,
    }));
  };
  const incrementPassengers = () => {
    setSearchParams(prevParams => ({
      ...prevParams,
      passengers: prevParams.passengers < 9 ? prevParams.passengers + 1 : 9,
    }));
  };
  const decrementPassengers = () => {
    setSearchParams(prevParams => ({
      ...prevParams,
      passengers: prevParams.passengers > 1 ? prevParams.passengers - 1 : 1,
    }));
  };
  const handleDateChange = (date) => {
    setSearchParams({ ...searchParams, departureDate: date });
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : items.length - 1);
  };
  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex < items.length - 1 ? prevIndex + 1 : 0);
  };

  const customDatePickerStyle = {
    className: "text-center bg-[#fdfdfd67] text-yellow-500 rounded-md border border-yellow-500",
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchParams);
  };

  
  return (
    <div className=" bg-[#f9f9f9] text-black min-h-screen">
      <header className="flex justify-between items-center p-5 bg-[#070e17] text-white" >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-24 mr-12" />
          <nav className="flex">
            <a href="#plantrip" className="mr-4 hover:underline" style={{fontFamily:'Anta'}}>Plan Trip</a>
            <a href="#travelinfo" className="mr-4 hover:underline"style={{fontFamily:'Anta'}}>Travel Info</a>
            <a href="#boardingpass" className="mr-4 hover:underline" style={{fontFamily:'Anta'}}>Boarding Pass</a>
            <a href="#visainquiry" className="mr-4 hover:underline" style={{fontFamily:'Anta'}}>Visa Enquiry</a>
          </nav>
        </div>
        <a href="#login" className="hover:underline" style={{fontFamily:'Anta'}}>Login/Sign In</a>
      </header>
      <main className="relative">
        <div className="relative min-h-screen" style={{ paddingLeft: '0%' }}>
          <img src={bck} alt="Background" className="w-full h-[90vh] object-cover" />
          <div className="absolute top-[90%] left-20% w-full max-w-[80%] p-5 bg-[#fdfdfd67] text-[#0d0d0d] rounded-lg transform translate-x-[13%] -translate-y-[50%]">
            <h2 className="text-center text-2xl font-bold mb-5" style={{fontFamily:'Anta'}}>Hi, where would you like to go?</h2>
            <div className="h-1 bg-[#070e17] my-10 mx-14"></div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-5">
              <div className="flex justify-between w-full">
                <input
                  type="text"
                  id="departure"
                  name="departure"
                  value={searchParams.departure}
                  onChange={handleInputChange}
                  placeholder="Departure"
                  className="flex-1 mx-2 p-2 bg-[#f8f8f886] border-[#0000007b] text-[#070e17] rounded-md placeholder-[#070e17] " style={{fontFamily: 'Anta'}}></input>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={searchParams.destination}
                  onChange={handleInputChange}
                  placeholder="Destination"
                  className="flex-1 mx-2 p-2 bg-[#f8f8f886] border-[#0000007b] text-[#070e17] rounded-md placeholder-[#070e17] " style={{fontFamily: 'Anta'}}/>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex-1 mx-2" style={{fontFamily:'Anta'}}>
                  <ReactDatePicker
                    name="Date"
                    selected={searchParams.departureDate}
                    onChange={handleDateChange}
                    monthsShown={2}
                    className="w-full p-4 border-2 bg-[#edebebe7] text-[#070e17] rounded-md border-2:" style={{fontFamily:'Anta'}}/>
                </div>
                <div className="flex-1 mx-2" style={{fontFamily:'Anta'}}>
                  <select
                    name="class"
                    value={searchParams.class}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 bg-[#edebebe7] border-0 text-[#070e17]" style={{fontFamily:'Anta'}}>
                  
                    <option value="" disabled>Class</option>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="firstClass">First Class</option>
                  </select>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex-1 mx-2">
                    <label className="block mb-2 text-[#070e17]" style={{fontFamily:'Anta'}}>Adults</label>
                    <div className="flex items-center bg-[#070e17] rounded-md">
                      <button
                        type="button"
                        onClick={() => setSearchParams(prev => ({ ...prev, adults: prev.adults > 0 ? prev.adults - 1 : 0 }))}
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                      >-</button>
                      <input
                        type="text"
                        value={`${searchParams.adults} Adult${searchParams.adults > 1 ? 's' : ''}`}
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"            
                        readOnly
                      />

                      <button
                        type="button"
                        onClick={() => setSearchParams(prev => ({ ...prev, adults: prev.adults + 1 }))}
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                      >+</button>
                    </div>
                  </div>
                  <div className="flex-1 mx-2">
                    <label className="block mb-2 text-[#070e17]" style={{fontFamily:'Anta'}}>Children</label>
                    <div className="flex items-center bg-[#070e17] rounded-md">
                      <button
                        type="button"
                        onClick={() => setSearchParams(prev => ({ ...prev, children: prev.children > 0 ? prev.children - 1 : 0 }))}
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                      >-</button>
                      <input
                        type="text"
                        value={`${searchParams.children} Child${searchParams.children > 1 ? 'ren' : ''}`}
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                        readOnly
                      />

                      <button
                        type="button"
                        onClick={() => setSearchParams(prev => ({ ...prev, children: prev.children + 1 }))}
                        className="flex-1 p-2 text-center bg-[#f8f8f8f5] border-0 text-[#070e17]"
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full p-4 border-2 bg-[#f7f7f7] text-[#000000] font-bold rounded-md hover:bg-[#cad9edb4]" style={{fontFamily:'Anta'}}>
                Search Flights
              </button>
            </form>
          </div></div>
      </main>

      <div className="ml-16 lg:ml-15 pt-20">
      <h2 className="text-black text-lg lg:text-xl font-bold tracking-wide mb-8 ml-1" style={{ fontFamily: 'Anta', paddingTop: '4rem', paddingLeft: '0px'}}>
    Trending From Chennai
  </h2>
  <div className="grid grid-cols-3 gap-5"> 
    <img src={c1} alt="Destination 1" className="object-cover rounded-lg shadow-lg hover:shadow-2x2 border-2 border-[#070e17] transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: '330px', width: 'auto' }} />
    <img src={c2} alt="Destination 2" className="object-cover rounded-lg shadow-lg hover:shadow-2xl border-2 border-[#070e17] transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: '330px', width: 'auto' }} />
    <img src={c3} alt="Destination 3" className="object-cover rounded-lg shadow-lg hover:shadow-2xl border-2 border-[#070e17] transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: '330px', width: 'auto' }} />
    <img src={c4} alt="Destination 4" className="object-cover rounded-lg shadow-lg hover:shadow-2xl border-2 border-[#070e17] transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: '330px', width: 'auto' }} />
    <img src={c5} alt="Destination 5" className="object-cover rounded-lg shadow-lg hover:shadow-2xl border-2 border-[#070e17] transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: '330px', width: 'auto' }} />
    <img src={c6} alt="Destination 6" className="object-cover rounded-lg shadow-lg hover:shadow-2xl border-2 border-[#070e17] transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: '330px', width: 'auto' }} />
</div>

</div>


      <div className="relative flex flex-col items-start justify-center mt-20 ml-4 lg:ml-2">
    <h2 className="text-[#070e17] text-lg lg:text-xl font-bold tracking-wide mb-4 ml-8 lg:ml-16" style={{fontFamily:'Anta'}}>
    Book Your Tickets Now!!
  </h2>
  <div className="flex items-center justify-center w-full">
    <button
      onClick={goToPreviousImage}
      className="absolute left-4 z-10 bg-white p-1 rounded-full shadow-lg hover:bg-gray-200 transition duration-150 ease-in-out"
      style={{ width: '50px', height: '50px' }}
    >
      <img src={leftArrow} alt="Previous" className="w-full h-full object-contain"/>
    </button>
    <div className="max-w-screen-lg max-h-[500px] w-full h-full overflow-hidden rounded-lg shadow-xl">
      <img src={items[currentImageIndex]} alt="Gallery" className="w-full h-full object-cover" />
    </div>
    <button
      onClick={goToNextImage}
      className="absolute right-4 z-10 bg-white p-1 rounded-full shadow-lg hover:bg-gray-200 transition duration-150 ease-in-out"
      style={{ width: '50px', height: '50px' }}
    >
      <img src={rightArrow} alt="Next" className="w-full h-full object-contain"/>
    </button>
  </div>
  <footer className="bg-[#070e17] text-white p-8 rounded-t-3xl mt-10 w-full" style={{fontFamily:'Anta'}}>
  <div className="flex flex-wrap justify-between -mx-4 text-lg lg:text-xl">
    <div className="w-full md:w-1/4 p-4">
      <h3 className="font-bold text-2xl mb-4">Services</h3>
      <ul>
        <li>Cargo</li>
        <li>Charter Booking</li>
        <li>Group Booking</li>
        <li>Online Boarding Pass</li>
      </ul>
    </div>
    <div className="md:block bg-white-400 mx-auto" style={{ height: '70%', width: '2px' }}></div>

    <div className="w-full md:w-1/4 p-4">
      <h3 className="font-bold text-2xl mb-4">Top Destinations</h3>
      <ul>
        <li>Singapore</li>
        <li>Denpasar Bali</li>
        <li>Sydney</li>
        <li>Melbourne</li>
        <li>San Francisco</li>
      </ul>
    </div>
    <div className="md:block bg-white-400 mx-auto" style={{ height: '70%', width: '2px' }}></div>

    <div className="w-full md:w-1/4 p-4">
      <h3 className="font-bold text-2xl mb-4">Top Countries</h3>
      <ul>
        <li>Indonesia</li>
        <li>Australia</li>
        <li>United States of America</li>
        <li>New Zealand</li>
      </ul>
    </div>
    <div className="md:block bg-white-400 mx-auto" style={{ height: '70%', width: '2px' }}></div>

    <div className="w-full md:w-1/4 p-4">
      <h3 className="font-bold text-2xl mb-4">Popular Flights</h3>
      <ul>
        <li>Mumbai to Singapore</li>
        <li>Delhi to Singapore</li>
        <li>Bengaluru to Singapore</li>
        <li>Chennai to Singapore</li>
        <li>Mumbai to Denpasar Bali</li>
      </ul>
    </div>
  </div>
</footer>
</div>
</div>
  );
}
export default Home;