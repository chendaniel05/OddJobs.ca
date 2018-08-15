var db = require("../models");

module.exports = function(app) {
  // Get all postings
  app.get("/api/postings", function(req, res) {
    db.Posting.findAll({}).then(function(dbPostings) {
      res.json(dbPostings);
    });
  });

  // Create a new posting
  app.post("/api/postings", function(req, res) {
    db.Posting.create(req.body).then(function(dbPosting) {
      res.json(dbPosting);
    });
  });

    // Get a posting by id ?
    // app.get("/api/posting/:id", function(req, res) {
    //   db.Posting.findOne({ where: { id: req.params.id } }).then(function(dbPostings) {
    //     res.json(dbPostings);
    //   });
    // });

  // Delete a posting by id
  app.delete("/api/postings/:id", function(req, res) {
    db.Posting.destroy({ where: { id: req.params.id } }).then(function(dbPosting) {
      res.json(dbPosting);
    });
  });
};
