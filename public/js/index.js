// Get references to page elements
var $postingTitle = $("#posting-title");
var $postingDescription = $("#posting-description");
var $postingEmployer = $("#posting-employer");
var $postingLocation = $("#posting-location");
var $submitBtn = $("#submit");
var $postingList = $("#posting-list");

// The API object contains methods for each kind of request we'll make
var API = {
  savePosting: function (posting) {
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
      type: "DELETE"
    });
  }
};

// refreshPostings gets new postings from the db and repopulates the list
var refreshPostings = function () {
  API.getPostings().then(function (data) {
    var $postings = data.map(function (posting) {
      var $a = $("<a>")
        .text(posting.title)
        .attr("href", "/posting/" + posting.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": posting.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $postingList.empty();
    $postingList.append($postings);
    window.location.replace("/postings");
  });
};

// handleFormSubmit is called whenever we submit a new posting
// Save the new posting to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var posting = {
    title: $postingTitle.val().trim(),
    description: $postingDescription.val().trim(),
    employer: $postingEmployer.val().trim(),
    location: $postingLocation.val().trim()
  };

  if (!(posting.title && posting.description && posting.location && posting.employer)) {
    alert("You must fill up all the fields!");
    return;
  }

  API.savePosting(posting).then(function () {
    refreshPostings();
  });

  // Empty each input box by replacing the value with an empty string
  $postingTitle.val("");
  $postingDescription.val("");
  $postingEmployer.val("");
  $postingLocation.val("");
};

// handleDeleteBtnClick is called when an posting's delete button is clicked
// Remove the posting from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deletePosting(idToDelete).then(function () {
    refreshPostings();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$postingList.on("click", ".delete", handleDeleteBtnClick);

