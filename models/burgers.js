/*
         
Al Curry          March 19, 2018
    
GWU Full Stack Web Development program

Homework 13 - Node JS, Express, Handlebars,  mySQL, "homemade" ORM, MVC structure.
  
Require our ORM file, create a burger object with the appropriate methods.

 */
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_ontrollers.js).
module.exports = burger;
