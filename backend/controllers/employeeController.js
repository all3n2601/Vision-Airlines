const asyncHandler = require("express-async-handler");
const employee = require("../models/employeeModel.js");

const createEmployee = asyncHandler(async (req, res) => {
  const {
    employeeID,
    employeeName,
    employeeGender,
    employeeDOB,
    employeeEmail,
    employeePhone,
    Designation,
  } = req.body;
  if (
    !employeeID ||
    !employeeName ||
    !employeeGender ||
    !employeeDOB ||
    !employeeEmail ||
    !employeePhone ||
    !Designation
  ) {
    res.status(400);
    throw new Error("All Fields are Mandatory");
  }
  const existEmployee = await flight.findOne({ employeeID });
  if (existEmployee) {
    res.status(400);
    throw new Error("Employee aldready exists");
  }
  const newEmployee = await employee.create({
    employeeID: employeeID,
    employeeName: employeeName,
    employeeGender: employeeGender,
    employeeDOB: employeeDOB,
    employeeEmail: employeeEmail,
    employeePhone: employeePhone,
    Designation: Designation,
  });
  if (newEmployee) {
    res.status(201).json(newEmployee);
  }
  res.status(200).json({ message: "New Employee created" });
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const Employee = await employee.findById(req.params.Id);
  if (!Employee) {
    res.status(404);
    throw new error("Employee not found");
  }
  await employee.deleteOne(Employee);
  res.status(200);
});

const getEmployee = asyncHandler(async (req, res) => {
  const Employee = await employee.findById(req.params.id);
  if (!Employee) {
    res.status(404);
    throw new Error("Employee not found");
  }
  res.status(200).json(Employee);
});

module.exports = { createEmployee, deleteEmployee, getEmployee };
