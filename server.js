const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

mongoose.Promise = Promise;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var workoutController = require("./server/controllers/workout-controller");
var router = new express.Router();
//api routes if not using an api?
router.get("/all", function(req, res) {
	db.myworkouts.find({}, function(error, found) {
		if (error) {
			console.log(error);
		} else {
			res.json(found);
		}
	});
});

app.use(router);


const db = process.env.MONGODB_URI || "mongodb://localhost/myworkouts";
mongoose.connect(db, function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log("mongoose connection is successful");
	}
	});


app.listen(port, () => console.log(`Listening on port ${port}`));
