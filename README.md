# sayegh
A module for making a server in just 2 lines.

__How to start:__

Simply require the module and give it a response message and an optional port number

	var server = require('sayegh');
	server.start("response", 80);

You can also create customized responses based on the route hit with the get() function
	
	server.get("/index", "response");
