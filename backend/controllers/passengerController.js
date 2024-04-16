const asyncHandler = require("express-async-handler");
const Passenger = require("../models/passengerModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerPassenger = asyncHandler(async (req, res) => {
  const { passengerEmail, password } = req.body;
  if (!passengerEmail || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const PassengerExist = await Passenger.findOne({ passengerEmail });
  if (PassengerExist) {
    res.status(400);
    throw new Error("Passenger aldready exist");
  }

  hashedPassword = await bcrypt.hash(password, 10);

  const newPassenger = await Passenger.create({ 
    email: passengerEmail,
    password: hashedPassword,
  });

  if (newPassenger) {
    res.status(201).json({
      id: newPassenger.id,
      email: newPassenger.email,
    });
  }

  res.status(200).json({ message: "New Passenger created" });
});

const loginPassenger = asyncHandler(async (req, res) => {
  const { passengerEmail, password } = req.body;
  if (!passengerEmail || !password) {
    res.status(400);
    throw new Error("Input all fields");
  }
  const passenger = await Passenger.findOne({ passengerEmail });
  if (passenger && (await bcrypt.compare(password, passenger.password))) {
    const accessToken = jwt.sign(
      {
        passenger: {
          id: passenger.id,
          email: passenger.passengerEmail,
        },
      },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: "60m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or Password not valid");
  }
});

const currentPassenger = asyncHandler(async (req, res) => {
  res.json(req.passenger);
});



module.exports = {
  registerPassenger,
  loginPassenger,
  currentPassenger,
};
