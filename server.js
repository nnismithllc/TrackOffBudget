const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));


mongoose.connect("mongodb://localhost/WorkOffBudget", {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});