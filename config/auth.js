module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error_msg", "Please log in to view that resource");
    res.redirect("/users/login");
  },
  ensureAdmin: function (req, res, next) {
    if (
      req.user &&
      req.user.password ==
        "$2a$10$5k9gEOfPWII/cvgnQIyRcuTqmenN12TnSbnfXHu3TWqflRmmqi6S2"
    ) {
      return next();
    }
    req.flash("error_msg", "Please log in to view that resource");
    res.redirect("/users/login");
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/dashboard");
  },
};
