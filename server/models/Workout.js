var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  exercise: String,
  date: Date,
  weight: String,
  repetitions: String
});

var Workout = mongoose.model("Article", workoutSchema);

module.exports = Workout;