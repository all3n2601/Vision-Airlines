const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const review = new Schema({
  passengerName: { type: String, required: true },
  rating: { type: Number, required: true },
  Comment: { type: String, required: true },
  profile: { type: String, required: true },
});

const Review = mongoose.model("review", review, "reviews");
module.exports = Review;
