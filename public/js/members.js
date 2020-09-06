$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    console.log(data); // Object { email: "email@email.com", id: 1 }
    $(".member-name").text(data.email);
  });
});
