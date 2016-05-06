module.exports = {
	app: null,
	start: function (message, port) {
		var express = require('express');
		var app = express();
		this.app = app;
		if (port === undefined) {
			port = 80;
		}
		app.listen(port);
		console.log("listening on port " + port)
		app.get('/', function (req, res) {
			res.end(message);
		});
	},
	get: function (route, response) {
		this.app.get(route, function (req, res) {
			res.end(response);
		});
	}
}