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

module.exports =  mongoose.model("aeroplane", aeroplane, "Flights");