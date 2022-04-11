const router = require("express").Router();
const { Project, Team } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/", (req, res) => {
  Project.findAll({
     include: [Team],
    where: {
      team_id: null,
    },
  }) 
    .then((projectDBData) => {
      const projects = projectDBData.map((project) =>
        project.get({ plain: true })
      );
      console.log(projects);
      res.render("all-posts", { projects });
    });
 
});


module.exports = router;
