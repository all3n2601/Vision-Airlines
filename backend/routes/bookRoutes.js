const express = require("express");
const router = express.Router();

const {
  newBooking,
  deleteBooking,
  getBooking,
} = require("../controllers/bookingController.js");

router.post("/newBooking", newBooking);
router.delete("/deleteBooking", deleteBooking);
router.get("getBooking", getBooking);

module.exports = router;
