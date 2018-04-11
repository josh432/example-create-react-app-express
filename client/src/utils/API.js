import axios from "axios";

export default {
  // Gets all workouts
  getExercises: function() {
    return axios.get("/api/exercises");
  },
  // Gets the workout with the given id
  getExercise: function(id) {
    return axios.get("/api/exercises/" + id);
  },
  // Deletes the workout with the given id
  deleteExercise: function(id) {
    return axios.delete("/api/exercises/" + id);
  },
  // Saves a workout to the database
  saveExercise: function(exerciseData) {
    return axios.post("/api/exercises", exerciseData);
  }
};