### Schema
/*
         
    Al Curry          March 19, 2018
    
    GWU Full Stack Web Development program

    Homework 13 - Node JS, Express, Handlebars,  mySQL, "homemade" ORM, MVC structure.

    Defines burgers_db and burgers table  - db part of "burger-app".
*/

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(50) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
