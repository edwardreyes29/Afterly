// Dependencies
// =============================================================
// Requiring our User model
var db = require("../models");

module.exports = function (app) {
  app.post("/api/cases/Funeral", function (req, res) {
    db.Funeral.create({
      business_id: req.body.business_id,
      name: req.body.name,
      image_url: req.body.image_url,
      phone: req.body.phone,
      rating: req.body.rating,
      display_phone: req.body.display_phone,
      //location: JSON.stringify(req.body.location),
      // photos: JSON.stringify(req.body.photos),
      // hours: JSON.stringify(req.body.hours),
      // messaging: JSON.stringify(req.body.messaging)
      CaseId: req.body.CaseId,
    }).then(function (dbFuneral) {
      res.json(dbFuneral);
    });
  });

  app.get("/api/cases/Funeral/:id", function (req, res) {
    db.Funeral.findAll({
      where: { CaseId: req.params.id },
    }).then(function (data) {
      res.json(data);
    });
  });
};
