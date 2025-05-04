const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Personal = require("./models/personal.js");
const Education = require("./models/education.js");
const Project = require("./models/projects.js");
const Skills = require("./models/skills.js");
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");



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
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(expressLayouts);
app.set("layout", "layouts/boilerplate"); // ✅ Set correct default layout
app.use(methodOverride("_method"));



app.get("/", (req, res) => {
    res.send("All working Good!")
});

// All Profiles ------------------------------------------------

app.get("/profilos", async (req, res) => {
    const allProfilos = await Personal.find({});
    res.render("profilo/index", { allProfilos });
});

// -------------------------------------------------------------

// Create new Profiles

app.get("/profilos/personal-new", (req, res) => {
    res.render("profilo/personalnew.ejs");
});

app.post("/profilos", async(req, res) => {
    const data = req.body.personal;

    const newpersonaldata = new Personal({
    ...data,
    pro_image: {
        url: data.pro_image || "https://thumbs.dreamstime.com/b/...", // set default if empty
        filename: "" // optional, or extract filename if needed
    }
  });

  await newpersonaldata.save();
  res.redirect("/profilos", { layout: false });
});

// -----------------------------------------------------------

// Show Profiles ---------------------------------------------

app.get("/profilos/:id", async (req, res) => {
    let { id } = req.params;
    const profilo = await Personal.findById(id);

    console.log(profilo);

    res.render("profilo/showprofile.ejs", {profilo, layout: false});
});

// -----------------------------------------------------------------------------

// Edit Route -------------------------------------------------------------------

app.get("/profilos/:id/edit", async (req, res) => {
  let { id } = req.params;
  const profiloedit = await Personal.findById(id);
  res.render("profilo/personaledit.ejs", { profiloedit });
});

// --------------------------------------------------------------------------------


//Update Route
app.put("/profilos/:id", async (req, res) => {
  let { id } = req.params;
  await Personal.findByIdAndUpdate(id, { ...req.body.personal });
  console.log()
  res.redirect(`/profilos/${id}`);
});



app.listen("8080", () => {
    console.log("Server is running Good!")
});