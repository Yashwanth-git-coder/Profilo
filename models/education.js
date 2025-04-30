const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  education: [
    {
      institute: {
        type: String
      },
      degree: {
        type: String,
        required: true
      },
      fieldOfStudy: {
        type: String
      },
      startYear: {
        type: Number
      },
      endYear: {
        type: Number
      },
      grade: {
        type: String
      },
      description: {
        type: String
      }
    }
  ]
});

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;
