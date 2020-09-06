// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// /
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
require("dotenv").config(); // this is important!
var exphbs = require("express-handlebars");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/user-api-routes.js")(app);

// Test
// =============================================================
// TEST: /api/nodeFusion.js
require("./api/nodeFusion.js");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  // sync({ force: true })
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
