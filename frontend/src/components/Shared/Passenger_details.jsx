import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCheckSquare,
  FaRegSquare,
  FaMinusCircle,
  FaPlusCircle,
} from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import {useNavigate,useLocation} from 'react-router-dom';
import axios from "axios";

const PassengerDetail = ({}) => {

  const [departure,setDeparture] = useState();
  const [destination,setDestination] = useState();
  const location = useLocation();
  const searchParams = location.state?.searchParams;
  const flight = location.state?.flight;

  useEffect(()=>{

    const fetchDeparture = async (e) => {
      const res = await axios.get(
        "http://localhost:4451/api/airport/getAirportName",
        {
          params: {
            airportID: flight.startDestination,
            
          },
        }
      );
      setDeparture(res.data[0].airportName);
    };

    const fetchDestination = async (e) => {
      const res = await axios.get(
        "http://localhost:4451/api/airport/getAirportName",
        {
          params: {
            airportID:flight.endDestination,
            
          },
        }
      );
      setDestination(res.data[0].airportName);
    };

    fetchDeparture();
    fetchDestination();

    console.log(departure);
  },[flight.startDestination, flight.endDestination])

  const initialPassengerState = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    noFirstName: false,
    under18: false,
    travellingForBusiness: false,
  };

  const classPricing = {
    "Economy": 3000, 
    "Business-Class": 8000, 
    "First-Class": 15000, 
  };
  
 
  function getPriceByClass(flightClass) {
    return classPricing[flightClass] || 0;
  }


  const price = getPriceByClass(flight.classs);
  const [passengers, setPassengers] = useState([{ ...initialPassengerState }]);
  const [formErrors, setFormErrors] = useState([{}]);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  
  const handleValidation = () => {
    const newErrors = passengers.map((passenger) => {
      let errors = {};
      if (!passenger.firstName) {
        errors.firstName = "First name cannot be empty";
      }
      if (!passenger.email) {
        errors.email = "Email cannot be empty";
      } else if (passenger.email !== passenger.confirmEmail) {
        errors.confirmEmail = "Emails do not match";
      }
      return errors;
    });

    setFormErrors(newErrors);
    return !newErrors.some((error) => Object.keys(error).length !== 0);
  };
  const [agreeTerms, setAgreeTerms] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("Form is valid, proceed to next page...");
    } else {
      console.log("Form has errors.");
    }
  };
  const toggleTermsDialog = () => {
    setIsTermsOpen(!isTermsOpen); // Toggle the visibility state
  };
 
  const totalFare = searchParams.adults * price + searchParams.children * (price/2);

  const addPassenger = () => {
    setPassengers([...passengers, { ...initialPassengerState }]);
    setFormErrors([...formErrors, {}]);
  };
  const navigate = useNavigate();

  const removePassenger = (index) => {
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(index, 1);
    setPassengers(updatedPassengers);

    const updatedErrors = [...formErrors];
    updatedErrors.splice(index, 1);
    setFormErrors(updatedErrors);
  };

  const handlePayment=()=>{
    navigate('/payment')
  }
  
  

  const formattedDate = searchParams.departureDate.toLocaleDateString();

  const handleChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [name]: type === 'checkbox' ? checked : value,
    };
    setPassengers(updatedPassengers);
  };


  return (
    <div
      className="max-w-7xl mx-auto py-8 px-4 bg-gray-50"
      style={{ fontFamily: "Anta" }}
    >
      <header className="bg-gray-200 p-4 rounded-lg border border-gray-400">
        <h2 className="text-xl font-bold">
          {searchParams.departure} - {searchParams.destination} • Adult : {searchParams.adults} • Children : {searchParams.children}
        </h2>
        <p>One way</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              {formattedDate}
            </p>
            <p>{departure}</p>
          </div>
          <div>
            <p>
              {formattedDate}
            </p>
            <p>{destination}</p>
          </div>
        </div>
        <div className="mt-4">
          <p>Total fare:  Adult : {searchParams.adults} • Children : {searchParams.children}</p>
          <p className="font-bold">INR {totalFare}</p>
          <p className="text-sm">
            Total fare includes discounts, taxes, and surcharges
          </p>
        </div>
      </header>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        {passengers.map((passenger, index) => (
          <fieldset
            key={index}
            className={`border p-4 rounded-lg ${
              formErrors[index] && Object.keys(formErrors[index]).length > 0
                ? "border-red-500 bg-red-50"
                : "border-gray-400 bg-white"
            }`}
          >
            <legend className="text-lg font-semibold mb-2">
              Passenger {index + 1} - Adult
            </legend>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label htmlFor={`title${index}`} className="font-medium">
                  Title
                </label>
                <select
                  id={`title${index}`}
                  name={`title${index}`}
                  className="p-2 border rounded"
                >
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor={`firstName${index}`} className="font-medium">
                  First/Given name (as in passport)
                </label>
                <input
                  type="text"
                  id={`firstName${index}`}
                  name={"firstName"}
                  value={passenger.firstName}
                  onChange={(e) => handleChange(index, e)}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor={`lastName${index}`} className="font-medium">
                  Last/Family name (as in passport)
                </label>
                <input
                  type="text"
                  id={`lastName${index}`}
                  name={"lastName"}
                  value={passenger.lastName}
                  onChange={(e) => handleChange(index, e)}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col col-span-3">
                <label
                  htmlFor={`email${index}`}
                  className="flex items-center font-medium"
                >
                  <FaEnvelope className="mr-2" />
                  Email address
                </label>
                <input
                  type="email"
                  id={`email${index}`}
                  name={"email"}
                  value={passenger.email}
                  onChange={(e) => handleChange(index, e)}
                  className="p-2 border rounded"
                />
                {formErrors[index] && formErrors[index].email && (
                  <p className="text-red-500 text-sm">
                    {formErrors[index].email}
                  </p>
                )}
              </div>
              <div className="flex flex-col col-span-3">
                <label
                  htmlFor={`phone${index}`}
                  className="flex items-center font-medium"
                >
                  <FaPhone className="mr-2" />
                  Phone number
                </label>
                <input
                  type="tel"
                  id={`phone${index}`}
                  name={"phone"}
                  value={passenger.phone}
                  onChange={(e) => handleChange(index, e)}
                  className="p-2 border rounded"
                />
              </div>
              <div className="col-span-3">
                <input
                  id={`noFirstName${index}`}
                  type="checkbox"
                  name="noFirstName"
                  checked={passenger.noFirstName}
                  onChange={(e) => handleChange(index, e)}
                  className="mr-2"
                />
                <label htmlFor={`noFirstName${index}`} className="font-medium">
                  I do not have a first/given name in my passport
                </label>
              </div>
              <div className="col-span-3">
                <input
                  id={`under18${index}`}
                  type="checkbox"
                  name={"under18"}
                  checked={passenger.under18}
                  onChange={(e) => handleChange(index, e)}
                  className="mr-2"
                />
                <label htmlFor={`under18${index}`} className="font-medium">
                  I am under 18 years old
                </label>
              </div>
              <div className="col-span-3">
                <input
                  id={`travellingForBusiness${index}`}
                  type="checkbox"
                  name="travellingForBusiness"
                  checked={passenger.travellingForBusiness}
                  onChange={(e) => handleChange(index, e)}
                  className="mr-2"
                />
                <label
                  htmlFor={`travellingForBusiness${index}`}
                  className="font-medium"
                >
                  I am travelling on behalf of a GST-registered business
                </label>
              </div>
            </div>
            {passengers.length > 1 && (
              <button
                type="button"
                onClick={() => removePassenger(index)}
                className="text-red-500 hover:text-red-700 transition duration-150"
              >
                <FaMinusCircle className="inline mr-1" />
                Remove Passenger
              </button>
            )}
          </fieldset>
        ))}
        <button
          type="button"
          onClick={addPassenger}
          className="text-blue-500 hover:text-blue-700 transition duration-150"
        >
          <FaPlusCircle className="inline mr-1" />
          Add Another Passenger
        </button>
        <div>
          <input
            type="checkbox"
            checked={agreeTerms} // Assume agreeTerms is another state variable you have
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <label>I agree to the terms and conditions</label>
          <button type="button" onClick={toggleTermsDialog}>
            View Terms
          </button>
        </div>

        <div className="flex justify-end mt-4">
          <button
          onClick={handlePayment}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
      <Transition show={isTermsOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsTermsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Terms and Conditions
                </Dialog.Title>
                <div>
                  <h1>Terms and Conditions</h1>
                  <p>
                    <strong>Baggage Allowance:</strong> Each passenger is
                    allowed 23kg of checked luggage and one piece of hand
                    luggage not exceeding 7kg. Additional charges apply for
                    excess weight.
                  </p>
                  <p>
                    <strong>Hand Luggage:</strong> Hand luggage must fit under
                    the seat in front of you or in an overhead bin. Restrictions
                    apply to liquids, which must be in containers of no more
                    than 100ml.
                  </p>
                  <p>
                    <strong>Food and Beverages:</strong> Complimentary meals and
                    beverages are provided on all international flights. Special
                    meals are available upon request 48 hours before departure.
                  </p>
                  <p>
                    <strong>Payments and Refunds:</strong> We accept all major
                    credit cards. Refunds and cancellations are subject to our
                    refund policy, detailed on our website and available upon
                    booking.
                  </p>
                  <p>
                    <strong>Ticketing:</strong> Tickets can be booked online,
                    via phone, or through authorized agents. Electronic tickets
                    are issued by email and must be presented at check-in.
                  </p>
                  <p>
                    <strong>Airport Rules:</strong> Passengers must check in at
                    least 2 hours before departure for all flights. Security
                    procedures are strictly enforced.
                  </p>
                  <p>
                    <strong>Prohibited Items:</strong> Items such as explosives,
                    compressed gases, oxidizing materials, and poisonous
                    substances are prohibited.
                  </p>
                  <p>
                    <strong>Conduct on Board:</strong> Respectful behavior is
                    expected of all passengers. Smoking is not permitted on any
                    of our flights.
                  </p>
                  <p>
                    <strong>Special Assistance:</strong> Please inform us at the
                    time of booking if you require wheelchair access or any
                    other special assistance.
                  </p>
                  <p>
                    <strong>Legal Compliance:</strong> Passengers are
                    responsible for obtaining all required travel documents and
                    visas and must comply with the laws of the countries they
                    are entering.
                  </p>
                  <button onClick={toggleTermsDialog}>Close</button>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsTermsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PassengerDetail;
