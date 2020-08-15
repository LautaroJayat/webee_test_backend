const express = require("express");
const router = express.Router();

// IMPORTING CONTROLLERS
const createOne = require("../controllers/sensors/create");

// IMPORTING MIDDLEWARES
const checkNoMissingSensorFields = require("../middlewares/sensors/check-all-fields-before-saving");

// SETTING ROUTES
router.get("/", checkNoMissingSensorFields, createOne);
router.get("/:_id", checkNoMissingSensorFields, createOne);
router.post("/", checkNoMissingSensorFields, createOne);
router.put("/:_id", checkNoMissingSensorFields, createOne);
router.delete("/:_id", checkNoMissingSensorFields, createOne);

module.exports = router;
