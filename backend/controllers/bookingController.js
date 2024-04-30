const asyncHandler = require("express-async-handler");
const booking = require("../models/bookingModel.js");

const newBooking = asyncHandler(async (req, res) => {
  const {
    passengerName,
    Email,
    phone,
    price,
    startDestination,
    endDestination,
    adult,
    child,
    paymentstatus,
  } = req.body;
  if (
    !passengerName ||
    !Email ||
    !phone ||
    !price ||
    !startDestination ||
    !endDestination ||
    !adult ||
    !child ||
    !paymentstatus
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
    passengerName: passengerName,
    Email: Email,
    phone: phone,
    price: price,
    startDestination: startDestination,
    endDestination: endDestination,
    adult: adult,
    child: child,
    paymentstatus: paymentstatus,
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
    paymentstatus: "Cancelled",
  });

  res.status(200).json(cancelBooking);
});

const getBooking = asyncHandler(async (req, res) => {
  const Booking = await booking.find();
  if (!Booking) {
    res.status(404);
    throw new Error("Booking not found");
  }
  res.status(200).json(Booking);
});

module.exports = { newBooking, deleteBooking, getBooking };
