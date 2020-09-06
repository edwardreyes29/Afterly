// Dependencies
// =============================================================

// Requiring our User model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    
    // GET route for getting all users
    app.get("/api/users", function(req, res) {
        db.User.findAll({}).then(function(dbUsers) {
            res.json(dbUsers);
        });
    });

    // GET route to get a specific user
    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({ 
            where: { id: req.params.id } 
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // POST route for saving new user
    app.post("/api/users", function(req, res) { // req.body.birthday = "January 1, 1970"
        db.User.create({
            name: req.body.name,
            birthday: new Date(req.body.birthday),
            zipCode: req.body.zipCode
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // DELETE route for deleting a user
    app.delete("/api/users/:id", function(req, res) {
        db.User.destroy({
            where: { id: req.params.id }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // PUT route for updating a user's general information
    app.put("/api/users", function(req, res) {
        db.User.update({
            name: req.body.name,
            birthday: new Date(req.body.birthday),
            zipCode: req.body.zipCode
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
}