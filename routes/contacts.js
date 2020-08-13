const express = require("express");
const router = express.Router();

// @route      GET api/contacts
// @desc       get all user's contacts
// @access     Private

router.get("/", (req, res) => {
  res.send("get all contacts of user");
});

// @route      POST api/contacts
// @desc       add new contacts
// @access     Private

router.post("/", (req, res) => {
  res.send("add contacts");
});

// @route      PUT api/contacts/:id
// @desc       update contacts
// @access     Private

router.put("/:id", (req, res) => {
  res.send("update contacts");
});

// @route      DELETE api/contacts/:id
// @desc       delete contacts
// @access     Private

router.delete("/:id", (req, res) => {
  res.send("delete contacts");
});

module.exports = router;
