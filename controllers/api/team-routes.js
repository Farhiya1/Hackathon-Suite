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

router.post("/", withAuth, (req, res) => {
  const body = req.body;

  Team.create({});
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
