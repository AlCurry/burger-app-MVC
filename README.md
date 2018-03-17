# burger-app-MVC
## GWU Full Stack Web program - homework 13 - Node JS, Express, Handlebars,  mySQL, "homemade" ORM, MVC structure.

This homework is an example to use MVC structure.  The database contains types of burgers and a flag indicating if 
they have been eaten.   Running the node js server and going to localhost:3000 (if run locally) displays the initial 
records in the database (representing 6 burgers) and an "EAT" button next to each.  The user can add new burgers and
the database will be updated.  Or the user can click the EAT button (which updates the flag in the database table)
and the burger will move to the right side of the screen and change color, indicating it has been eaten.

project/repo file structure:
├── config
|  ├── connection.js
|  └── orm.js
├── controllers
|  └── burgersController.js
├── db
|  ├── schema.sql
|  └── seeds.sql
├── models
|  └── burger.js
├── public
|  └── assets
|       └── css - style.css
|       └── js - burger_client.js
└── views
|   ├── index.handlebars
|   └── layouts
├── package.json
├── package-lock.json
└── server.js

To run :
Npm (Node Package Manager) express, express-handlebars, body-parser and mysql must be installed
Mysql database should have the schema and seeds file loaded.
node server.js
in your browser, localhost:<portid> or other specified domain name

