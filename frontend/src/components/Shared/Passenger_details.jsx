import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const PassengerDetail = ({
  departureCity = 'Hyderabad',
  arrivalCity = 'Mumbai',
  departureDate = '13 June 2024',
  departureTime = '16:00',
  arrivalDate = '13 June 2024',
  arrivalTime = '20:20',
  totalFare = '34,358'
}) => {
  const initialPassengerState = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    noFirstName: false,
    under18: false,
    travellingForBusiness: false,
  };

  const [passengers, setPassengers] = useState([{ ...initialPassengerState }]);
  const [formErrors, setFormErrors] = useState([{}]);

  const handleValidation = () => {
    const newErrors = passengers.map(passenger => {
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
    return !newErrors.some(error => Object.keys(error).length !== 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("Form is valid, proceed to next page...");
      // Proceed with form submission or navigation
    } else {
      console.log("Form has errors.");
    }
  };

  const handleChange = (index, e) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setPassengers(updatedPassengers);
  };

  const addPassenger = () => {
    setPassengers([...passengers, { ...initialPassengerState }]);
    setFormErrors([...formErrors, {}]);
  };

  const removePassenger = (index) => {
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(index, 1);
    setPassengers(updatedPassengers);

    const updatedErrors = [...formErrors];
    updatedErrors.splice(index, 1);
    setFormErrors(updatedErrors);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 bg-gray-50" style={{ fontFamily: "Anta" }}>
      <header className="bg-gray-200 p-4 rounded-lg border border-gray-400">
        <h2 className="text-xl font-bold">{departureCity} - {arrivalCity} • 1 Adult</h2>
        <p>One way</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>{departureDate} ({departureTime})</p>
            <p>{departureCity}</p>
          </div>
          <div>
            <p>{arrivalDate} ({arrivalTime})</p>
            <p>{arrivalCity}</p>
          </div>
        </div>
        <div className="mt-4">
          <p>Total fare: 1 ADULT</p>
          <p className="font-bold">INR {totalFare}</p>
          <p className="text-sm">Total fare includes discounts, taxes, and surcharges</p>
        </div>
      </header>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
  {passengers.map((passenger, index) => (
    <fieldset key={index} className={`border p-4 rounded-lg ${formErrors[index] && Object.keys(formErrors[index]).length > 0 ? 'border-red-500 bg-red-50' : 'border-gray-400 bg-white'}`}>
      <legend className="text-lg font-semibold mb-2">Passenger {index + 1} - Adult</legend>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label htmlFor={`title${index}`} className="font-medium">Title</label>
          <select id={`title${index}`} name={`title${index}`} className="p-2 border rounded">
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor={`firstName${index}`} className="font-medium">First/Given name (as in passport)</label>
          <input
            type="text"
            id={`firstName${index}`}
            name={`firstName${index}`}
            value={passenger.firstName}
            onChange={(e) => handleChange(index, e)}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={`lastName${index}`} className="font-medium">Last/Family name (as in passport)</label>
          <input
            type="text"
            id={`lastName${index}`}
            name={`lastName${index}`}
            value={passenger.lastName}
            onChange={(e) => handleChange(index, e)}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label htmlFor={`email${index}`} className="flex items-center font-medium"><FaEnvelope className="mr-2" />Email address</label>
          <input
            type="email"
            id={`email${index}`}
            name={`email${index}`}
            value={passenger.email}
            onChange={(e) => handleChange(index, e)}
            className="p-2 border rounded"
          />
          {formErrors[index] && formErrors[index].email && (
            <p className="text-red-500 text-sm">{formErrors[index].email}</p>
          )}
        </div>
        <div className="flex flex-col col-span-3">
          <label htmlFor={`phone${index}`} className="flex items-center font-medium"><FaPhone className="mr-2" />Phone number</label>
          <input
            type="tel"
            id={`phone${index}`}
            name={`phone${index}`}
            value={passenger.phone}
            onChange={(e) => handleChange(index, e)}
            className="p-2 border rounded"
          />
        </div>
        <div className="col-span-3">
          <input
            id={`noFirstName${index}`}
            type="checkbox"
            checked={passenger.noFirstName}
            onChange={(e) => handleChange(index, e)}
            className="mr-2"
          />
          <label htmlFor={`noFirstName${index}`} className="font-medium">I do not have a first/given name in my passport</label>
        </div>
        <div className="col-span-3">
          <input
            id={`under18${index}`}
            type="checkbox"
            checked={passenger.under18}
            onChange={(e) => handleChange(index, e)}
            className="mr-2"
          />
          <label htmlFor={`under18${index}`} className="font-medium">I am under 18 years old</label>
        </div>
        <div className="col-span-3">
          <input
            id={`travellingForBusiness${index}`}
            type="checkbox"
            checked={passenger.travellingForBusiness}
            onChange={(e) => handleChange(index, e)}
            className="mr-2"
          />
          <label htmlFor={`travellingForBusiness${index}`} className="font-medium">I am travelling on behalf of a GST-registered business</label>
        </div>
      </div>
      {passengers.length > 1 && (
        <button type="button" onClick={() => removePassenger(index)} className="text-red-500 hover:text-red-700 transition duration-150">
          <FaMinusCircle className="inline mr-1"/>Remove Passenger
        </button>
      )}
    </fieldset>
  ))}
  <button type="button" onClick={addPassenger} className="text-blue-500 hover:text-blue-700 transition duration-150">
    <FaPlusCircle className="inline mr-1"/>Add Another Passenger
  </button>

  <div className="flex justify-end mt-4">
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Select Seat
    </button>
  </div>
</form>

    </div>
  );
};

export default PassengerDetail;
