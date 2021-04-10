const express = require("express");
const router = express.Router();
const {
  ensureAuthenticated,
  ensureAdmin,
  forwardAuthenticated,
} = require("../config/auth");

// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => res.render("welcome"));

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});
//Admin
router.get("/admin", ensureAdmin, (req, res) => res.render("admin"));
//setting

router.get("/dashboard/setting", ensureAuthenticated, (req, res) => {
  res.render("setting", {
    user: req.user,
  });
});

module.exports = router;
