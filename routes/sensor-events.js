const express = require("express");
const router = express.Router();

// IMPORTING CONTROLLERS
const createOne = require("../controllers/sensors-event/create");
const getAll = require("../controllers/sensors-event/get-all");
const getById = require("../controllers/sensors-event/get-by-id");
const getBySensorId = require("../controllers/sensors-event/get-by-sensor-id");
const updateOne = require("../controllers/sensors-event/update-one");
const deleteOne = require("../controllers/sensors-event/delete-one");
const deleteBySensorId = require("../controllers/sensors-event/delete-by-sensor-id");

// IMPORTING MIDDLEWARES
const middlewares = require("../middlewares/sensors-event/check-parent-sensor");

// SETTING ROUTES
router.get("/", getAll);
router.get("/:_id", getById);
router.post("/:_id", middlewares.checkValidParentSensor, createOne);
router.get(
  "/by-sensor/:_id",
  middlewares.checkValidParentSensor,
  getBySensorId
);
router.put("/:_id", middlewares.checkValidParentSensorBeforeUpdate, updateOne);
router.delete("/:_id", deleteOne);
router.delete(
  "/by-sensor/:_id",
  middlewares.checkValidParentSensor,
  deleteBySensorId
);

module.exports = router;
