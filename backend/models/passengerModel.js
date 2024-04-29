const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passenger = new Schema({
  passengerID: {
    type: String,
    unique: true,
    default: "PAS" + Date(),
  },
  passengerName: { type: String },
  passengerAge: { type: Number },
  passengerDOB: { type: Date },
  passengerPhone: { type: Number },
  passengerEmail: { type: String, required: true, unique: true },
  passengerPassword: { type: String, required: true },
  passengerAddress: { type: String },
  passengerGender: {
    type: String,
    enum: ["Male", "Female", "Others"],
  },
  passengerDisabilities: { type: String, enum: ["Yes", "No"], default: "No" },
});

passenger.virtual("age").get(function () {
  const dob = this.passengerDOB;
  const now = new Date();
  const diff = now - dob;
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
});

const Passenger = mongoose.model("Passenger", passenger, "passengers");
module.exports = Passenger;
