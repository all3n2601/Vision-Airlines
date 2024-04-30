const express = require("express");
const router = express.Router();

const {
  createAirport,
  deleteAirport,
  getAirport,
  getAirportName,
} = require("../controllers/airportController.js");

const validateToken = require("../middleware/validateToken");

router.post("/createAirport", createAirport);

router.delete("/deleteAirport", deleteAirport);

router.get("/getAirport", getAirport);

router.get("/getAirportName", getAirportName);

module.exports = router;
