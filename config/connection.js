/*
         
    Al Curry          March 19, 2018
    
    GWU Full Stack Web Development program

    Homework 13 - Node JS, Express, Handlebars,  mySQL, "homemade" ORM, MVC structure.

    set up mysql connection, make connect, and export for our ORM to use.
*/
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
