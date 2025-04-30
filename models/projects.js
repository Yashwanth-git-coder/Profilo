const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project_image: {
        filename: { type: String },
        url: {
            type: String,
            default: "https://thumbs.dreamstime.com/b/comic-speech-bubble-cartoon-word-wow-vintage-style-comic-speech-bubble-cartoon-word-wow-vintage-style-illustration-design-text-158651844.jpg",
            set: (v) => v === "" ? "https://thumbs.dreamstime.com/b/comic-speech-bubble-cartoon-word-wow-vintage-style-comic-speech-bubble-cartoon-word-wow-vintage-style-illustration-design-text-158651844.jpg" : v,
            }
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    numberofprojects:{
        type: Number,
        required: true
    },

    projectlink: String,

});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
