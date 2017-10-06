var _Q = NanoQueue = (function(){

	//inner object section
	var Q = function(){
		var events = {};
	
		var on = function(eventName, action, signature) {
			if(!this.events[eventName]){
				this.events[eventName] = {};
			}
			
			if(!signature){
				signature = md5(JSON.stringify(action));
			}
			
			this.events[eventName][signature] = action;
		};

		var once = function(eventName, action){
			var sig = md5(JSON.stringify(action));
			var oncie = function(event){
				action(event);
				Q.remove(eventName, sig);
			}
			this.on(eventName, oncie, sig);
		}

		var remove = function(eventName, signature){
			delete this.events[eventName][signature];
		}

		var trigger = function(eventName, event){
			var actions = this.events[eventName];
			for(var action in actions){
				if(actions.hasOwnProperty(action)){
					actions[action](event);
				}
			}
		}
	}

	// Singleton setup section
	var instance;

	function createInstance(){
		return new Q();
	} 

	return {
		getInstance : function(){
			if(!instance){
				instance = createInstance();
			}
			return instance;
		}
	}
})();