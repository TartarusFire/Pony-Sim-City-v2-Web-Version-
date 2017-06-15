/*function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("demo_workers.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

function stopWorker() { 
    w.terminate();
    w = undefined;
}*/


/**
var AdvGraphics = new function(){ 
	
	this.on=false;
	this.ready=false;
	
	this.layer1 = new CanvasGraphics(null,800,600);
	this.layer2 = new CanvasGraphics(null,800,600);
	
	this.altCoreRender = new function(){
		
	}

	this.dualCoreRender = new function(){
		
	}

}
//**/