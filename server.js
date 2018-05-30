var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// sets up express to allow the use of relative file paths in client side files
app.use(express.static(path.join(__dirname, "./app/public")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

