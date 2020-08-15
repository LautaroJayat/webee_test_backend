const express = require("express");
const router = express.Router();

// IMPORTING CONTROLLERS
const createOne = require("../controllers/sensors-event/create");

// IMPORTING MIDDLEWARES
const checkValidParentSensor = require("../middlewares/sensors-event/check-parent-sensor");

// SETTING ROUTES
router.get("/", checkValidParentSensor, createOne);
router.get("/:_id", checkValidParentSensor, createOne);
router.post("/:_id", checkValidParentSensor, createOne);
router.put("/:_id", checkValidParentSensor, createOne);
router.delete("/:_id", checkValidParentSensor, createOne);

module.exports = router;
