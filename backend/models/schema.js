const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aeroplane = new Schema({
  aeroplaneID: { type: String, required: true },
  aeroplaneName: { type: String, required: true },
  totalSeats: { type: Number, required: true },
  bookedSeats: { type: Number, required: true },
  class: {
    type: String,
    enum: ["Economy", "First-Class", "Business-Class"],
    default: "Economy",
  },
  type: {
    type: String,
    enum: ["Aisle", "Window", "Extra-Leg-Room"],
    default: "Aisle",
  },
  aeroplanecondition: {
    type: String,
    enum: ["Functional", "Under-Maintainance", "Non-Functional"],
    default: "Functional",
  },
  aeroplanestatus: {
    type: String,
    enum: ["Arrived", "Departed", "Scheduled", "Delayed", "Cancelled"],
    default: "Scheduled",
  },
});

const aeroplaneSchema = mongoose.model("aeroplane", aeroplane, "Flights");



const airport = new Schema({
  airportID: { type: String, required: true },
  airportName: { type: String, required: true },
  Location: { type: Number, required: true },
  Terminals: { type: Number, required: true },
  planes: { type: Number },
});

const airportSchema = mongoose.model("airport", airport, "airport");

const employee = new Schema({
  employeeID: { type: String, required: true },
  employeeName: { type: String, required: true },
  employeeGender: { type: String, required: true },
  employeeDOB: { type: Date, required: true },
  employeeEmail: { type: String, required: true },
  employeePhone: { type: Number, required: true },
  Designation: {
    type: String,
    enum: ["Pilot", "Air-Hostess", "Stewards"],
    required: true,
  },
});

const employeeSchema = mongoose.model("employee", employee, "employee");

const luggage = new Schema({
  luggageID: { type: String, required: true },
  weight: { type: Number, required: true },
  extraWeight: { type: Number },
  category: {
    type: String,
    enum: ["Fragile", "Non-Fragile"],
    default: "Non-Fragile",
  },
});

const luggageSchema = mongoose.model("luggage", luggage, "luggage");

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

const bookingSchema = mongoose.model("booking", booking, "booking");

const payments = new Schema({
  paymentsID: { type: String, required: true },
  paymentType: {},
});

const paymentsSchema = mongoose.model("payments", payments, "payments");

const schemas = {
  aeroplaneSchema,
  passengerSchema,
  airportSchema,
  employeeSchema,
  luggageSchema,
  bookingSchema,
};

module.exports = schemas;
