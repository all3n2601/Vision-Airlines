const asyncHandler = require("express-async-handler");
const luggage = require("../models/luggageModel.js");

const createLuggage = asyncHandler(async (req, res) => {
  const { luggageID, weight, extraWeight, category } = req.body;
  if ((!luggageID, !weight, !extraWeight, !category)) {
    res.status(400);
    throw new Error("All fields Mandatory");
  }
  const existLuggage = luggage.findOne({ luggageID });
  if (existLuggage) {
    res.status(400);
    throw new Error("Luggage aldready exists");
  }
  const newLuggage = await luggage.create({
    luggageID: luggageID,
    weight: weight,
    extraWeight: extraWeight,
    category: category,
  });
  if (newLuggage) {
    res.status(201).json(newLuggage);
  }
  res.status(200).json({ message: "new Luggage created" });
});

const deleteLuggage = asyncHandler(async (req, res) => {
  const Luggage = await airport.findById(req.params.Id);
  if (!Luggage) {
    res.status(404);
    throw new error("Luggage not found");
  }
  await luggage.deleteOne(Luggage);
  res.status(200);
});

const getLuggage = asyncHandler(async (req, res) => {
  const Luggage = await luggage.findById(req.params.id);
  if (!Luggage) {
    res.status(404);
    throw new Error("Luggage not found");
  }
  res.status(200).json(Luggage);
});

module.exports = { createLuggage, deleteLuggage, getLuggage };
