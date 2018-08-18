var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

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

  // Load Create Posting page
  app.get("/create-posting", isAuthenticated, function (req, res) {
    db.Posting.findAll({}).then(function (dbPostings) {
      res.render("create-posting", {
        user: req.user
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load Job Listing page
  app.get("/postings", function (req, res) {
    db.Posting.findAll({}).then(function (dbPostings) {
      res.render("postings", {
        postings: dbPostings

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // passport.js routes

  // app.get("/", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  // app.get("/login", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/create-posting", isAuthenticated, function(req, res) {
  //   res.render('create-posting');
  // });

};
