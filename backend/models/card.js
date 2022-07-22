const isUrl = require('validator/lib/isURL');
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
	squareMeters: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	month: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	project: {
		type: String,
		required: true,
	},
	// image: {
	//   type: String,
	//   required: true,
	//   validate: {
	//     validator: (url) => isUrl(url),
	//   },
	// },
	//
	name: {
		type: String,
		required: true,
	},
	street: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('card', cardSchema);
