const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalsSchema = new Schema({
    pro_image: {
        filename: { type: String },
        url: {
            type: String,
            default: "https://thumbs.dreamstime.com/b/comic-speech-bubble-cartoon-word-wow-vintage-style-comic-speech-bubble-cartoon-word-wow-vintage-style-illustration-design-text-158651844.jpg",
            set: (v) => v === "" ? "https://thumbs.dreamstime.com/b/comic-speech-bubble-cartoon-word-wow-vintage-style-comic-speech-bubble-cartoon-word-wow-vintage-style-illustration-design-text-158651844.jpg" : v,
            }
    },

    name: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    title_description: {
        type: String,
        required: true
    },
    location: String,

    country: String,

    phone: Number,

    linkedIn: String,

    twitter: String,
});


const Personal = mongoose.model("Personal", personalsSchema);
module.exports = Personal;