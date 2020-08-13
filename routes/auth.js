const express = require("express");
const router = express.Router();

// @route      GET api/auth
// @desc       get logged in user
// @access     Private

router.get("/", (req, res) => {
  res.send("Logged in a user");
});

// @route      POST api/auth
// @desc       auth user and get user
// @access     Public

router.post("/", (req, res) => {
  res.send("Logging in user");
});

// @route      POST api/users
// @desc       Register a user
// @access     Public

router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
