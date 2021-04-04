const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");

const app = express();

// Passport Config
require("./config/passport")(passport);

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.dcr08.mongodb.net/worldtest?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("Connect to DB")
);

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));
app.use("/tests", require("./routes/tests.js"));
app.use("/admin", require("./routes/admin.js"));
app.use("/public", express.static("public"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
