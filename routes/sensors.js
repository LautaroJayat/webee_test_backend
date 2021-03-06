const express = require("express");
const router = express.Router();

// IMPORTING CONTROLLERS
const createOne = require("../controllers/sensors/create");
const getById = require("../controllers/sensors/get-by-id");
const getAll = require("../controllers/sensors/get-all");
const updateOneSensor = require("../controllers/sensors/update-one");
const deleteOneByID = require("../controllers/sensors/delete-one");

// IMPORTING MIDDLEWARES
const checkNoMissingSensorFields = require("../middlewares/sensors/check-all-fields-before-saving");

// SETTING ROUTES
router.get("/", getAll);
router.get("/:_id", getById);
router.post("/", checkNoMissingSensorFields, createOne);
router.put("/:_id", checkNoMissingSensorFields, updateOneSensor);
router.delete("/:_id", deleteOneByID);

module.exports = router;
