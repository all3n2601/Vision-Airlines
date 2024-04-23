const asyncHandler = require("express-async-handler");
const flight = require("../models/flightModel");

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
    throw new Error("All Fields are Mandatory");
  }

  const flightExist = await flight.findOne({ aeroplaneID });
  if (flightExist) {
    res.status(400);
    throw new Error("Flight aldready exists");
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

const deleteFlight = asyncHandler(async (req, res) => {
  const Flight = await flight.findById(req.params.Id);
  if (!Flight) {
    res.status(404);
    throw new error("Flight not found");
  }
  await flight.deleteOne(Flight);
  res.status(200);
});

const updateFlight = asyncHandler(async (req, res) => {
  const Flight = await flight.findById(req.params.Id);
  if (!Flight) {
    res.status(404);
    throw new Error("Flight not found");
  }
  const updatedFlight = await flight.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!updatedFlight) {
    res.status(400);
    throw new Error("Error in updating");
  }
  res.status(200);
});

const getFlight = asyncHandler(async (req, res) => {
  const Flight = await flight.findById(req.params.id);
  if (!Flight) {
    res.status(404);
    throw new Error("Employee not found");
  }
  res.status(200);
});

module.exports = { createFlight, deleteFlight, getFlight, updateFlight };
