const express = require("express");
const router = express.Router();

// IMPORTING CONTROLLERS
const login = require("../controllers/auth/login");

// SETTING ROUTES

router.post("/", login);

module.exports = router;
