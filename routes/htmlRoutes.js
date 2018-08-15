var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Posting.findAll({}).then(function (dbPostings) {
      res.render("index", {
        msg: "Welcome to OddJobs.ca!",
        postings: dbPostings
      });
    });
  });

  // Load posting page and pass in a posting by id
  app.get("/posting/:id", function (req, res) {
    db.Posting.findOne({ where: { id: req.params.id } }).then(function (dbPosting) {
      res.render("posting", {
        posting: dbPosting
      });
    });
  });

  // Load create posting page
  app.get("/create-posting", function (req, res) {
    db.Posting.findAll({}).then(function (dbPostings) {
      res.render("create-posting", {
        msg: "Welcome to OddJobs.ca!",
        postings: dbPostings
      });
    });
  });

  // Load Job Listing page
  app.get("/postings", function (req, res) {
    db.Posting.findAll({}).then(function (dbPostings) {
      res.render("postings", {
        msg: "Welcome to OddJobs.ca!",
        postings: dbPostings
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
  
}