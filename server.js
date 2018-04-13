const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
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
app.use(express.static("client/build"));
app.use(routes);

//api routes if not using an api?
// router.get("/all", function(req, res) {
// 	db.myworkouts.find({}, function(error, found) {
// 		if (error) {
// 			console.log(error);
// 		} else {
// 			res.json(found);
// 		}
// 	});
// });

// router.get("/api/saved", workoutController.find);
// router.post("/api/saved", workoutController.insert);
// router.delete("/api/saved/:id", workoutController.delete);
// router.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// app.use(router);


const db = process.env.MONGODB_URI || "mongodb://localhost/myworkouts";
mongoose.connect(db, function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log("mongoose connection is successful");
	}
	});


app.listen(port, () => console.log(`Listening on port ${port}`));
