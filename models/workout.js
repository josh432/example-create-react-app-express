const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  exercise: { type: String, required: true },
  date: { type: Date, default: Date.now },
  weight: { type: String, required: true },
  repetitions: String,
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;