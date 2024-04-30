const asyncHandler = require("express-async-handler");
const airport = require("../models/airportModel.js");

const createAirport = asyncHandler(async (req, res) => {
  const { airportID, airportName, Location, Terminals, planes } = req.body;
  if (!airportID || !airportName || !Location || !Terminals || !planes) {
    res.status(400);
    throw new Error("All Fields are Mandatory");
  }
  const existAirport = await airport.findOne({ airportID });
  if (existAirport) {
    res.status(400);
    throw new Error("Airport aldready exists");
  }
  const newAirport = await airport.create({
    airportID: airportID,
    airportName: airportName,
    Location: Location,
    Terminals: Terminals,
    planes: planes,
  });
  if (newAirport) {
    res.status(201).json(newAirport);
  }
  res.status(200).json({ message: "New Airport created" });
});

const deleteAirport = asyncHandler(async (req, res) => {
  const Airport = await airport.findById(req.params.Id);
  if (!Airport) {
    res.status(404);
    throw new error("Airport not found");
  }
  await airport.deleteOne(Airport);
  res.status(200);
});

const getAirport = asyncHandler(async (req, res) => {
  const Airport = await airport.find();
  if (!Airport) {
    res.status(404);
    throw new Error("Airport not found");
  }
  res.status(200).json(Airport);
});

const getAirportName = asyncHandler(async (req, res) => {
  const { airportID } = req.query;
  const airportName = await airport.find({ airportID });
  if (!airportName) {
    res.status(404);
    throw new Error("Airport not found");
  }
  res.status(200).json({ message: airportName });
});

module.exports = { createAirport, deleteAirport, getAirport, getAirportName };
