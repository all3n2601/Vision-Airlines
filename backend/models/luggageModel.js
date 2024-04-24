const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const luggage = new Schema({
  luggageID: { type: String, required: true },
  weight: { type: Number, required: true },
  extraWeight: { type: Number },
  category: {
    type: String,
    enum: ["Fragile", "Non-Fragile"],
    default: "Non-Fragile",
  },
});

module.exports = mongoose.model("luggage", luggage, "luggage");
