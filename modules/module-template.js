(function(){

	"use strict";
		
	if(typeof window._Q === "undefined"){
		throw new Error("NanoQueue not found.");
	}

	var q = window._Q;
	
	//Change this to be your unique module name
	var moduleName = "My Module Name";
	
	// Flesh this out with your logic. Sample methods are provided
	var module = (function(){

		this.publishExample = function(){
			// Publish to the specified topic, supplying the data
			q.publishTo("example.topic", "Hello! This is an example message!");	
		};

		// Subscribe to a topic and provide the handler
		q.subscribeTo("example.topic", (data) => {
			// Do some awesome stuff here :)
			console.log("Got data: " + data);
		});
	})();
	
	q.registerModule(moduleName, module);
	
})();	
