const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Passenger = require("../models/passengerModel.js");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const getPassengers = asyncHandler(async (req, res) => {
  const passenger = await Passenger.find();
  if (!passenger) {
    res.status(500).json({ error: error.message });
  }
  res.json(passenger);
});

// router.post("/register", async (req, res) => {
//   const { passengerEmail, passengerPassword } = req.body;
//   try {
//     const existingUser = await Passenger.findOne({ passengerEmail });

//     if (existingUser) {
//       return res
//         .status(400)
//         .json({ error: "Passenger with this email already exists" });
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(passengerPassword, salt);

//     const newUser = new Passenger({
//       passengerEmail: passengerEmail,
//       passengerPassword: hashedPassword,
//     });

//     const savedUser = await newUser.save();

//     res.status(200).json({ savedUser, message: "Success" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

const registerPassenger = asyncHandler(async (req, res) => {
  const { passengerEmail, passengerPassword } = req.body;
  if (!passengerEmail || !passengerPassword) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const PassengerExist = await Passenger.findOne({ passengerEmail });
  if (PassengerExist) {
    res.status(400);
    throw new Error("Passenger aldready exist");
  }

  hashedPassword = await bcrypt.hash(passengerPassword, 10);

  const newPassenger = await Passenger.create({
    passengerEmail: passengerEmail,
    passengerPassword: hashedPassword,
  });

  res.status(201).json({
    message: "Success",
  });
});

const passengersLogin = asyncHandler(async (req, res) => {
  const { passengerEmail, passengerPassword } = req.body;
  if (!passengerEmail || !passengerPassword) {
    res.status(400);
    throw new Error("Input all fields");
  }
  const passenger = await Passenger.findOne({ passengerEmail });
  if (
    passenger &&
    (await bcrypt.compare(passengerPassword, passenger.passengerPassword))
  ) {
    const accessToken = jwt.sign(
      {
        passenger: {
          id: passenger.id,
          passengerEmail: passenger.passengerEmail,
        },
      },
      process.env.jwtsecret,
      { expiresIn: "60m" }
    );
    res.status(200).json({ message: "Success", accessToken: accessToken });
  } else {
    res.status(401);
    throw new Error("email or Password not valid");
  }
});

module.exports = { getPassengers, registerPassenger, passengersLogin };
