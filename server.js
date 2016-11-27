// server.js

// Generate a new instance of express server.
var express = require('express')
  , http = require('http');

var app = express();

/* This will allow Cozy to run your app smoothly but
 it won't break other execution environment */
var port = process.env.PORT || 8000;
var host = process.env.HOST || "localhost";

// Starts the server itself
var server = http.createServer(app).listen(port, host, function() {
  console.log("Server listening to %s:%d within %s environment",
              host, port, app.get('env'));
});

// At the root of your website, we show the index.html page
app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});