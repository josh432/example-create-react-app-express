const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  workout: { type: String, required: true },
  date: { type: Date, default: Date.now },
  weight: { type: String, required: true },
  repetitions: String,
  comments: String
  
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;