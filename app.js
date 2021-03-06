// VENDOR MODULES
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// MAKING APP INSTANCE
const app = express();

// IMPORTING CUSTOM MIDDLEWARES
const checkValidCredentials = require("./middlewares/check-valid-token");

// IMPORTING ROUTES
const sensorEventsRouter = require("./routes/sensor-events");
const sensorsRouter = require("./routes/sensors");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

// SETTING UP MIDDLEWARES AND CONFIGURATIONS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

// SETTING UP APP ROUTES
app.use("/sensors", checkValidCredentials, sensorsRouter);
app.use("/sensor-events", checkValidCredentials, sensorEventsRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

module.exports = app;
