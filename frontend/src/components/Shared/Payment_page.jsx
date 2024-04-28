import React, { useState } from 'react';
import { TextField, Button, Typography, InputAdornment } from '@mui/material';
import { FaCreditCard, FaMoneyBillWave, FaUser, FaCalendar, FaLock } from 'react-icons/fa';
import successAnimation from '../../assets/animat-checkmark.gif';
import debitCardImage from '../../assets/debit.png'; 

const PaymentPage = () => {
    const [paymentType, setPaymentType] = useState('credit');
    const [cardDetails, setCardDetails] = useState({
        number: '',
        name: '',
        expiry: '',
        cvv: ''
    });
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        const formattedValue = name === "number" ? value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim() : value;
        setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment Details: ', cardDetails);
        setPaymentSuccess(true);
    };

    const cardBackground = paymentType === 'credit' ? "https://i.imgur.com/kGkSg1v.png" : debitCardImage;
    const colorScheme = paymentType === 'credit' ? 'bg-gradient-to-br from-blue-500 to-blue-800' : 'bg-gradient-to-br from-red-500 to-red-800';

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-center space-x-4 mb-8">
                <Button variant={paymentType === 'credit' ? "contained" : "outlined"} color="primary" onClick={() => setPaymentType('credit')}>
                    <FaCreditCard className="mr-2" /> Credit Card
                </Button>
                <Button variant={paymentType === 'debit' ? "contained" : "outlined"} color="secondary" onClick={() => setPaymentType('debit')}>
                    <FaMoneyBillWave className="mr-2" /> Debit Card
                </Button>
            </div>
            <div className="flex justify-between">
                <div className="w-1/2 p-4">
                    {!paymentSuccess ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Card Number"
                                name="number"
                                value={cardDetails.number}
                                onChange={handleCardChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FaCreditCard />
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="1234 5678 9101 1121"
                                required
                                type="text"
                                inputProps={{ pattern: "[0-9 ]{19}" }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Cardholder Name"
                                name="name"
                                value={cardDetails.name}
                                onChange={handleCardChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FaUser />
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="Full Name"
                                required
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Expiry Date"
                                name="expiry"
                                value={cardDetails.expiry}
                                onChange={handleCardChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FaCalendar />
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="MM/YY"
                                required
                                inputProps={{ pattern: "(0[1-9]|1[0-2])\/[0-9]{2}" }}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="CVV"
                                name="cvv"
                                type="password"
                                value={cardDetails.cvv}
                                onChange={handleCardChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FaLock />
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="123"
                                required
                                inputProps={{ pattern: "[0-9]{3,4}" }}
                            />
                            <Button type="submit" color="primary" variant="contained" className="mt-4">
                                Pay Now
                            </Button>
                        </form>
                    ) : (
                        <img src={successAnimation} alt="Payment Success" className="w-full h-auto" />
                    )}
                </div>
                <div className={`w-1/2 h-1/2  rounded-lg shadow-md text-white flex flex-col justify-between`}>
                    <div className="relative">
                        <img className="w-full h-full object-cover rounded-lg" src={cardBackground} alt="Card Background" />
                        <div className="absolute inset-0 p-4 flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm opacity-70">Cardholder Name</p>
                                    <p className="text-lg font-semibold">{cardDetails.name || 'Your Name'}</p>
                                </div>
                                <FaCreditCard size="40px" className="text-white" />
                            </div>
                            <div>
                                <p className="text-sm opacity-70">Card Number</p>
                                <p className="text-lg font-semibold">{cardDetails.number || '#### #### #### ####'}</p>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm opacity-70">Expires</p>
                                    <p className="text-lg font-semibold">{cardDetails.expiry || 'MM/YY'}</p>
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">CVV</p>
                                    <p className="text-lg font-semibold">{cardDetails.cvv.replace(/./g, '•')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
