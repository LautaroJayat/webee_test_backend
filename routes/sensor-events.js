const express = require("express");
const router = express.Router();

// IMPORTING CONTROLLERS
const createOne = require("../controllers/sensors-event/create");
const getAll = require("../controllers/sensors-event/get-all");
const getById = require("../controllers/sensors-event/get-by-id");
const getBySensorId = require("../controllers/sensors-event/get-by-sensor-id");

// IMPORTING MIDDLEWARES
const checkValidParentSensor = require("../middlewares/sensors-event/check-parent-sensor");

// SETTING ROUTES
router.get("/", getAll);
router.get("/:_id", getById);
router.post("/by-sensor/:_id", checkValidParentSensor, getBySensorId);
router.put("/:_id", checkValidParentSensor, createOne);
router.delete("/:_id", createOne);

module.exports = router;
