// required files
const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const teamRoutes = require("./team-routes");
const projectRoutes = require("./project-routes");

router.use("/user", userRoutes);
router.use("/team", teamRoutes);
router.use("/project", projectRoutes);

module.exports = router;
