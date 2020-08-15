const express = require("express");
const router = express.Router();

// IMPORTING CONTROLLERS
const createOne = require("../controllers/sensors/create");
const getById = require("../controllers/sensors/get-by-id");

// IMPORTING MIDDLEWARES
const checkNoMissingSensorFields = require("../middlewares/sensors/check-all-fields-before-saving");

// SETTING ROUTES
router.get("/", createOne);
router.get("/:_id", getById);
router.post("/", checkNoMissingSensorFields, createOne);
router.put("/:_id", checkNoMissingSensorFields, createOne);
router.delete("/:_id", createOne);

module.exports = router;
