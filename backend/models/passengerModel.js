const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Passenger = new Schema({
  passengerID: { type: String, required: true, unique: true, default: "PAS" + Date.now()},
  passengerName: { type: String, required: true,  },
  passengerAge: { type: Number, required: true, default: 0},
  passengerDOB: { type: Date, required: true,default:Date.now() },
  passengerPhone: { type: Number, required: true ,default:0},
  passengerEmail: { type: String, required: true, unique: true},
  passengerPassword:{type:String , required:true},
  passengerAddress: { type: String },
  passengerGender: { type: String,enum:["Male" , "Female" , "Others"], required: true, },
  passengerDisabilities: { type: String, enum: ["Yes", "No"], default: "No" },
});

PassengerSchema.virtual('age').get(function () {
  const dob = this.passengerDOB;
  const now = new Date();
  const diff = now - dob;
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
});


module.exports = mongoose.model("Passenger", Passenger, "passengers");
