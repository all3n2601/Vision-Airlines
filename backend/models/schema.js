const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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




const schemas = {
  aeroplaneSchema,
  passengerSchema,
  airportSchema,
  employeeSchema,
  luggageSchema,
  bookingSchema,
};

module.exports = schemas;
