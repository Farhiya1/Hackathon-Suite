const router = require("express").Router();
const { Project, User, Team } = require("../models");

// Get all posts for the homepage
router.get("/", (req, res) => {
  Project.findAll({
    limit: 2,
    include: [Team]
  }) // Serialize  data so the template can read it
    .then((projectDBData) => {
      const projects = projectDBData.map((project) =>
        project.get({ plain: true })
      );
      // console.log(projects);
      res.render("homeprojects", { projects });
    });
  // .catch((err) => {
  //   res.status(500).json(err);
  // });
});

// Get single post
router.get("/post/:id", (req, res) => {
  Project.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  })
    .then((postDBData) => {
      if (postDBData) {
        const post = postDBData.get({ plain: true });

        res.render("single-post", { post });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Login

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
