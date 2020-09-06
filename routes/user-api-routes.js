// Dependencies
// =============================================================

// Requiring our User model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // POST route for saving new user
    app.post("/api/users", function(req, res) {
        // req.body.birthday = {month: 6, day: 20, year: 1980}
        console.log(req.body);
        db.User.create({
            // name: req.body.name,
            // birthday: new Date(req.body.birthday.year, req.body.birthday.month, req.body.birthday.year),
            // zipCode: req.body.zipCode
            name: "Bobby Baratheon",
            birthday: new Date(1980, 6, 20),
            zipCode: "91001"
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

}