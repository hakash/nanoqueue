(function(){

	"use strict";
	
	if(typeof _Q === "undefined"){
		throw new Error("NanoQueue not found.");
	}

	class ModuleB {
		
		constructor(nanoqueue){
			this.q = nanoqueue;
			
			// Using the class name for the module name, feel free to use something else. 
			this.name = typeof this;
			
			// Subscribe to the specified topic, supplying the callback
			this.q.subscribeTo("calendar.data.new", this.updateUI);

		}
		
		// message handler function
		updateUI(data){

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
			
			this.q.publishTo("dom.node.change", msg);
		}
		
	}
	
	var mod = new ModuleB(_Q);
	_Q.regsiterModule(mod.name, mod);
	
})();