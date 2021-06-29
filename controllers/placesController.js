const PlacesModel = require("../models/placesModel");

async function addPlaces({ name, city, state }) {
	try {
		const place = new PlacesModel({
			name,
			slug: name.replace(/ /g, "-").toLowerCase(),
			city,
			state,
		});
		const savedPlace = await place.save();
		return { status: true, result: savedPlace };
	} catch (err) {
		return { status: false, result: err.message };
	}
}

async function getPlaces(query) {
	try {
		let places = await PlacesModel.find(query);

		if (places.length) {
			return { status: true, result: places };
		} else {
			return { status: false, result: "No such place found" };
		}
	} catch (err) {
		return { status: false, result: err.message };
	}
}

async function getSpecificPlace(id) {
	try {
		let place = await PlacesModel.findOne({ slug: id });

		if (place) {
			return { status: true, result: place };
		} else {
			return { status: false, result: "Invalid Slug" };
		}
	} catch (err) {
		return { status: false, result: err.message };
	}
}

module.exports = {
	addPlaces,
	getPlaces,
	getSpecificPlace,
};
