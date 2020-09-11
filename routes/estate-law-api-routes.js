// Dependencies
// =============================================================

// Requiring our User model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  app.post("/api/cases/lawyers", function (req, res) {
    db.EstateLaw.create({
      business_id: req.body.business_id,
      name: req.body.name,
      image_url: req.body.image_url,
      phone: req.body.phone,
      rating: req.body.rating,
      display_phone: req.body.display_phone,
      location: JSON.stringify(req.body.location),
      photos: JSON.stringify(req.body.photos),
      hours: JSON.stringify(req.body.hours),
      messaging: JSON.stringify(req.body.messaging),
      CaseId: req.body.CaseId,
    }).then(function (dbEstateLaw) {
      res.json(dbEstateLaw);
    });
  });

  app.get("/api/cases/lawyers/:id", function (req, res) {
    db.EstateLaw.findAll({
      where: { CaseId: req.params.id },
    }).then(function (data) {
      res.json(data);
    });
  });

  // Update row by id
  app.put("/api/cases/lawyers/:id", function(req, res) {
    db.EstateLaw.update({
      business_id: req.body.business_id,
      name: req.body.name,
      image_url: req.body.image_url,
      phone: req.body.phone,
      rating: req.body.rating,
      display_phone: req.body.display_phone,
      location: JSON.stringify(req.body.location),
      photos: JSON.stringify(req.body.photos),
      hours: JSON.stringify(req.body.hours),
      messaging: JSON.stringify(req.body.messaging),
      CaseId: req.body.CaseId,
    }, {
      where: {
        id: req.params.id // update first row only
      }
    }).then(function(data) {
      res.json(data);
    })
  });

};