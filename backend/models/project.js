const isUrl = require('validator/lib/isURL');
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
	image: {
	  type: String,
	  required: true,
	  validate: {
	    validator: (url) => isUrl(url),
	  },
	},
	name: {
		type: String,
		required: true,
	},
	street: {
		type: String,
		required: true,
	},
	projectTitle: {
		type: String,
		required: true,
	},
	projectText: {
		type: String,
		required: false,
	},
	projectText2: {
		type: String,
		required: false,
	},
	optText: {
		type: String,
		required: false,
	},
	optText2: {
		type: String,
		required: false,
	},
	optText3: {
		type: String,
		required: false,
	},
	optText4: {
		type: String,
		required: false,
	},
	imageGallery: {
		type: String,
		required: false,
		validate: {
			validator: (url) => isUrl(url),
		},
	},
	imageGallery2: {
		type: String,
		required: false,
		validate: {
			validator: (url) => isUrl(url),
		},
	},
	imageGallery3: {
		type: String,
		required: false,
		validate: {
			validator: (url) => isUrl(url),
		},
	},
	imageGallery4: {
		type: String,
		required: false,
		validate: {
			validator: (url) => isUrl(url),
		},
	},
});

module.exports = mongoose.model('projects', projectSchema);
