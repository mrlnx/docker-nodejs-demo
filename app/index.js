// Dependencies
var express = require('express');
var mysql = require('mysql');

// Directories
var config = require('./config/config');
var repository = require('./repository/locations');

// rdbms
var connection = mysql.createConnection(config.mysql);

var connect = function() {
	
    return connection.connect(function(err){
		
		console.log("Which 1 = " + err);
			
		if(err){
			console.log('Error connecting to Db');
		} else {
			console.log('Connection established');
			
			init();
		}
	});
};
setTimeout(connect, 6000);

function init() {
	// -----
	// enable debugging
	var en_debug = true;

	// Constants
	var PORT = 3000;

	// App
	var app = express();

	app.get('/', function (req, res) {
	  res.send('Not found!');
	});

	// REST post
	app.post('/create', repository.create);

	// REST put
	app.post('/update/:id', repository.update);

	// REST get
	app.get('/delete/:id', repository.delete);
	app.get('/search/:term', repository.findAll);

	app.listen(PORT);

	// debugging
	if(en_debug) {
	   console.log('Running on http://localhost:' + PORT);
	}
}
