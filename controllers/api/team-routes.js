const router = require("express").Router();
const { User, Project, Team } = require("../../models");
const withAuth = require("../../utils/auth");
const superheroes = require('superheroes')

// identifying users within a team
router.post("/:id", async (req, res) => {
  console.log("IT'S HITTING");
  try {
    const teamData = await Team.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    if (!teamData) {
      res.status(404).json({ message: "No member(s) are found with that id!" });
      return;
    }
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  let existingTeam;

  try {
    existingTeam = await Team.findOne({
      where: { project_id: body.projectId },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }

  const teamName = superheroes.random()
  console.log(teamName)
    ? existingTeam.get({ plain: true }).teamName
    : teamName;

  try {
    const projectTeam = await Team.create({
      teamName,
      project_id: body.projectId,
      user_id: req.session.userId,
    });

    res.status(200).json(projectTeam.get({ plain: true }));
  } catch (error) {}
});

router.put("/:id", withAuth, (req, res) => {
  Team.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((affectedRows) => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Deleting posts
router.delete("/:id", withAuth, (req, res) => {
  Project.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((affectedRows) => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
