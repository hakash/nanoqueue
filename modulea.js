(function(){

	"use strict";
		
	if(typeof window._Q === "undefined"){
		throw new Error("NanoQueue not found.");
	}

	// Get the global Singleton instance object
	// You can also use NanoQueue.getInstance()
	var q = window._Q.getInstance();
	
	//Change this to be your unique module name
	var moduleName = "ModuleA";
	
	// Flesh this out with your logic. Sample methods are provided	
	var module = function(){

		this.publishNewBooking = function(booking){

			// Sample standardized format for new calendar bookings messages
			var message = {
				data : {
					"bookings": [ booking ],
				},
				"created" : new Date().toISOString()
			};

			// Publish to the specified topic, supplying the data
			q.publishTo("calendar.data.new", message);	
		};

		this.doStuff = function(){
			// Do some useful stuff to the input and build an object to share
			// lets pretend we have gotten som data from a calendar service
			var d = new Date();
			var dateFrom = d.toISOString();

			d.setHours(d.getHours() + 1);
			var dateTo = d.toISOString();

			var booking = {
				"date-from" : dateFrom,
				"date-to" : dateTo,
				"subject" : "Test",
				"body" : "This is a test"
			};

			// And we are publishing it!
			this.publishNewBooking(booking);
		};
	};
	
	q.regsiterModule(moduleName, module);
})();