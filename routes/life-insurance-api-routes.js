// Dependencies
// =============================================================
// Requiring our User model
var db = require("../models");

module.exports = function (app) {
  app.post("/api/cases/insurances", function (req, res) {
    db.LifeInsurance.create({
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
    }).then(function (dbLifeinsurance) {
      res.json(dbLifeinsurance);
    });
  });

  app.get("/api/cases/insurances/:id", function (req, res) {
    db.LifeInsurance.findAll({
      where: { CaseId: req.params.id },
    }).then(function (data) {
      res.json(data);
    });
  });

  // Update row by id
  app.put("/api/cases/insurances/:id", function(req, res) {
    db.LifeInsurance.update({
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
