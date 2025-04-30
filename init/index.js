const mongoose = require("mongoose");
const Personal = require("../models/personal.js");
const Education = require("../models/education.js");
const Project = require("../models/projects.js");
const Skills = require("../models/skills.js");
const initpersonalData = require("./personaldata.js");
const initeducationData = require("./educationdata.js");
const initprojectData = require("./projectdata.js");
const initskillsData = require("./skillsdata.js");



main()
    .then(() => {
        console.log("connected to DB!");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/profilo')
    .then(() => {
        console.log("connected to DB!");
    })
    .then(() => {
        console.log("Data inserted successfully!");
    })
    .catch((err) => {
        console.error("Insertion failed:", err);
    });
}

const initDB = async () => {
    await Personal.deleteMany({});
    await Education.deleteMany({});
    await Project.deleteMany({});
    await Skills.deleteMany({});

    await Personal.insertMany(initpersonalData.data);
    await Education.insertMany(initeducationData.data);
    await Project.insertMany(initprojectData.data);
    await Skills.insertMany(initskillsData.data);


    console.log("Data was Initsitlazed!");
}

initDB();
