import React from "react";

function Footer() {
  return (
    <footer
      className="bg-[#070e17] h-[10%] text-white p-4 rounded-t-3xl mt-1.5 w-full"
      style={{ fontFamily: "Anta" }}
    >
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

        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold text-2xl mb-4">Top Countries</h3>
          <ul>
            <li>Indonesia</li>
            <li>Australia</li>
            <li>United States of America</li>
            <li>New Zealand</li>
          </ul>
        </div>

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
  );
}

export default Footer;
