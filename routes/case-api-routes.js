// Dependencies
// =============================================================

// Requiring our User model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    
    // GET route for getting all users
    app.get("/api/cases", function(req, res) {
        db.Case.findAll({}).then(function(dbCases) {
            res.json(dbCases);
        });
    });

    // GET route to all cases with a specific user id
    app.get("/api/cases/:id", function(req, res) {
        db.Case.findAll({ 
            where: { UserId: req.params.id } 
        }).then(function(dbCase) {
            res.json(dbCase);
        });
    });

    app.get("/api/cases/search/:id", function(req, res) {
        db.Case.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbCase) {
            res.json(dbCase);
        })
    })

    // POST route for saving new case
    app.post("/api/cases", function(req, res) { // req.body.birthday = "January 1, 1970"
        db.Case.create({
            name: req.body.name,
            birthday: new Date(req.body.birthday),
            zipCode: req.body.zipCode,
            UserId: req.body.UserId
        }).then(function(dbCase) {
            res.json(dbCase);
        });
    });

    // DELETE route for deleting a user
    app.delete("/api/cases/:id", function(req, res) {
        db.Case.destroy({
            where: { id: req.params.id }
        }).then(function(dbCase) {
            res.json(dbCase);
        });
    });

    // PUT route for updating a user's general information
    app.put("/api/cases", function(req, res) {
        db.Case.update({
            name: req.body.name,
            birthday: new Date(req.body.birthday),
            zipCode: req.body.zipCode
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbCase) {
            res.json(dbCase);
        });
    });
}