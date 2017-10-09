
var ModuleB = (function(){

	return new function(){
		// message handler function
		this.updateUI = function(data){
			// do some important UI stuff, in this example we'll just display as JSON
			document.querySelector("#moduleB .result").innerHTML = JSON.stringify(data, null,'\t');
		}

		// Get the global Singleton instance object
		// You can also use NanoQueue.getInstance()
		this.q = _Q.getInstance();

		// Subscribe to the specified topic, supplying the callback
		this.q.subscribeTo("calendar.data.new", this.updateUI);
		
	}

})();