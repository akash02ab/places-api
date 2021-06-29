const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PlacesController = require("./controllers/placesController");

mongoose.connect("mongodb://127.0.0.1:27017/places", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.post("/places", async (req, res) => {
	let response = await PlacesController.addPlaces(req.body);

	if (response.status) {
		return res.status(200).json(response.result);
	} else {
		return res.status(401).json(response.result);
	}
});

app.get("/places", async (req, res) => {
	let query = req.query;
	let params = {};
	for (let key in query) {
		params[key] = query[key].replaceAll("%", " ");
	}
	res.status(200).json(params);
});

app.listen(8080, () => console.log("Server is listening at PORT 8080"));
