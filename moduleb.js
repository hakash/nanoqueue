window.nqmodules.ModuleB = (function(){

	"use strict";
	
	if(typeof window._Q === "undefined"){
		throw new Error("NanoQueue not found.");
	}

	// Get the global Singleton instance object
	// You can also use NanoQueue.getInstance()
	var q = window._Q.getInstance();

	
	return function(){
		// message handler function
		this.updateUI = function(data){

			var selector = "#moduleB .result code";
			var encodedData = JSON.stringify(data, null,'\t');
			// do some important UI stuff, in this example we'll just display as JSON
			document.querySelector(selector).innerHTML = encodedData;
			
			// notify the world that we updated someting
			var msg = {
				node : {
					selector : selector,
					newValue : encodedData
				},
				canHighlight : true
			};
			
			q.publishTo("dom.node.change", msg);
		};

		// Subscribe to the specified topic, supplying the callback
		q.subscribeTo("calendar.data.new", this.updateUI);
		
	};

})();