const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airport = new Schema({
    airportID: { type: String, required: true },
    airportName: { type: String, required: true },
    Location: { type: Number, required: true },
    Terminals: { type: Number, required: true },
    planes: { type: Number },
  });
  
  module.exports =  mongoose.model("airport", airport, "airport");
