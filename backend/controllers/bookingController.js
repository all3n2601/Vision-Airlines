const asyncHandler = require("express-async-handler");
const booking = require("../models/bookingModel.js");

const newBooking = asyncHandler(async (req, res) => {
  const {
    bookingDate,
    passengerID,
    airportID,
    aeroplaneID,
    price,
    co_passengersID,
    luggageID,
    seats,
    concessions,
    Insurance,
  } = req.body;
  if (
    !bookingDate ||
    !passengerID ||
    !airportID ||
    !aeroplaneID ||
    !price ||
    !co_passengersID ||
    !luggageID ||
    !seats ||
    !concessions ||
    !Insurance
  ) {
    res.status(400);
    throw new Error("All fields Mandatory");
  }
  const existBooking = await booking.findById(req.params.Id);
  if (existBooking) {
    res.status(400);
    throw new Error("Booking aldready exists");
  }
  const newbooking = await booking.create({
    bookingDate: bookingDate,
    passengerID: passengerID,
    airportID: airportID,
    aeroplaneID: aeroplaneID,
    price: price,
    co_passengersID: co_passengersID,
    luggageID: luggageID,
    seats: seats,
    concessions: concessions,
    Insurance: Insurance,
  });
  if (newbooking) {
    res.status(201).json(newbooking);
  }
  res.status(200).json({ message: "New Booking created" });
});

const deleteBooking = asyncHandler(async (req, res) => {
  const Booking = await booking.findById(req.params.Id);
  if (!Booking) {
    res.status(404);
    throw new error("Booking not found");
  }
  const cancelBooking = await booking.findByIdAndUpdate(req.params.id, {
    status: "Cancelled",
  });

  res.status(200).json(cancelBooking);
});

const getBooking = asyncHandler(async (req, res) => {
  const Booking = await booking.findById(req.params.id);
  if (!Booking) {
    res.status(404);
    throw new Error("Booking not found");
  }
  res.status(200).json(Booking);
});

module.exports = { newBooking, deleteBooking, getBooking };
