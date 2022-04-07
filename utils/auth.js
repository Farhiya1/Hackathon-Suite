// Verification of user login before access to route is given.
const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    console.log("The user did not have a session")
    res.redirect("/login");
  } else {
    console.log("The user did have a session")
    next();
  }
};

module.exports = withAuth;
