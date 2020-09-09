// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// /
// ******************************************************************************
// *** Dependencies
// =============================================================
require("dotenv").config(); // this is important!
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("./config/passport");  // Requiring passport as we've configured it

// Sets up the Express App
// =============================================================
const PORT = process.env.PORT || 8080;
const db = require("./models"); // Requiring our models for syncing

// Creating express app and configuring middleware needed for authentication
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
app.use(express.static("public"));

// Sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/case-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/estate-law-api-routes.js")(app);
require("./routes/life-insurance-api-routes")(app);
require("./routes/funeral-api-routes")(app);
require("./routes/hospice-api-routes")(app);

// API requests
require("./api/yelp-api-data.js")(app);

// Test
// =============================================================
// TEST: /api/nodeFusion.js
// require("./api/nodeFusion.js");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  // sync({ force: true })
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
