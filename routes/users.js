const express = require("express");
const router = express.Router();

// IMPORTING CONTROLLERS
const createOne = require("../controllers/users/create");

// IMPORTING MIDDLEWARES
const checkNeededUserFields = require("../middlewares/users/check-all-fields-before-saving");

// SETTING ROUTES

router.post("/", checkNeededUserFields, createOne);

module.exports = router;
