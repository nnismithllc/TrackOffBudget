// Mongoose Variables
let mongoose = require("mongoose");
let db = require("../models");

// Mongoose Connector to the Database
mongoose.connect("mongodb://localhost/workofftrack", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Seed Database Information
let workoffSeed = [


];

// Seed Delete Function w/ Errors
db.WorkOffTrack.enterMany({})
  .then(() => db.WorkOffTrack.collection.insertMany(workoffSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
