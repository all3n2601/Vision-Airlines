import React, { useState } from 'react';
import { FaPlaneDeparture, FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import  QRCode  from 'qrcode.react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Vision Airlines Check-In</h1>
            <div className="mb-4">
                <label htmlFor="bookingNumber" className="block text-sm font-medium text-gray-700">Booking Number (13 digits)</label>
                <input
                    type="text"
                    id="bookingNumber"
                    value={bookingNumber}
                    onChange={(e) => setBookingNumber(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div className="flex items-center justify-between mb-4">
                <button onClick={handleCheckIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Check In
                </button>
                {bookingError && <p className="text-red-500 text-sm">Invalid booking number or last name.</p>}
            </div>
            {boardingPass && (
                <div id="boarding-pass" className="p-4 border border-gray-300 rounded-md">
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
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={checkInConfirmed}
                            onChange={(e) => setCheckInConfirmed(e.target.checked)}
                            className="mr-2"
                        />
                        <label>I confirm my check-in</label>
                    </div>
                    <button onClick={handleDownload} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Download Boarding Pass
                    </button>
                </div>
            )}
        </div>
    );
};

export default VisionAirlinesCheckIn;
