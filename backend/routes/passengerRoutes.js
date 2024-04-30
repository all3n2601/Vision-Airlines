const express = require("express");
const router = express.Router();

const {
  getPassengers,
  passengersLogin,
  registerPassenger,
} = require("../controllers/passengerController.js");

const validateToken = require("../middleware/validateToken");

router.post("/register", registerPassenger);

router.post("/login", passengersLogin);

router.get("/allpassenger", validateToken, getPassengers);

module.exports = router;
