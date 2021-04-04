const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Upload excel and insert jsoned data  //insert many
router.post("/insert", async (req, res) => {
  try {
    const insertedUsers = await User.insertMany(req.body.users);
    const result = await insertedUsers.save();
    res.status(200).json({ msg: true });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

// Get json data by date  SAZMANI
router.get("/update-answer-nationalcode/:date", async (req, res) => {
  try {
    const users = await User.find({ date: req.params.date }).lean();
    res.status(201).json({ msg: users });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// Get json data by date  FARDI
router.get("/update-answer-fardi/:date", async (req, res) => {
  try {
    const users = await User.find({
      nameOfExam: "free",
      date: req.params.date,
    }).lean();
    res.status(201).json({ msg: users });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
