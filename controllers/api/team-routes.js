const router = require("express").Router();
const { User, Project, Team } = require("../../models");
const withAuth = require("../../utils/auth");

// identifying users within a team
router.get("/:id", async (req, res) => {
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

  // Attempt to find existing team
  const existingTeam = await Team.findOne({
    where: { project_id: body.projectId }
  });

  let projectTeam;
  if (!existingTeam) {
    const newTeam = await Team.create({
      name: 'Test',
      project_id: body.project_id
    });
    projectTeam = newTeam;
  } else {
    projectTeam = existingTeam;
  }

  await User.update({
    team_id: projectTeam.id
  });

  res.status(200).json(projectTeam.get({plain: true}));
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
