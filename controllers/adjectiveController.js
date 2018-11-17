const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Adjective
      .findAll(req.query)
      .sort({date : -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req,res) {
    db.Adjective
      .findById(req.params.id)
      .then(dbModel => res.json)
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("inside create, req.body");
    db.Adjective
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Adjective
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};