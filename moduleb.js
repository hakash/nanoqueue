
var ModuleB = (function(){

	return new function(){
		// message handler function
		this.updateUI = function(data){

			var selector = "#moduleB .result code";
			var encodedData = JSON.stringify(data, null,'\t');
			// do some important UI stuff, in this example we'll just display as JSON
			document.querySelector(selector).innerHTML = encodedData;
			
			// notify the world that we updated someting
			var data = {
				node : {
					selector : selector,
					newValue : encodedData
				},
				canHighlight : true
			};
			
			_Q.getInstance().publishTo("dom.node.change", data);
		}

		// Get the global Singleton instance object
		// You can also use NanoQueue.getInstance()
		this.q = _Q.getInstance();

		// Subscribe to the specified topic, supplying the callback
		this.q.subscribeTo("calendar.data.new", this.updateUI);
		
	}

})();