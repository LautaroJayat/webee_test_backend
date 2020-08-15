const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Its working!");
  return res.status(200).send("its working");
});

router.post("/", (req, res) => {
  console.log("Its working!");
  return res.status(200).send("its working");
});
module.exports = router;
