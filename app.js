const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Personal = require("./models/personal.js");
const Education = require("./models/education.js");
const Project = require("./models/projects.js");
const Skills = require("./models/skills.js");


const app = express();
const MONGOSERVER = "mongodb://127.0.0.1:27017/profilo";


main()
    .then(() => {
        console.log("connected to DB.");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGOSERVER);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("All working Good!")
});

app.get("/profilos", async (req, res) => {
    const allProfilos = await Personal.find({});
    res.render("profilo/index", {allProfilos});
});


app.listen("8080", () => {
    console.log("Server is running Good!")
});