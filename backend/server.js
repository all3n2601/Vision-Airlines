const express = require("express");
const bodyParser = require("body-parser");
const corsMiddleware = require("./middleware/cors");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const connectToDatabase = require("./db/dbConnection.js");
const limiter = require("./middleware/rateLimiter");
const router = express.Router();
const app = express();

const passengerController = require("./routes/passengerRoutes.js");
const bookingController = require("./routes/bookRoutes.js");
const airportController = require("./routes/airportRoutes.js");
const flightController = require("./routes/flightRoutes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(corsMiddleware);

app.use("/api/passenger", passengerController);
app.use("/api/booking", bookingController);
app.use("/api/airport", airportController);
app.use("/api/flight", flightController);

app.use(errorHandlerMiddleware);

(async () => {
  try {
    await connectToDatabase();
    const port = process.env.PORT || 4451;
    const server = app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
  }
})();
