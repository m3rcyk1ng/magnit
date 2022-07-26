const isUrl = require('validator/lib/isURL');
const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
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
  updatedBy: {
    type: String,
    required: true,
  },
  workload: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  conditions: [{
    type: String,
    required: true,
  }],
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("vacancies", vacancySchema);
