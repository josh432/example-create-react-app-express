var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  exercise: String,
  date: Date,
  weight: Number,
  repetitions: Number
});

var Workout = mongoose.model("Article", workoutSchema);

module.exports = Workout;