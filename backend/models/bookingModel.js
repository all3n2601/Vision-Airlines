const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  // bookingID: { type: String },
  // bookingDate: { type: Date },
  passengerName: { type: String },
  Email: { type: String },
  phone: { type: Number },
  price: { type: Number },
  startDestination: { type: String },
  endDestination: { type: String },
  adult: { type: Number },
  child: { type: Number },
  paymentstatus: { type: String },

  // passengerID: {
  //     unique: true,
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Passenger",
  //   },
  //   airportID: {
  //     unique: true,
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Airport",
  //   },
  //   aeroplaneID: {
  //     unique: true,
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Flight",
  //   },
  //   price: { type: Number, required: true },
  //   co_passengersID: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Passenger",
  //     },
  //   ],
  //   luggageID: [{ type: mongoose.Schema.Types.ObjectId, ref: "Luggage" }],
  //   seats: [{ type: String, required: true }],
  //   concessions: { type: String },
  //   insurance: { type: String, enum: ["Yes", "No"], default: "No" },
  //   status: { type: String, enum: ["Active", "Cancelled"] },
});

const Booking = mongoose.model("Booking", bookingSchema, "bookings");
module.exports = Booking;
