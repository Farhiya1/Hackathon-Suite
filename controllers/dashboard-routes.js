const router = require("express").Router();
const { Project, User, Team } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  const userData = await User.findByPk(req.session.userId);

  const user = userData.get({ plain: true });

  console.log(user);

  res.render("all-posts-admin", {
    layout: "dashboard",
    user,
  });

  /* Project.findAll({
    where: {
      id: req.session.userId,
    },
  })
    .then((postDBData) => {
      const posts = postDBData.map((post) => post.get({ plain: true }));

      res.render("all-posts-admin", {
        layout: "dashboard",
        posts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("login");
    }); */
});

router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
    bio,
  });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Project.findByPk(req.params.id)
    .then((postDBData) => {
      if (postDBData) {
        const post = postDBData.get({ plain: true });

        res.render("edit-post", {
          layout: "dashboard",
          post,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
