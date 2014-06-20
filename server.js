'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
  passport = require('passport'),
  request = require('request'),
  logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Initializing system variables
var config = require('./server/config/config');
// var db = mongoose.connect(config.db);

// // Bootstrap Models, Dependencies, Routes and the app as an express app
// var app = require('./server/config/system/bootstrap')(passport, db);

// // Start the app by listening on <port>, optional hostname
// app.listen(config.port, config.hostname);
// console.log('Mean app started on port ' + config.port + ' (' + process.env.NODE_ENV + ')');

// // Initializing logger
// logger.init(app, passport, mongoose);

// // Expose app
// exports = module.exports = app;


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello CA-Storage\n');
}).listen(process.env['PORT'] || 8080, '127.0.0.1');