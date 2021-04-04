const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
// Load User model
const User = require("../models/User");
const { forwardAuthenticated } = require("../config/auth");

// GET ROUTE
router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));
router.get("/register", forwardAuthenticated, (req, res) =>
  res.render("register")
);

// POST
router.post("/register", async (req, res) => {
  const { name, gender, password, age, phone, nationalcode } = req.body;
  const user = await User.findOne({ phone: phone });

  if (user) {
    res.render("register", { msg: "user already exists" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      age: age,
      gender: gender,
      nationalcode: nationalcode,
      phone: phone,
      password: hashedPassword,
    });

    await newUser.save();
    // req.flash("success_msg", "You are now registered and can log in");
    res.status(200).json({ ok: true });
  }
});

// Login
router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(200).json({ ok: false });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ ok: true });
    });
  })(req, res, next);
});


// Logout
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect("/users/login");
});

module.exports = router;
