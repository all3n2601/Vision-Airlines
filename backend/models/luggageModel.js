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

module.exports = mongoose.model("employee", employee, "employee");
