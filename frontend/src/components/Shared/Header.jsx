import React from 'react'
import logo from "../../assets/images/logo-png.png";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-[#0e1a2a] text-white" >
        <div className="flex items-center">
          <Link className='mr-4' to="/"><img src={logo} alt="Logo" className="h-24 mr-12" /></Link>   
                 <nav className="flex">
            <Link to="/plan-trip" className="mr-4 hover:underline" style={{fontFamily:'Anta'}}>Plan Trip </Link>
            <Link to="/contact-us" className="mr-4 hover:underline"style={{fontFamily:'Anta'}}>Contact Us </Link>
            <Link to="/check-in" className="mr-4 hover:underline" style={{fontFamily:'Anta'}}>Boarding Pass </Link>
            <Link to="/visa-inquiry" className="mr-4 hover:underline" style={{fontFamily:'Anta'}}>Visa Enquiry </Link>
            <Link to="/user-reviews" className="mr-4 hover:underline" style={{fontFamily:'Anta'}}>Reviews </Link>
          </nav>
        </div>
        <Link to="/sign-in" className="hover:underline" style={{fontFamily:'Anta'}}>Sign In/Sign Up </Link>
    </header>
  )
}

export default Header;