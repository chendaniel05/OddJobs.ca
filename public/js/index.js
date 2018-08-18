// Get references to page elements
var $postingTitle = $("#posting-title");
var $postingDescription = $("#posting-description");
var $postingEmployer = $("#posting-employer");
var $postingLocation = $("#posting-location");
var $postingSalary = $("#posting-salary");
var $postingAvailability = $("#posting-availability");
var $submitBtn = $("#submit");
// var $postingList = $("#posting-list");

// The API object contains methods for each kind of request we'll make
var API = {
  savePosting: function (posting) {

var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/postings",
      data: JSON.stringify(posting)
    });
  },
  getPostings: function () {
    return $.ajax({
      url: "api/postings",
      type: "GET"
    });
  },
  deletePosting: function (id) {
    return $.ajax({
      url: "api/postings/" + id,

      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshPostings gets new postings from the db and repopulates the list
// var refreshPostings = function () {
//   API.getPostings().then(function (data) {
//     console.log("after get postings", data);
//     var $postings = data.map(function (posting) {
//       var $a = $("<a>")
//         .text(posting.title)
//         .attr("href", "/posting/" + posting.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": posting.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $postingList.empty();
//     $postingList.append($postings);
//     // window.location.replace("/posting/");
//   });
// };

// handleFormSubmit is called whenever we submit a new posting
// Save the new posting to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var posting = {
    title: $postingTitle.val().trim(),
    description: $postingDescription.val().trim(),
    employer: $postingEmployer.val().trim(),
    location: $postingLocation.val().trim(),
    salary: $postingSalary.val().trim(),
    availability: $postingAvailability.val().trim()
  };

  if (!(posting.title && posting.description && posting.location && posting.employer)) {
    alert("You must fill up all the mandatory fields!");
    return;
  }

  API.savePosting(posting)
    .then(function (newPost) {
      console.log("after ajax request to save post", newPost);
      window.location.replace("/posting/"+newPost.id);
      // refreshPostings();
    });

  // Empty each input box by replacing the value with an empty string
  $postingTitle.val("");
  $postingDescription.val("");
  $postingEmployer.val("");
  $postingLocation.val("");
  $postingSalary.val("");
  $postingAvailability.val("");
};

// handleDeleteBtnClick is called when an posting's delete button is clicked
// Remove the posting from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deletePosting(idToDelete).then(function () {
//     refreshPostings();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $postingList.on("click", ".delete", handleDeleteBtnClick);

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
