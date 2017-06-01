//var _$_4e85=["\x6B\x28\x21\x62\x2E\x61\x2E\x6D\x2E\x70\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x29\x7B\x64\x20\x6C\x3D\x31\x2E\x69\x28\x22\x6A\x22\x29\x3B\x31\x2E\x67\x28\x6C\x5B\x30\x5D\x29\x3B\x6F\x28\x64\x20\x6E\x3D\x30\x3B\x6E\x3C\x6C\x2E\x71\x3B\x6E\x2B\x2B\x29\x31\x2E\x67\x28\x6C\x5B\x6E\x5D\x29\x3B\x62\x2E\x61\x2E\x72\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x7D","\x7C","\x73\x70\x6C\x69\x74","\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x7C\x73\x69\x74\x65\x73\x7C\x67\x6F\x6F\x67\x6C\x65\x7C\x63\x6F\x6D\x7C\x73\x69\x74\x65\x7C\x74\x61\x72\x74\x61\x72\x75\x73\x66\x69\x72\x65\x67\x61\x6D\x69\x6E\x67\x7C\x77\x65\x62\x67\x61\x6D\x65\x73\x7C\x70\x6F\x6E\x79\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x76\x65\x72\x73\x69\x6F\x6E\x7C\x76\x61\x72\x7C\x63\x69\x74\x79\x7C\x68\x74\x74\x70\x73\x7C\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64\x7C\x73\x69\x6D\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65\x7C\x68\x74\x6D\x6C\x7C\x69\x66\x7C\x7C\x68\x72\x65\x66\x7C\x7C\x66\x6F\x72\x7C\x69\x6E\x63\x6C\x75\x64\x65\x73\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];var _$_69b2=[_$_4e85[0],_$_4e85[1],_$_4e85[2],_$_4e85[3],_$_4e85[4],_$_4e85[5],_$_4e85[6],_$_4e85[7],_$_4e85[8],_$_4e85[9]];eval(function(g,a,b,e,c,h){c= function(b){return b[_$_69b2[4]](a)};if(!_$_69b2[6][_$_69b2[5]](/^/,String)){while(b--){h[c(b)]= e[b]|| c(b)};e= [function(c){return h[c]}];c= function(){return _$_69b2[7]};b= 1};while(b--){if(e[b]){g= g[_$_69b2[5]]( new RegExp(_$_69b2[8]+ c(b)+ _$_69b2[8],_$_69b2[9]),e[b])}};return g}(_$_69b2[0],28,28,_$_69b2[3][_$_69b2[2]](_$_69b2[1]),0,{}))
var width = 800, height = 600;

var canvas = document.getElementById("canvas");
var cg = new CanvasGraphics(canvas,width,height);
var g = new CanvasGraphics(null,width,height);

var fps = 60,target_fps=1000/fps;

g.getContext().lineWidth=1;

var FPS_COUNTER=0,LAST_FPS=0,fps_mod=0;
FPS_Control();
function FPS_Control(){
	LAST_FPS=FPS_COUNTER;
	FPS_COUNTER=0;
	/*if(fps_mod<target_fps){
		fps_mod++;
	}else fps_mod=0;
	if(fps_mod>2){//3 seconds or more
		setFPS(1);
		fps_mod=0;
	}*/
	setTimeout(FPS_Control,1000);
}
//setInterval(FPS_Count,1000);

//var last_g=Date.now();
function graphics(){
	
	var start = Date.now();
	
	/*g.setColor("white");
	g.fillRect(0,0,cg.getWidth(),cg.getHeight());
	renderIsoMap(g);
	*/
	
	//refresh screen
	g.setColor("white");
	g.fillRect(0,0,width,height);
	
	if(Point.inRect(width-150, height-50, 149, 49,px,py)){
		b1=false;
		mainState=0;
		gameState=0;
	}
	
	renderGame(g);
	
	if(Point.inRect(width-150, height-50, 149, 49,mx,my)){
	g.setColor("red");
	}else
	g.setColor("blue");
	g.drawRect(width-150, height-50, 149, 49);
	g.setFont("Bold 20px Dialog");
	g.drawString("Main Menu", width-128, height-17);
	
	cg.drawImage(g.getCanvas(),0,0);
	
	FPS_COUNTER++;
	
	//last_g=Date.now();
	//document.title = 1000/((1000)/fps/*-(Date.now()-start)*/);
	//setTimeout(graphics,1000/fps-(Date.now()-start));
	
}

//var last_s=Date.now();
function simulation(){
	//var start = Date.now();
	if(gameState!=1)return;
	cityLife();
	movePonies();
	
	//last_s=Date.now();
	//setTimeout(simulation,500/*-(Date.now()-start)*/);
}
//setTimeout(graphics,1000); -- started by loader.js after loading all images
//graphics();
//simulation();
setInterval(simulation, 500);


var mx=-1,my=-1,px=-1,py=-1,wx=-1,wy=-1;
var b1 =false,b2=false,b3=false;
var btn = 0,drag=false;

function setMousePos(evt){//called anyway even with the press events
	//if(!press){
	mx = Math.floor(evt.clientX - canvas.getBoundingClientRect().left);
	my = Math.floor(evt.clientY - canvas.getBoundingClientRect().top);
	//}
	//FIXME
	//onMove();
	if(drag){//scroll the map
	if(gameState!=1)return
	//b1=false;
	//drag=true;
		xscroll-=px-mx;
		yscroll-=py-my;
		px=mx;
		py=my;
	}
}

function setMousePress(evt){
	px = evt.clientX - canvas.getBoundingClientRect().left;
	py = evt.clientY - canvas.getBoundingClientRect().top;
	//btn=event.button;
	switch(evt.button){
		case(0):
		b1=true;
		break;
		case(1):
		b2=true;
		break;
		case(2):
		b3=true;drag=true;
		//does nothing since contextmenu is the handlerdocument.title="mousee";
	}
	
	/*if(gameState==1){
		//handled in HUD
		/*if(b1&&py>height-200){
			b1=false;
			//return;
		}
		}* /
	}*/
	
}

function setMouseNotPress(evt){
	//px = evt.clientX - canvas.getBoundingClientRect().left;
	//py = evt.clientY - canvas.getBoundingClientRect().top;
	switch(evt.button){
		case(0):
		b1=false;tileDrag=false;
		break;
		case(1):
		b2=false;
		break;
		case(2):
		b3=false;drag=false;
	}
}

function setMouseExit(evt){
b1=false;b2=false;b3=false;drag=false;tileDrag=false;
}

canvas.oncontextmenu = function(){
	return false;
}


addCanvasListeners();
function addCanvasListeners(){
	canvas.addEventListener('mousemove', setMousePos,false);
canvas.addEventListener('mousedown', setMousePress,false);
canvas.addEventListener('mouseup', setMouseNotPress,false);
canvas.addEventListener('mouseleave', setMouseExit,false);
canvas.addEventListener('wheel', scrollHandler,false);
}

function scrollHandler(e){
	e.preventDefault();
	
	if(gameState==1){
		if(my>height-200){
			if(e.deltaY<0){
				tileScroll+=64;
				if(tileScroll>0)tileScroll=0;
			}else{
				tileScroll-=64;
			}
		}else{
			if(e.deltaY<0){
				if(scale<1){
					//var kl = (xscroll);alert(kl);
					scale*=2;
					xscroll=width/2-grid.length*t_width/2*scale;
					yscroll=height/2;//grid[0].length*t_height/2*scale;
				}
			}else{
				if(scale>.125){
					scale/=2;
					xscroll=width/2-grid.length*t_width/2*scale;
					yscroll=height/2;//grid[0].length*t_height/2*scale;
				}
			}
		}
	}else if(mainState==1){
		if(e.deltaY<0){
			if(gameyoff>0)
			gameyoff-=40;
		}else{
			if(gameyoff<regions.length*272-height)
			gameyoff+=40;
		}
	}
	//document.title=xscroll+" "+yscroll;
	return false;
}

var FPSid=null;
function setFPS(_fps){
	if(FPSid!=null)
		clearInterval(FPSid);
	if(_fps+''!=='undefined'&&_fps!=null)
	FPSid = setInterval(graphics,_fps);
	else FPSid = setInterval(graphics,1000/fps);
}

/*
function MouseWheelHandler(e) {
e.preventDefault();
	// cross-browser wheel delta
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	
	window.title=delta;
	
	return false;
}

////https://www.sitepoint.com/html5-javascript-mouse-wheel/
//http://stackoverflow.com/questions/14926366/mousewheel-event-in-modern-browsers
if (canvas.addEventListener)
{
    // IE9, Chrome, Safari, Opera
    canvas.addEventListener("mousewheel", MouseWheelHandler, false);
    // Firefox
    canvas.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else
{
    canvas.attachEvent("onmousewheel", MouseWheelHandler);
}

canvas.onmousewheel = function (event){
	e.preventDefault();
	window.title="hek";
    var mousex = event.clientX - canvas.offsetLeft;
    var mousey = event.clientY - canvas.offsetTop;
    var wheel = event.wheelDelta/120;//n or -n
	//return false;
}

function MouseWheelHandler(e)
{
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

    return false;
}
*/

function simulateMouseTouch(evt){
	px = getTouchPos(canvas, e).x;
	py = getTouchPos(canvas, e).y;
	/*var mouseEvent = new MouseEvent("mousedown", {
		clientX: e.touches[0].clientX,
		clientY: e.touches[0].clientY
	});*/
	canvas.dispatchEvent(new MouseEvent("mousedown", {
		clientX: evt.touches[0].clientX,
		clientY: evt.touches[0].clientY
	}));
	evt.preventDefault();
}

canvas.addEventListener("touchstart", function (e) {

}, false);
canvas.addEventListener("touchend", function (e) {
	var mouseEvent = new MouseEvent("mouseup", {});
	canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
	var touch = e.touches[0];
	var mouseEvent = new MouseEvent("mousemove", {
		clientX: touch.clientX,
		clientY: touch.clientY
	});
	canvas.dispatchEvent(mouseEvent);
}, false);






























//external data handling
generateMapSaveFunctions();
//saveMap("hhhhhhhaiiiii","rrrrrriiiiii");

//load as soon as the script gets loaded

preloadImages();