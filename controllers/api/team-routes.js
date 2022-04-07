const router = require("express").Router();
const { User, Project, Team } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  const body = req.body;

  Team.create({
    
  })

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
  Post.destroy({
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
