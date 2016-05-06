module.exports = {
	start: function(port, message){
		var express = require('express');
		var app = express();
		if(port === undefined){
			port = 80;
		}
		app.listen(port);
		console.log("listening on port " + port)
		app.get('/', function(req, res){
			res.end(message);
		});
	}
}