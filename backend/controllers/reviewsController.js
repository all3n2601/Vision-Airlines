const asyncHandler = require("express-async-handler");
const review = require("../models/reviewsModel.js");

const newReview = asyncHandler(async (req, res) => {
  const { passengerName, rating, Comment, profile } = req.body;
  if (!passengerName || !rating || !Comment || !profile) {
    res.status(400);
    throw new Error("All fields are Mandatory");
  }
  const Review = review.create({
    passengerName: passengerName,
    rating: rating,
    Comment: Comment,
    profile: profile,
  });
  if (Review) {
    res.status(201).json({
      id: Review.id,
      passengerName: passengerName,
    });
  }
  res.status(200).json({ message: "New review Submitted" });
});

const getReview = asyncHandler(async (req, res) => {
  const Review = await review.findAll();
  res.status(200).json(Review);
});

module.exports = { newReview, getReview };
