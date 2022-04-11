const router = require("express").Router();
const { Project, Team } = require("../../models");
const withAuth = require("../../utils/auth");

<<<<<<< HEAD

router.get("/", withAuth, (req, res) => {
=======
router.get("/", (req, res) => {
>>>>>>> ef5cff25565b6f2185fdf204ccdbd9cb2fac5e06
  Project.findAll({
    include: [Team],
    where: {
      team_id: null,
    },
  }).then((projectDBData) => {
    const projects = projectDBData.map((project) =>
      project.get({ plain: true })
    );
    console.log(projects);
    res.render("all-posts", { projects });
  });
});

module.exports = router;
