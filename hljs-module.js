(function(){

	"use strict";
		
	if(typeof _Q === "undefined"){
		throw new Error("NanoQueue not found.");
	}

	if(typeof hljs === "undefined"){
		throw new Error("Highlight JS not found");
	}

	class HighlightJS {

		constructor(nanoqueue, hljs){
			this.q = nanoqueue;
			this.hljs = hljs;
			
			this.name = this.constructor.name;
			
			// Subscribe to the specified topic, supplying the callback
			this.q.subscribeTo("dom.node.change", this.highlightBlock.bind(this));
		}
				
		highlightBlock( data ) {
			var node = data.node.selector;

			if(data.canHighlight === true){
				this.hljs.configure({useBR:true, tabReplace:"    "})
				this.hljs.highlightBlock(document.querySelector(node));
			}
		}	
	}

	var mod = new HighlightJS(_Q, hljs);
	_Q.regsiterModule(mod.name, mod);
	
})();	