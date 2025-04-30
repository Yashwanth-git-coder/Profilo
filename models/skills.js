const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
    resume: {
        type: String,
        required: true
    },

    skills: {
        type: [String],
        required: true
    },

    service_title: {
        type: [String],
        required: true
    },

    service_description: {
        type: [String],
        required: true
    },

    tools:{
        type: [String],
        required: true
    },

});

const Skills = mongoose.model("Skills", skillsSchema);
module.exports = Skills;
