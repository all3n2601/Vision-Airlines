import React, { useState } from 'react';
import { FaPlaneDeparture, FaInfoCircle, FaDownload } from 'react-icons/fa';
import QRCode from 'qrcode.react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Disclosure, Transition } from '@headlessui/react';

const VisionAirlinesCheckIn = () => {
    const [bookingNumber, setBookingNumber] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkInConfirmed, setCheckInConfirmed] = useState(false);
    const [bookingError, setBookingError] = useState(false);
    const [boardingPass, setBoardingPass] = useState(null);

    const sampleBookings = {
        '1234567890123': { name: "John Doe", from: "New York", to: "London", departureTime: "18:00", boardingTime: "17:15", gate: "23A", class: "Economy", eNumber: "E001", seat: "21C", date: "2024-06-13", flightNumber: "VA123" },
        '9876543210987': { name: "Jane Smith", from: "Los Angeles", to: "Tokyo", departureTime: "11:00", boardingTime: "10:20", gate: "45B", class: "Business", eNumber: "B034", seat: "14A", date: "2024-06-15", flightNumber: "VA789" }
    };

    const handleCheckIn = () => {
        if (sampleBookings[bookingNumber] && sampleBookings[bookingNumber].name.toLowerCase().includes(lastName.toLowerCase())) {
            setBoardingPass(sampleBookings[bookingNumber]);
            setBookingError(false);
        } else {
            setBoardingPass(null);
            setBookingError(true);
        }
    };

    const handleDownload = () => {
        const input = document.getElementById('boarding-pass');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf");
        });
    };

    return (
        <div className="flex max-w-8xl mx-auto shadow-lg rounded-lg overflow-hidden" style={{ fontFamily: "Anta" }}>
            <div className="w-3/4 p-4 bg-white">
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold text-blue-800">Vision Airlines Check-In</h1>
                    <FaPlaneDeparture className="mx-auto text-blue-500 text-6xl"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="bookingNumber" className="block text-sm font-medium text-gray-700">Booking Number (13 digits)</label>
                    <input
                        type="text"
                        id="bookingNumber"
                        value={bookingNumber}
                        onChange={(e) => setBookingNumber(e.target.value)}
                        className="mt-1 p-2 w-full border border-blue-300 rounded-md shadow-sm"
                        placeholder="Enter your booking number"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-1 p-2 w-full border border-blue-300 rounded-md shadow-sm"
                        placeholder="Enter your last name"
                    />
                </div>
                <button onClick={handleCheckIn} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Check In
                </button>
                {bookingError && <p className="text-red-500 text-sm text-center mt-2">Invalid booking number or last name.</p>}
                {boardingPass && (
                    <div id="boarding-pass" className="p-4 mt-4 border border-blue-300 rounded-md bg-blue-50">
                        <h2 className="text-lg font-bold">Boarding Details</h2>
                        <p>Name: {boardingPass.name}</p>
                        <p>From: {boardingPass.from}</p>
                        <p>To: {boardingPass.to}</p>
                        <p>Departure Time: {boardingPass.departureTime}</p>
                        <p>Boarding Time: {boardingPass.boardingTime}</p>
                        <p>Gate: {boardingPass.gate}</p>
                        <p>Class: {boardingPass.class}</p>
                        <p>Seat: {boardingPass.seat}</p>
                        <p>Date: {boardingPass.date}</p>
                        <p>Flight Number: {boardingPass.flightNumber}</p>
                        <div>
                            <QRCode value="https://example.com" />
                        </div>
                        <div className="flex items-center mt-4">
                            <input
                                type="checkbox"
                                checked={checkInConfirmed}
                                onChange={(e) => setCheckInConfirmed(e.target.checked)}
                                className="mr-2"
                            />
                            <label>I confirm my check-in</label>
                        </div>
                        <button onClick={handleDownload} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <FaDownload className="mr-2" />Download Boarding Pass
                        </button>
                    </div>
                )}
            </div>
            <div className="w-1/4 bg-gradient-to-b from-blue-500 to-blue-800 p-4 text-white">
                <h2 className="text-lg font-bold mb-2">Travel Information</h2>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Baggage and Customs</span>
                                <FaInfoCircle className={`${open ? 'transform rotate-180' : ''} w-5 h-5`} />
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-100">
                                    <p>Check your baggage allowance and learn about the items you can carry in your luggage. Be sure to declare items as required by customs.</p>
                                    <ul className="list-disc pl-5">
                                        <li>Economy class allows up to 23 kg on some routes.</li>
                                        <li>Business class passengers may carry two pieces up to 32 kg each.</li>
                                        <li>Do not carry liquids over 100ml in your carry-on.</li>
                                        <li>Check size limits for carry-on bags on the airline website.</li>
                                    </ul>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Check-In and Boarding</span>
                                <FaInfoCircle className={`${open ? 'transform rotate-180' : ''} w-5 h-5`} />
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-100">
                                    <p>Mind personal space and be courteous at the airport. Patience is essential during check-in and security processes.</p>
                                    <ul className="list-disc pl-5">
                                        <li>Confirm your check-in and boarding times.</li>
                                        <li>Follow airport rules and be respectful to staff.</li>
                                        <li>Ensure your carry-on does not exceed weight limits.</li>
                                    </ul>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Airport Check-in</span>
                                <FaInfoCircle className={`${open ? 'transform rotate-180' : ''} w-5 h-5`} />
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-100">
                                    <p>Mind personal space and be courteous at the airport. Patience is essential during check-in and security processes.</p>
                                    <ul className="list-disc pl-5">
                                        <li>ID Verification: Upon reaching the airport, you need to show ID. Officials at the counter will check the documents.</li>
                                        <li>Collect Boarding Pass: After verification, you will be issued a boarding pass with flight details like flight number, seat number, and scheduled departure time. Make sure to secure the boarding pass along with your travel documents.</li>
                                    </ul>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Immigration and Customs</span>
                                <FaInfoCircle className={`${open ? 'transform rotate-180' : ''} w-5 h-5`} />
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-100">
                                    <ul className="list-disc pl-5">
                                        <li>For an International flight, you need to undergo Customs and Immigration checks. Ensure you have all the necessary travel documents (Passport and VISA) and state the reason for your travel to the officials if asked.</li>
                                        <li>Ensure you do not have any contraband items which are against the law. Always read the list of allowed/banned items on the airline's website.</li>
                                        <li>Some countries you travel to might require you to carry local currency. So, read the destination country policies and make the necessary arrangements accordingly.</li>
                                    </ul>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default VisionAirlinesCheckIn;
