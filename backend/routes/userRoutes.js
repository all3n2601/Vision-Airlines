const express = require("express");
const router = express.Router();

const {
  registerPassenger,
  loginPassenger,
  currentPassenger,
} = require("../controllers/passengerController");

const validateToken = require("../middleware/validateToken");

router.post("/register", registerPassenger);

router.post("/login", loginPassenger);

router.get("/currentUser", validateToken, currentPassenger);

module.exports = router;
 