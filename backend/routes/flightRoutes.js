const express = require("express");
const router = express.Router();

const {
  createFlight,
  deleteFlight,
  getFlight,
  updateFlight,
} = require("../controllers/flightController.js");

const validateToken = require("../middleware/validateToken");

router.post("/createFlight", createFlight);

router.delete("/deleteFlight", deleteFlight);

router.get("/getFlight", getFlight);

router.put("/updateFlight", updateFlight);

module.exports = router;
