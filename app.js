const express = require("express");
const mongoose = require("mongoose");


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




app.get("/", (req, res) => {
    res.send("All working Good!")
});


app.listen("8080", () => {
    console.log("Server is running Good!")
});