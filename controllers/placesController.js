const PlacesModel = require("../models/placesModel");

async function addPlaces({ name, slug, city, state }) {
	try {
		const place = new PlacesModel({
			name,
			slug,
			city,
			state,
		});
		const savedPlace = await place.save();
		return { status: true, result: savedPlace };
	} catch (err) {
		return { status: false, result: err.message };
	}
}

async function getSpecificPlace(name) {
	try {
		let place = await PlacesModel.findOne({ name });
		return { status: true, result: place };
	} catch (err) {
		return { status: false, result: err.message };
	}
}

module.exports = {
	addPlaces,
	getSpecificPlace,
};
