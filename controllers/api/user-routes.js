const router = require("express").Router();
const { User } = require("../../models");

router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    bio: req.body.bio,
  })
    .then((userDataDB) => {
      req.session.save(() => {
        req.session.userId = userDataDB.id;
        req.session.email = userDataDB.email;
        req.session.username = userDataDB.username;
        req.session.bio = userDataDB.bio;
        req.session.loggedIn = true;

        res.json(userDataDB);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login function
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((userDataDB) => {
    if (!userDataDB) {
      res.status(400).json({ message: "No user account has been found!" });
      return;
    }

    // checks password is correct
    const validPassword = userDataDB.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = userDataDB.id;
      req.session.username = userDataDB.username;
      req.session.loggedIn = true;

      res.json({ user: userDataDB, message: "You are now logged in!" });
    });
  });
});

// ends the session and logs user out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.delete("/user/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((userDataDB) => {
      if (!userDataDB) {
        res
          .status(404)
          .json({ message: "No user has been found with this id" });
        return;
      }
      res.json(userDataDB);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
