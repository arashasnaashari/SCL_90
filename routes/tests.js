const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");
const User = require("../models/User");
//test GET
router.get("/:name", ensureAuthenticated, (req, res) =>
  res.render(`${req.params.name}`, { user: req.user })
);

router.patch("/answerDataScl", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataScl: req.body.answerData } }
    );
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
});
router.patch("/answerDataAMQ", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataAMQ: req.body.answerData } }
    );
    console.log(req.body.answerData);
    console.log(req.user.phone);
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ ok: false });
  }
});
router.patch("/answerDataBISI", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataBISI: req.body.answerData } }
    );
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
});
router.patch("/answerDataCT", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataCT: req.body.answerData } }
    );
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
});
router.patch("/answerDataEQI", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataEQI: req.body.answerData } }
    );
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
});
router.patch("/answerDataHolland", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataHolland: req.body.answerData } }
    );
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
});
router.patch("/answerDataMBTI", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataMBTI: req.body.answerData } }
    );
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
});
router.patch("/answerDataNEOFFI", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataNEOFFI: req.body.answerData } }
    );
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
});
router.patch("/answerDataNEOPIR", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataNEOPIR: req.body.answerData } }
    );
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
});
router.patch("/answerDataPWB", async (req, res) => {
  try {
    const UpdatedUser = await User.findOneAndUpdate(
      { phone: req.user.phone },
      { $push: { answerDataPWB: req.body.answerData } }
    );
    const result = await UpdatedUser.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false });
  }
});
module.exports = router;
