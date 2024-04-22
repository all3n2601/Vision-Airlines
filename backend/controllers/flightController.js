const asyncHandler = require("express-async-handler");
const flight = require("../models/flightModel");
const { error } = require("console");

const createFlight = asyncHandler(async (req, res) => {
  const {
    aeroplaneID,
    aeroplaneName,
    totalSeats,
    bookedSeats,
    startDestination,
    endDestination,
    startTime,
    endTime,
    classs,
    type,
    aeroplanecondition,
    aeroplanestatus,
  } = req.body;
  if (
    !aeroplaneID ||
    !aeroplaneName ||
    !totalSeats ||
    !startDestination ||
    !endDestination ||
    !startTime ||
    !endTime
  ) {
    res.status(400);
    throw new error("All Fields are Mandatory");
  }

  const flightExist = await flight.findOne({ aeroplaneID });
  if (flightExist) {
    res.status(400);
    throw new error("Flight aldready exists");
  }

  const newFlight = await flight.create({
    aeroplaneID: aeroplaneID,
    aeroplaneName: aeroplaneName,
    totalSeats: totalSeats,
    bookedSeats: bookedSeats,
    startDestination: startDestination,
    endDestination: endDestination,
    startTime: startTime,
    endTime: endTime,
    classs: classs,
    type: type,
    aeroplanecondition: aeroplanecondition,
    aeroplanestatus: aeroplanestatus,
  });

  if (newFlight) {
    res.status(201)({
      aeroplaneID: aeroplaneID,
    });
  }
  res.status(200).json({ message: "New Flight created" });
});

module.exports = { createFlight };
