var ModuleA = (function(){

	return new function(){

		// Get the global Singleton instance object
		// You can also use NanoQueue.getInstance()
		this.q = _Q.getInstance();

		this.publishNewBooking = function(booking){

			// Sample standardized format for new calendar bookings messages
			var message = {
				data : {
					"bookings": [ booking ],
				},
				"created" : new Date().toISOString()
			};

			// Publish to the specified topic, supplying the data
			this.q.publishTo("calendar.data.new", message);	
		}

		this.doStuff = function(){
			// Do some useful stuff to the input and build an object to share
			// lets pretend we have gotten som data from a calendar service
			var d = new Date();
			var dateFrom = d.toISOString();

			d.setHours(d.getHours() + 1)
			var dateTo = d.toISOString();

			var booking = {
				"date-from" : dateFrom,
				"date-to" : dateTo,
				"subject" : "Test",
				"body" : "This is a test"
			};

			// And we are publishing it!
			this.publishNewBooking(booking);
		}
	}
	
})();	