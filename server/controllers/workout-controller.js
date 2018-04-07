var workout = require("../models/Workout");

module.exports = {
	// this method handles finding all articles in the db
  find: function(req, res) {
    console.log("Gathering saved workout from the db");
    Workout.find().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles adding new articles to the db
  insert: function(req, res) {
    console.log("Adding saved workout to the db");
    console.log("req.body: ", req.body);
    Workout.create(req.body).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles deleting articles from the db
  delete: function(req, res) {
    console.log("Deleting a saved workout from the db");
    Workout.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};





