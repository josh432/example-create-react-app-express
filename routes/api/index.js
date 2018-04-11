const router = require("express").Router();
const exerciseRoutes = require("./exercises");

// Book routes
router.use("/exercises", exerciseRoutes);

module.exports = router;