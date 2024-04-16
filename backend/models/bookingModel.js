const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booking = new Schema({
    bookingID: { type: String, required: true },
    bookingDate: { type: Date, required: true },
    passengerID: {
      unique: true,
      type: mongoose.Schema.Types.passengerID,
      ref: "passengerSchema",
    },
    airportID: {
      unique: true,
      type: mongoose.Schema.Types.airportID,
      ref: "airportSchema",
    },
    aeroplaneID: {
      unique: true,
      type: mongoose.Schema.Types.aeroplaneID,
      ref: "aeroplaneSchema",
    },
    startDestination: { type: String, required: true },
    endDestination: { type: String, required: true },
    price: { type: Number, required: true },
    co_passengersID: [
      {
        type: mongoose.Schema.Types.passengerID,
        ref: "passengerSchema",
      },
    ],
    luggageID: [{ type: mongoose.Schema.Types.luggageID, ref: "luggageSchema" }],
  
    seats: [{ type: String, required: true }],
    concessions: { type: String },
    Insurance: { Type: String, enum: ["Yes", "No"], default: "No" },
  });
  
  module.exports = mongoose.model("booking", booking, "bookings");