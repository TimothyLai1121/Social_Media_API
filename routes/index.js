const express = require("express");
const userRoutes = require("./api/user-routes");
const thoughtRoutes = require("./api/thought-routes");

const router = express.Router();

router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

module.exports = router;

