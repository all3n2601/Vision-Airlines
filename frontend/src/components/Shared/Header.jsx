import React from 'react'
import logo from "../../assets/logo 2.png";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-[#0e1a2a] text-white" >
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
  )
}

export default Header