/*
         
GWU Full Stack Web Development program
Al Curry          March 19, 2018

Homework 13 - Node JS, Express, Handlebars,  mySQL, "homemade" ORM, MVC structure.
  
server.js file - invoke with node, uses express et al.

 */

var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// make public directory available - "serve" it
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require & set up handlebars 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes from controllers allowing  the server access 
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
