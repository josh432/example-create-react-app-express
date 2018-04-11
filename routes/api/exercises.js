const router = require("express").Router();
const exercisesController = require("../../controllers/exercisesController");

// Matches with "/api/books"
router.route("/")
  .get(exercisesController.findAll)
  .post(exercisesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(exercisesController.findById)
  .put(exercisesController.update)
  .delete(exercisesController.remove);

module.exports = router;