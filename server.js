// Variables for Application
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// Express and Port Processing
var app = express();
var PORT = process.env.PORT || 3000;


app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// App Public Use
app.use(express.static("public"));

// App Routes Use
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// Mongoose Database Connection
mongoose.connect("mongodb://localhost/WorkOffBudget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Port Init and Information
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});