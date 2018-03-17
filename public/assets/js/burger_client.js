/*
GWU Full Stack Web Development program      
Al Curry          March 19, 2018
    
Homework 13 - Node JS, Express, Handlebars,  mySQL, "homemade" ORM, MVC structure.
  
client side javascript file, burger_client.js, linked to page in main.handlbars
initiates PUT or POST calls to server on clicking of "EAT"or "Add Burger" buttons.

 */

// wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoBurg").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true
    }).then(
      function() {
        console.log("changed devoured to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
      //devoured: $("[name=devoured]:checked").val().trim()
      devoured: 0
    };      

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
