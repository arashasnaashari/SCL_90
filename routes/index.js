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

module.exports = router;
