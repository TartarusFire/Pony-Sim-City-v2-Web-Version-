var Point = new function(){
	this.inRect=function(rx, ry, rw, rh, x, y) {
		return (x > rx) && (x < rx + rw) && (y > ry) && (y < ry + rh);
	}

	this.inCircle=function(rx, ry, rm, x, y) {
		return (Math.sqrt((x - rx - rm) * (x - rx - rm) + (y - ry - rm) * (y - ry - rm)) <= rm);
	}
	
	this.inDiamond=function(x,y,xsize,ysize,px,py){
		return Point.inRect(0,0,xsize,ysize,px-x-xsize/2+(py-y)*xsize/ysize,py-y)
				&&Point.inRect(0,0,xsize,ysize,px-x,py-y+ysize/2-(px-x)*ysize/xsize);
	}
	
	this.inCube=function(x,y,xsize,ysize,px,py){
		return Point.inDiamond(x,y,xsize,ysize,px,py)||Point.inDiamond(x,y+ysize,xsize,ysize,px,py)||
				Point.inRect(x,y+ysize/2,xsize,ysize,px,py);
	}
};
//FIXME
/**class Point {
	
	static inRect(rx, ry, rw, rh, x, y) {
		return (x > rx) && (x < rx + rw) && (y > ry) && (y < ry + rh);
	}

	static inCircle(rx, ry, rm, x, y) {
		return (Math.sqrt((x - rx - rm) * (x - rx - rm) + (y - ry - rm) * (y - ry - rm)) <= rm);
	}
	
	static inDiamond(x,y,xsize,ysize,px,py){
		return Point.inRect(0,0,xsize,ysize,px-x-xsize/2+(py-y)*xsize/ysize,py-y)
				&&Point.inRect(0,0,xsize,ysize,px-x,py-y+ysize/2-(px-x)*ysize/xsize);
	}
	
	static inCube(x,y,xsize,ysize,px,py){
		return Point.inDiamond(x,y,xsize,ysize,px,py)||Point.inDiamond(x,y+ysize,xsize,ysize,px,py)||
				Point.inRect(x,y+ysize/2,xsize,ysize,px,py);
	}
	
}**/
/*class CanvasGraphics{
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
	constructor() {

	}
	static staticMethod() {
		return 'Static method has been called';
	}
	static anotherStaticMethod() {
		return this.staticMethod() + ' from another static method';
	}
}*/

function CanvasGraphics(canvasObject, canvasWidth,canvasHeight) {
	var canvas=null;
	if(canvasObject==null||''+canvasObject=='undefined'){//changed to create graphics no matter what -- will use passed in graphics instead of becoming null graphics return as a fallback
		canvas = document.createElement('canvas');//creates the canvas from scratch if it is not defined
	}
	else
	canvas = canvasObject;//assumes that a proper canvas variable has been passed in
	
	if(typeof canvasWidth!=='undefined'&&typeof canvasHeight!=='undefined'){//this will only set the canvas's graphical dimensions if both are defined -- default is automatically handled
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
	}
	
	var ctx = canvas.getContext('2d');
	var isNumber = function(num){
		switch(num){
			case(0):break;
			case(1):break;
			case(2):break;
			case(3):break;
			case(4):break;
			case(5):break;
			case(6):break;
			case(7):break;
			case(8):break;
			case(9):break;
			default:return false;
		}
		return true;
	}

	/////////////////////////////////////////////
	//User Calls
	////////////////////////////////////////////

	this.getWidth = function(){
		return canvas.width;
	}

	this.getHeight = function(){
		return canvas.height;
	}

	this.getCanvas = function(){
		return canvas;
	}

	this.getContext = function(){
		return ctx;
	}

	/////////////////////////////////////////////
	//Modification Calls
	////////////////////////////////////////////

	this.resizeCanvas = function(wwidth,hheight){
		canvas.width=wwidth;
		canvas.height=hheight;
	}

	this.setColor = function(hex,g,b,a){
		hex = ""+hex;
		if(isNumber(hex.charAt(0))){
			hex = "#"+hex;
		}
		if(typeof g !== "undefined") {
			if(typeof a !== "undefined") {
				hex="rgba("+hex+","+g+","+b+","+(a>1?a/255:a)+")";
			}else{
				hex="rgb("+hex+","+g+","+b+")";
			}
		}
		ctx.fillStyle=hex;
		ctx.strokeStyle=hex;
	}

	this.setFont = function(font,height){
		if(typeof height !== "undefined") {//if it is defined then do this
			/*//var dat = ""+height;
			if(dat.substring(dat.length-2,2)==="px")
				this.setFont(font+" "+height+"px");
			else
				this.setFont(font+" "+height);//recursion :p
			*/
			if(font.substring(font.length-2,2)==="px")
				font=+height+"px "+font;
			else
				font=height+"px "+font.substring(0,font.length);
		}
		//if it is not defined, assumed to have full data do this
		ctx.font = font;
	}
	
	//this.setCanvasSize -- did not use this name due to confusion about setting the size in HTML or the Graphics size
	//this.setSize(width,height){ -- did not use this name due to some ambiguity about setting what
	this.setGraphicsSize = function(width,height){
		canvas.width=width;
		canvas.height=height;
	}
	
	/////////////////////////////////////////////
	//Edged graphics
	////////////////////////////////////////////

	this.clearRect = function(x,y,width,height){
		ctx.clearRect(x,y,width,height);
	}

	this.fillRect = function(x, y, width, height){
		ctx.fillRect(x,y,width,height);
	}

	this.drawRect = function(x, y, width, height){
		ctx.strokeRect(x,y,width,height);
	}

	/////////////////////////////////////////////
	//Point Graphics
	////////////////////////////////////////////

	this.drawLine = function(x0,y0,x1,y1){
		ctx.moveTo(x0,y0);
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}

	/*
	this.drawLines = function(x0,y0,x1,y1){//this does single and double dimension arrays -- more efficient than single line drawings multiple times -- pass in trash data except for first to define action :V
		if(y0=="undefined"){//everything in 1 array (xy array)
			for(var i = 2; i < x0.length;i+=2){//i there is 1 pair or less than 1 pair, this will exit and not handle any data
				ctx.moveTo(y0[i-2],y0[i-1]);
				ctx.lineTo(y0[i],y[i+1]);
			}
			return;
		}
		if(x1=="undefined"){//everything in 2 arrays (x array, y array)
			for(var i = 1; i < x0.length;i++){//i there is 1 pair or less than 1 pair, this will exit and not handle any data
				ctx.moveTo(x0[i-1],y0[i-1]);
				ctx.lineTo(x0[i],y0[i]);
			}
			return;
		}
		if(y1=="undefined"){//x1 defines if it is a double array: e.g var[X][Y]
			for(var i = 2; i < x0.length;i+=2){//i there is 1 pair or less than 1 pair, this will exit and not handle any data

			}
			return;
		}
		//ASSUMED OTHER VARIBALES ARE DEFINED
		//x2 defines if it is a double double array: e.g var[Line ID][X][Y] --
		ctx.moveTo(x0,y0);
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}
	*/

	this.drawCircle = function(x,y,radius){//guaranteed to be supported
		ctx.beginPath();
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.stroke();
	}
	
	/**
	http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
	\/
	http://jsbin.com/ovuret/722/edit?html,output
	**/
	this.drawOval = function(ctx, cx, cy, rx, ry){
	if(ctx.ellipse)//if ctx does not support this
		{
		ctx.beginPath();
		ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2);
		ctx.stroke();
		}
	}
	//modified from the above
	this.fillOval = function(ctx, cx, cy, rx, ry){
		if(ctx.ellipse)//if ctx does not support this
			{
				ctx.beginPath();
				ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2);
				ctx.fill();
			}
		}
	
	/////////////////////////////////////////////
	//Image Graphics
	////////////////////////////////////////////

	this.drawImage = function(img, sx,sy,swidth,sheight,x,y,width,height){
		if(""+swidth=="undefined"){//draw on point x,y
			ctx.drawImage(img,sx,sy);
			return;
		}
		if(""+x=="undefined"){//scale on point x,y
			ctx.drawImage(img,sx,sy,swidth,sheight);
			return;
		}//draw image rectangle on surface from other image rectangle*/
		ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
	}

	this.drawImage_Fast = function(img, sx,sy,swidth,sheight,x,y,width,height){
		//*
		if(""+swidth=="undefined"){//draw on point x,y
			ctx.drawImage(img,Math.round(sx),Math.round(sy));
			return;
		}
		if(""+x=="undefined"){//scale on point x,y
			ctx.drawImage(img,Math.round(sx),Math.round(sy),Math.round(swidth),Math.round(sheight));
			return;
		}//draw image rectangle on surface from other image rectangle*/
		
		//normal Interface handles everything
		ctx.drawImage(img,Math.round(sx),Math.round(sy),Math.round(swidth),Math.round(sheight),Math.round(x),Math.round(y),Math.round(width),Math.round(height));
	}

	/////////////////////////////////////////////
	//Calculating Graphics
	////////////////////////////////////////////

	this.drawString = function(string, x,y,fill){
		if(typeof fill !== "undefined"){
			if(fill){
				ctx.fillText(string, x,y);
				return;
			}
			ctx.strokeText(string, x,y);
			return;
		}
		ctx.fillText(string, x,y);
	}

	this.getStringWidth = function(txt){
		return ctx.measureText(txt).width;
	}

};
var grid = [];
var t_width=128,h_width=64,q_width=32;
var t_height=128,h_height=64,q_height=32;
var scale = .125;
var xscroll=-grid.length*t_width*scale,yscroll=300;
var viewdir=0;

var slx=-1,sly=-1,slz=-1;

//http://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
function fillArray(arr){
	for(var i = 0; i < arr.length;i++){
		if(Array.isArray(arr[i])){
			fillArray(arr[i]);
		}else arr[i]=0;
	}
}
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }
	
	fillArray(arr);
	
    return arr;
}

var g_base=64,g_height=16;
grid = createArray(g_base,g_base,g_height);

gridReset();
function gridReset(){
for(var x = 0; x <grid.length;x++){
	for(var y = 0; y < grid[x].length;y++){
		for(var z = 0; z < grid[x][y].length;z++){
			grid[x][y][z]=0;
		}
	}
}
}
/*for(var x = 0; x <grid.length;x++){
	for(var y = 0; y < grid[x].length;y++){
		grid[x][y][0]=1;
	}
	//grid[x][0][1]=1;
}
grid[0][0][1]=1;
*/




function renderIsoMap(g){
	switch(viewdir){
		case(0):
		rotateI(g);
		break;
		case(1):
		rotateII(g);
		break;
		case(2):
		rotateIII(g);
		break;
		case(3):
		rotateIV(g);
	}
}

function editBock(block){
	if(slx==-1||''+block=='undefined'||block==null)return false;
	//document.title=slx+" "+sly+" "+(slz);
	if(Point.inDiamond((h_width*slx+h_width*sly)*scale+xscroll,
					//y
					(-q_width*slx+q_width*sly-slz*h_height)*scale+yscroll,
			t_width*scale,h_height*scale,
			px, py)){
			//console.log("topper");
			if(block)
			slz++;
	}else{
		if(block)
		if(px<(h_width*slx+h_width*sly+h_width)*scale+xscroll)
			slx--;
		else
			sly++;
		/**
		if(left){//left side
			/*switch(viewdir){
			case(0):
			slx--;
			//sly++;
			break;;
			case(1):
			//grid[sly][grid.length-1-slx][slz]=1;
			slx--;
			break;
			case(2):
			slx--;
			break;
			case(3):
			slx--;
			break;* /
			slx--;
			//slx+=side[viewdir][0][0];
			//sly+=side[viewdir][0][1];
			//console.log("left");
		}else{//right side
		sly++;
			//slx+=side[viewdir][1][0];
			//sly+=side[viewdir][1][1];
			//console.log("right");
		}
		//console.log();
		*/
	}
	if(slx<0||sly<0||slz<0||slx==grid.length||sly==grid[0].length||slz==grid[0][0].length)return false;
	//grid[slx][sly][slz]=1;
	switch(viewdir){
		case(0):
		var b = blockConditions(slx,sly,slz,block);//intital
		while(block==0&&slz>0&&slz+1<grid[0][0].length){
			slz++;
			if(!BlockBlock(slx,sly,slz,grid[slx][sly][slz]))
				grid[slx][sly][slz]=0;
		}
		return b;
		case(1):
		var b = blockConditions(sly,grid.length-1-slx,slz,block)
		while(block==0&&slz>0&&slz+1<grid[0][0].length){
			slz++;
			if(!BlockBlock(sly,grid.length-1-slx,slz,grid[sly][grid.length-1-slx][slz]))
				grid[sly][grid.length-1-slx][slz]=0;
		}
		return b;//blockConditions(sly,grid.length-1-slx,slz,block);
		case(2):
		var b = blockConditions(grid.length-slx-1,grid[0].length-sly-1,slz,block)
		while(block==0&&slz>0&&slz+1<grid[0][0].length){
			slz++;
			if(!BlockBlock(grid.length-slx-1,grid[0].length-sly-1,slz,grid[grid.length-slx-1][grid[0].length-sly-1][slz]))
				grid[grid.length-slx-1][grid[0].length-sly-1][slz]=0;
		}
		return b;
		case(3):
		var b = blockConditions(grid[0].length-1-sly,slx,slz,block);
		while(block==0&&slz>0&&slz+1<grid[0][0].length){
			slz++;
			if(!BlockBlock(grid[0].length-1-sly,slx,slz,grid[grid[0].length-1-sly][slx][slz]))
				grid[grid[0].length-1-sly][slx][slz]=0;
		}
		return b;
	}
		/*
		if(!In.inDiamond(region.half*xb+yb*region.half+xoff,
					//(int)((region.half2*yb+yoff-zb*region.half-region.half2*xb)*Scroll.yx),
					(int)((region.half2*yb+yoff/Scroll.yx-zb*region.half/Scroll.yx-region.half2*xb)*Scroll.yx),
					region.size,region.half,
					Boot.px, Boot.py)){
				
				rzb-=1;
				
				if(Boot.px<region.half*xb+yb*region.half+xoff+region.half){//left side
					rxb+=side[rotate][0][0];
					ryb+=side[rotate][0][1];
				}else{//right side
					rxb+=side[rotate][1][0];
					ryb+=side[rotate][1][1];
				}
				if(rzb<0||rxb<0||ryb<0||rxb==grid.grid.length||ryb==grid.grid[0].length)return;
			}
		*/
}

function BlockBlock(x,y,z,block){
	switch(block){
		case(0)://air
		if(z==0)return false;
		break;
		case(7)://water
		return false;
		case(8):
		return false;
		case(8):
		return false;
		case(9):
		return false;
		case(10)://road
		if(z-1>-1&&(grid[x][y][z-1]==0||grid[x][y][z-1]>6))return false;
		break;
		case(13):
		//if(z+1<grid[x][y].length&&(grid[x][y][z+1]==0||grid[x][y][z+1]==14))return false;
		return false;
		case(14):
		//if(z-1>-1&&(grid[x][y][z-1]==0|| grid[x][y][z-1]==13))return false;
		return false;
		case(15)://food
		if(z-1>-1&&(grid[x][y][z-1]==0|| grid[x][y][z-1]>2))return false;
		break;
		case(16)://house_bottom
		if(z-1>-1&&(grid[x][y][z-1]==0||grid[x][y][z-1]>6))return false;
		break;
		case(17)://house_top
		if(z-1>-1&&grid[x][y][z-1]!=16)return false;
		break;
		case(18)://apartment_bottom
		if(z-1>-1&&(grid[x][y][z-1]==0||grid[x][y][z-1]>6))return false;
		break;
		case(19)://apartment_top
		if(z-1>-1&&(grid[x][y][z-1]!=18&&grid[x][y][z-1]!=19))return false;
		break;
	}
	return true;
}

function blockConditions(x,y,z,block){
	console.log(block);
	if(grid[x][y][z]&&block||!BlockBlock(x,y,z,block))return false;
	grid[x][y][z]=block;
	return true;
}

var shade = 0;
function rotateI(g){
	/*
	
	if(In.inCube(region.half*x+y*region.half+xoff,
								(int)((region.half2*y+yoff/Scroll.yx-z*region.half/Scroll.yx-region.half2*x)*Scroll.yx),
								region.size,region.half,Boot.x,Boot.y)){
									
									
	
	g.drawImage(Textures.pickImage(grid.grid[x][y][z]&0xffff,grid.grid[x][y][z]>>27&0x0f,rotate),
							(region.half*x+y*region.half)*1+xoff,
							(int)((region.half2*y+yoff/Scroll.yx-z*region.half/Scroll.yx-region.half2*x)*Scroll.yx),
							region.size,region.size,null);
	
	
	
	
	size = tileSize*2;
	half = tileSize;
	half2 = tileSize/2;
	
	*/
	slx=-1;
	sly=-1;
	slz=-1;
	/*for(int x = 0; x < grid.grid.length; x++){
			for(int y = grid.grid[x].length-1; y>-1;y--){
				for(int z = grid.grid[x][y].length-1; z>-1;z--){*/
	//for(var x = grid.length-1; x > -1;x=Math.trunc(x-1)){
	for(var x = 0; x < grid.length;x=Math.trunc(x+1)){
		for(var y = grid[x].length-1; y>-1;y=Math.trunc(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=Math.trunc(z-1)){
				if(grid[x][y][z]&&checkRender(x,y,z))
				if(Point.inCube(
					
					//x
					(h_width*x+h_width*y)*scale+xscroll,
					//y
					(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
					//width
					t_width*scale,
					//height
					h_height*scale,
					mx,my
					)){
					slx=x;
					sly=y;
					slz=z;
					break;
				}
			}
			if(slx!=-1)break;
		}
		if(slx!=-1)break;
	}
	//console.log(slx+" "+sly+" "+slz);
	for(var x = grid.length-1; x > -1;x=Math.trunc(x-1)){
		for(var y = 0; y < grid[x].length;y=Math.trunc(y+1)){
			shade=0;
			for(var z = grid[x][y].length-1; z>0;z=Math.trunc(z-1)){
				if(grid[x][y][z]){
					shade=z;
					//if(grid[x][y][z]!=17)
					break;
				}
			}
			for(var z = 0; z < grid[x][y].length;z=Math.trunc(z+1)){
				if(Point.inRect(-t_width,-t_height,width+t_width,height+t_height,(h_width*x+h_width*y)*scale+xscroll,(-q_width*x+q_width*y-z*h_height)*scale+yscroll))
				if(grid[x][y][z]&&checkRender(x,y,z)){
				//if(Point.inRect(-t_width,-t_height,width,height,(h_width*x+h_width*y)*scale+xscroll+t_width,(-q_width*x+q_width*y-z*h_height)*scale+yscroll)+t_height)
				g.drawImage_Fast(tiles[grid[x][y][z]][viewdir+((z<shade&&z<grid[x][y].length-1&&!grid[x][y][z+1])?4:0)],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				
				
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				}
				renderPonies(x,y,z,x,y,z);
			}
			/*for(var z = 0; z < shade;z=Math.trunc(z+1)){
				if(grid[x][y][z]&&checkRender(x,y,z)){
				//if(Point.inRect(-t_width,-t_height,width,height,(h_width*x+h_width*y)*scale+xscroll+t_width,(-q_width*x+q_width*y-z*h_height)*scale+yscroll)+t_height)
				g.drawImage_Fast(tiles[grid[x][y][z]][viewdir+4],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				}
			}
			for(var z = shade; z < grid[x][y].length;z=Math.trunc(z+1)){
				if(grid[x][y][z]&&checkRender(x,y,z)){
				//if(Point.inRect(-t_width,-t_height,width,height,(h_width*x+h_width*y)*scale+xscroll+t_width,(-q_width*x+q_width*y-z*h_height)*scale+yscroll)+t_height)
				g.drawImage_Fast(tiles[grid[x][y][z]][viewdir],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				}
			}*/
		}
	}
}

function rotateII(g){
	slx=-1;
	sly=-1;
	slz=-1;
	
	for(var x = 0; x < grid.length;x=Math.trunc(x+1)){
		for(var y = grid[x].length-1; y>-1;y=Math.trunc(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=Math.trunc(z-1)){
				if(grid[y][grid.length-1-x][z]&&checkRender(y,grid.length-1-x,z))
				if(Point.inCube(
					//x
					(h_width*x+h_width*y)*scale+xscroll,
					//y
					(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
					//width
					t_width*scale,
					//height
					h_height*scale,
					mx,my
					)){
					slx=x;
					sly=y;
					slz=z;
					break;
				}
			}
			if(slx!=-1)break;
		}
		if(slx!=-1)break;
	}
	
	for(var x = grid.length-1; x > -1;x=Math.trunc(x-1)){
		for(var y = 0; y < grid[x].length;y=Math.trunc(y+1)){
			shade=0;
			for(var z =grid[y][grid.length-1-x].length-1; z>0;z=Math.trunc(z-1)){
				if(grid[y][grid.length-1-x][z]){
					shade=z;
					break;
				}
			}
			for(var z = 0; z < grid[y][grid.length-1-x].length;z=Math.trunc(z+1)){
				if(Point.inRect(-t_width,-t_height,width+t_width,height+t_height,(h_width*x+h_width*y)*scale+xscroll,(-q_width*x+q_width*y-z*h_height)*scale+yscroll))
				if(grid[y][grid.length-1-x][z]&&checkRender(y,grid.length-1-x,z)){
				g.drawImage_Fast(tiles[grid[y][grid.length-1-x][z]][viewdir+((z<shade&&z<grid[y][grid.length-1-x].length-1&&!grid[y][grid.length-1-x][z+1])?4:0)],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				
				
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				}
				renderPonies(y,grid.length-1-x,z,x,y,z);
			}
		}
	}
}

function rotateIII(g){
	slx=-1;
	sly=-1;
	slz=-1;
	for(var x = 0; x < grid.length;x=Math.trunc(x+1)){
		for(var y = grid[x].length-1; y>-1;y=Math.trunc(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=Math.trunc(z-1)){
				if(grid[grid.length-x-1][grid[0].length-y-1][z]&&checkRender(grid.length-x-1,grid[0].length-y-1,z))
				if(Point.inCube(
					
					//x
					(h_width*x+h_width*y)*scale+xscroll,
					//y
					(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
					//width
					t_width*scale,
					//height
					h_height*scale,
					mx,my
					)){
					slx=x;
					sly=y;
					slz=z;
					break;
				}
			}
			if(slx!=-1)break;
		}
		if(slx!=-1)break;
	}
	for(var x = grid.length-1; x > -1;x=Math.trunc(x-1)){
		for(var y = 0; y < grid[x].length;y=Math.trunc(y+1)){
			shade=0;
			for(var z =grid[grid.length-x-1][grid[0].length-y-1].length-1; z>0;z=Math.trunc(z-1)){
				if(grid[grid.length-x-1][grid[0].length-y-1][z]){
					shade=z;
					break;
				}
			}
			for(var z = 0; z < grid[x][y].length;z=Math.trunc(z+1)){
				if(Point.inRect(-t_width,-t_height,width+t_width,height+t_height,(h_width*x+h_width*y)*scale+xscroll,(-q_width*x+q_width*y-z*h_height)*scale+yscroll))
				if(grid[grid.length-x-1][grid[0].length-y-1][z]&&checkRender(grid.length-x-1,grid[0].length-y-1,z)){
				g.drawImage_Fast(tiles[grid[grid.length-x-1][grid[0].length-y-1][z]][viewdir+((z<shade&&z<grid[grid.length-x-1][grid[0].length-y-1].length-1&&!grid[grid.length-x-1][grid[0].length-y-1][z+1])?4:0)],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				}
				renderPonies(grid.length-x-1,grid[0].length-y-1,z,x,y,z);
			}
		}
	}
}

function rotateIV(g){
	slx=-1;
	sly=-1;
	slz=-1;
	for(var x = 0; x < grid.length;x=Math.trunc(x+1)){
		for(var y = grid[x].length-1; y>-1;y=Math.trunc(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=Math.trunc(z-1)){
				if(grid[grid[0].length-1-y][x][z]&&checkRender(grid[0].length-1-y,x,z))
				if(Point.inCube(
					
					//x
					(h_width*x+h_width*y)*scale+xscroll,
					//y
					(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
					//width
					t_width*scale,
					//height
					h_height*scale,
					mx,my
					)){
					slx=x;
					sly=y;
					slz=z;
					break;
				}
			}
			if(slx!=-1)break;
		}
		if(slx!=-1)break;
	}
	for(var x = grid.length-1; x > -1;x=Math.trunc(x-1)){
		for(var y = 0; y < grid[x].length;y=Math.trunc(y+1)){
			shade=0;
			for(var z =grid[grid[0].length-1-y][x].length-1; z>0;z=Math.trunc(z-1)){
				if(grid[grid[0].length-1-y][x][z]){
					shade=z;
					break;
				}
			}
			for(var z = 0; z < grid[x][y].length;z=Math.trunc(z+1)){
				if(Point.inRect(-t_width,-t_height,width+t_width,height+t_height,(h_width*x+h_width*y)*scale+xscroll,(-q_width*x+q_width*y-z*h_height)*scale+yscroll))
				if(grid[grid[0].length-1-y][x][z]&&checkRender(grid[0].length-1-y,x,z)){
				g.drawImage_Fast(tiles[grid[grid[0].length-1-y][x][z]][viewdir+((z<shade&&z<grid[grid[0].length-1-y][x].length-1&&!grid[grid[0].length-1-y][x][z+1])?4:0)],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				}
				renderPonies(grid[0].length-1-y,x,z,x,y,z);
			}
		}
	}
	/*for(var x = grid.length-1; x > -1;x=Math.trunc(x-1)){
		for(var y = 0; y < grid[x].length;y=Math.trunc(y+1)){
			for(var z = 0; z < grid[x][y].length;z=Math.trunc(z+1)){
				if(grid[grid.length-x-1][grid[0].length-y-1][z])
				g.drawImage_Fast(tiles[grid[grid.length-x-1][grid[0].length-y-1][z]][viewdir],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
			}
		}
	}*/
}

/**
function rotateI(g){//normal view
	for(var x = grid.grid.length-1; x > -1;x--){
		for(var y = 0; y < grid.grid[x].length;y++){
			for(var z = 0; z < grid.grid[x][y].length;z++){
				
				//break;
				
				//draws the Cube Texture
				
				//||
				//		x<grid.grid.length-1&&x>1&&grid.grid[x+side[rotate][1][0]][y+side[rotate][1][1]][z]==0||
				//		z<grid.grid[x][y].length-2&&grid.grid[x][y][z+1]==0)
				
				//if(!draw)
				//TODO
				if(Point.inRect(0,0,Boot.width,Boot.height,
						region.half*x+y*region.half+xoff+region.half,
						Math.floor((region.half2*y+yoff/Scroll.yx-z*region.half-region.half2*x+region.half)*Scroll.yx))
					)
				if(checkRender(x,y,z)){
				
				g.drawImage(Textures.pickImage(grid.grid[x][y][z]&0xffff,grid.grid[x][y][z]>>27&0x0f,rotate),
						(region.half*x+y*region.half)*1+xoff,
						Math.floor((region.half2*y+yoff/Scroll.yx-z*region.half/Scroll.yx-region.half2*x)*Scroll.yx),
						region.size,region.size,null);
				
				//selector cube offset
				//draws the red selector if at the particular cube
				
				//if(==0);
				if((x^xb)+(y^yb)+(z^zb)==0){
				g.drawImage(Textures.selector,
					region.half*x+y*region.half+xoff,
					(int)((region.half2*y+yoff/Scroll.yx-z*region.half/Scroll.yx-region.half2*x)*Scroll.yx),
					region.size,region.size,null);
				}//end of selector drawing
				
					if(Menus.devPony&&(x^Dev.DevSim.x)+(y^Dev.DevSim.y)+(z^Dev.DevSim.z)==0){
						Dev.DevSim.render(g,
								region.half*x+y*region.half+xoff,
								(int)((region.half2*y+yoff/Scroll.yx-z*region.half/Scroll.yx-region.half2*x)*Scroll.yx),0
								);
					}
					UltraAI.render(g,
							region.half*x+y*region.half+xoff,
							(int)((region.half2*y+yoff/Scroll.yx-z*region.half/Scroll.yx-region.half2*x)*Scroll.yx),0,x,y,z);
					
				}
				
			}//end of drawing
		}//end of forward loop one
	}//end of both forward loops
}//end of function

function tickI(){//normal view
	for(var x = 0; x < grid.grid.length; x++){
		for(var y = grid.grid[x].length-1; y>-1;y--){
			for(var z = grid.grid[x][y].length-1; z>-1;z--){
				if(grid.grid[x][y][z]!=0){
					if(Point.inIsoCube(region.half*x+y*region.half+xoff,
							Math.floor((region.half2*y+yoff/Scroll.yx-z*region.half/Scroll.yx-region.half2*x)*Scroll.yx),
							region.size,region.half,Boot.x,Boot.y)){
						xb=x;yb=y;zb=z;
						rxb=x;ryb=y;rzb=z;
						
						return;//stops fining selected tile
					}
					//y-=1;
					}
			
					//subtract one for cube offset
				
			}//end forward loop three
		}//end forward loop two
	}//end forward loop one
	xb=-1;yb=-1;zb=-1;//sets selector to off grid invisibility since the selector is off of all real tiles
}



**/

var side = [
		[//0 ,x,y
			[//left
				-1,0
			],
			[//right
				0,1
			]
		],
		[//1
			[//left
				0,-1
			],
			[//right
				1,1
			]
		],
		[//2
			[//left
				1,0
			],
			[//right
				0,-1
			]
		],
		[//3
			[//left
				0,1
			],
			[//right
				-1,-1
			]
		]
];

function checkRender(x, y, z){
	switch(x){//map sizes -- of a 64x64x16 map
	case(0):return true;
	case(63):return true;
	}
	switch(y){
	case(0):return true;
	case(63):return true;
	}
	switch(z){
	case(0):return true;
	case(15):return true;
	}//end map sizes -- of a 64x64x16 map
	switch(grid[x+side[viewdir][0][0]][y+side[viewdir][0][1]][z]){
	case(0):return true;
	case(10):return true;
	case(13):return true;
	case(11):return true;
	case(12):return true;
	case(21):return true;
	}
	switch(grid[x+side[viewdir][1][0]][y+side[viewdir][1][1]][z]){
	case(0):return true;
	case(10):return true;
	case(13):return true;
	case(11):return true;
	case(12):return true;
	case(21):return true;
	}
	switch(grid[x][y][z+1]){
	case(0):return true;
	case(10):return true;
	case(13):return true;
	case(11):return true;
	case(12):return true;
	case(21):return true;
	}/**/
	return false;
}
//http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function Random() {
	this.nextInt = function(max){
		max-=1;//prevents the maximum from being rolled, to emulate the Random() of Java
		return Math.trunc(Math.random() * (max - /*min*/0 + 1)) + /*min*/0;
	}
}

function hillGen(){
	
	var height = new Random().nextInt(2)+1;
	var maxX = new Random().nextInt(32);
	var maxY = new Random().nextInt(32);
	
	var wx = createArray(maxX,maxY,height);
	
	//int[] curvature = new int[]{1,2,4,7,12,15,12,7,4,2,1};
	//var absvar = ~(1<<31);
	
	for(var c = 0; c < height;c++)
		for(var a = 0; a < maxX;a++){
			for(var b = 0; b < maxY;b++){
				wx[a][b][c]=0;
			}
		}
	
	for(var c = 0; c < height;c++)
		for(var a = 0; a < maxX;a++){
			for(var b = 0; b < maxY;b++){
				//w[a][b] = new int[];
				
				var length = ((maxY/2)-(b-(maxY/2))&(~(1<<31)));
				var off = new Random().nextInt((maxY-length/2));
				
				for(var z = off; z < off+length;z++)
					wx[a][b][c] = 1;
				
			}
		}
	
	return wx;
}
//FIXME
/**
function genHandler(){
	AGen.reset();
	switch(region){
	case(0)://ice
		if(!active[region])return;
		Textures.overlap=1;
		for(int i = 0; i < active.length;i++){
			active[i] = false;
		}
		active[1] = true;
		active[2] = true;
		active[4] = true;
		return;
	case(1)://plains
		if(!active[region])return;
		AGen.generateGrazeLands(new Random().nextInt(15)+1);
		break;
	case(2)://forest
		if(!active[region])return;
		AGen.generateForest();
		break;
	case(3)://desert
		if(!active[region])return;
		AGen.generateDesert(new Random().nextInt(13)+1);
		break;
	case(4)://mountain
		if(!active[region])return;
		AGen.generateMountainRange(new Random().nextInt(100)+85,true);
		break;
	case(5)://volcano
		if(!active[region])return;
		AGen.generateVolcanicLandscape(new Random().nextInt(100)+85);
		break;
	case(6)://canyon
		if(!active[region])return;
		AGen.generateCanyon();
		break;
	}
}
**/

function generateGrazeLands(limit){
	
	for(var x = 0; x < grid.length;x++){
		for(var y = 0; y < grid[x].length;y++){
			for(var z = 0; z < grid[x][y].length;z++){
				if(z==0)
				grid[x][y][z] = 2;
				//if(new Random().nextInt(102)==0)grid[x][y][z] = 1;//floating dirt shiz
			}
		}
	}
	
	for(var a = -grid.length; a < grid.length*2;a=Math.trunc(a+grid.length/5)){
		for(var b = -grid.length; b < grid.length*2;b=Math.trunc(b+grid.length/5)){
			
			if(new Random().nextInt(limit)==0){
				var hill = hillGen();
				for(var x = a; x < hill.length+a;x=Math.trunc(x+1)){
					for(var y = b; y < hill[x-a].length+b;y=Math.trunc(y+1)){
						for(var z = 1; z < hill[x-a][y-b].length+1;z=Math.trunc(z+1)){
							if(hill[x-a][y-b][z-1]!=0)
								if(x>-1&&x<grid.length&y>-1&&y<grid[0].length)//;
							grid[x][y][z] = hill[x-a][y-b][z-1];
						}
					}
				}
				
			}
			
			/*if(new Random().nextInt(limit)==0){
				var hill = hillGen();
				try{
				for(var x = a; x < hill.length+a;x++){
					for(var y = b; y < hill[Math.trunc(x-a)].length+b;y++){
						for(var z = 1; z < hill[Math.trunc(x-a)][Math.trunc(y-b)].length+1;z++){
							if(hill[Math.trunc(x-a)][Math.trunc(y-b)][z-1]!=0);
								if(Math.trunc(x)>-1&&x<grid.length&y>-1&&y<grid[0].length)//;
							grid[Math.trunc(x)][Math.trunc(y)][Math.trunc(z)] = hill[Math.trunc(x-a)][Math.trunc(y-b)][Math.trunc(z-1)];
						}
					}
				}
				}catch(e){alert(hill+"   "+(x-a)+"   "+(y-b)+"   "+(z-1)+"   ");console.log(e+"   "+Math.trunc(x));}
			}
			*/
			
		}
	}
	
	//grassing dirt tops
	for(var x = 0; x < grid.length;x++){
		for(var y = 0; y < grid[x].length;y++){
			for(var z = 0; z < grid[x][y].length;z++){
				if(grid[x][y][z] == 1&&grid[x][y][z+1]==0)
				grid[x][y][z] = 2;
				//if(new Random().nextInt(102)==0)grid[x][y][z] = 1;//floating dirt shiz
			}
		}
	}
	//dirting grass bottoms
	for(var x = 0; x < grid.length;x++){
		for(var y = 0; y < grid[x].length;y++){
			for(var z = 0; z < grid[x][y].length;z++){
				if(grid[x][y][z] == 2&&grid[x][y][z+1]!=0)
				grid[x][y][z] = 1;
				//if(new Random().nextInt(102)==0)grid[x][y][z] = 1;//floating dirt shiz
			}
		}
	}
	
}

function generateMountainRange(limit,trees){
		//dirt the floor
		for(var x = 0; x < grid.length;x++){
			for(var y = 0; y < grid[x].length;y++){
				grid[x][y][0]=1;
			}
		}
		
		//make the mountains
		for(var x = 0; x < grid.length;x++){
			for(var y = 0; y < grid[x].length;y++){
				if(new Random().nextInt(limit)==0){
					var mtn = mountain(new Random().nextInt(8)+1);
					for(var i = 0; i < mtn.length;i++){
						for(var w = 0; w < mtn[i].length;w++){
							for(var s = 0; s < mtn[i][w].length;s++){
								if(x+i<grid.length&&y+w<grid.length&&s+1<grid[x][y].length){
									if(grid[x+i][y+w][s+1]==0)
									grid[x+i][y+w][s+1]=mtn[i][w][s];
								}
							}
						}
					}
				}
			}
		}
		
		//flourish the base of the mountains
		//flourish rubble
		for(var x = 0; x < grid.length;x++){
			for(var y = 0; y < grid[x].length;y++){
				//for(var z = 0; z < grid[x][y].length;z++){
					if(new Random().nextInt(10)==0 && grid[x][y][1]==0)
						grid[x][y][1]=3;
				//}
			}
		}
		//flourish trees
		if(trees)
		Foresting(30);
		
	}
	
function mountain(rubble){
	
	var height = new Random().nextInt(12)+3;
	var width = new Random().nextInt(6)+6;
	
	var mtn = createArray(width,width,height);
	
	for(var z = 0; z < height;z++){
		var off = Math.trunc(height/width-height/(z+1)/width);
		for(var x = off; x < width-off;x=Math.trunc(x+1)){
			for(var y = off; y < width-off;y=Math.trunc(y+1)){
				if(z==0){
				mtn[x][y][z] = 3;
				if(!Point.inRect(off,off,width-off-1,width-off-1,x,y))
					//{
						if(new Random().nextInt(rubble)+1!=1)
						mtn[x][y][z] = 0;
					//}else{
					//	if(mtn[x][y][z-1]!=0)
					//		if(new Random().nextInt(rubble)+1!=1)
					//			mtn[x][y][z] = 3;
					//}
					
				}else{
					//if(z==0)
					//mtn[x][y][0] = 3;
					//else
					if(mtn[x][y][z-1]==3)
					mtn[x][y][z] = 3;
					if(!Point.inRect(off,off,width-off-1,width-off-1,x,y))
						if(new Random().nextInt(rubble)+1!=1)mtn[x][y][z] = 0;
				}
			}
		}
	}
	
	return mtn;
}

function generateCanyon(){
	
	generateGrazeLands(new Random().nextInt(15)+1);
	generateMountainRange(new Random().nextInt(30)+30,false);
	
	
	//WILL BE REPLACED FOR MORE NATURAL TERRAIN
	//clay the ground
	//for(int x = 0; x < grid.length;x++){
	//	for(int y = 0; y < grid[x].length;y++){
	//		grid[x][y][0]=6;
	//	}
	//}
	
	for(var x = 0; x < grid.length;x++){
		for(var y = 0; y < grid[x].length;y++){
			for(var z = 0; z < grid[x][y].length;z++){
				switch(grid[x][y][z]){
				case(1):grid[x][y][z]=5;break;//dirt>sand
				case(2):grid[x][y][z]=6;break;//grass>clay
				case(3):grid[x][y][z]=6;break;//stone>clay
				//case():grid[x][y][0]=6;break;
				}
			}
		}
	}
	
}

function generateVolcanicLandscape(limit){
		//stone the floor
		for(var x = 0; x < grid.length;x++){
			for(var y = 0; y < grid[x].length;y++){
				grid[x][y][0]=3;
			}
		}
		
		//make the mountains
		for(var x = 0; x < grid.length;x++){
			for(var y = 0; y < grid[x].length;y++){
				if(new Random().nextInt(limit)==0){
					if(new Random().nextInt(/*new Random().nextInt(10)*/3)==0){
						
						//volcano
						var mtn = volcano(new Random().nextInt(8)+1);
						for(var i = 0; i < mtn.length;i++){
							for(var w = 0; w < mtn[i].length;w++){
								for(var s = 0; s < mtn[i][w].length;s++){
									if(x+i<grid.length&&y+w<grid.length&&s+1<grid[x][y].length){
										//if(grid[x+i][y+w][s+1]==0)
											grid[x+i][y+w][s+1]=mtn[i][w][s];
									}
								}
							}
						}
						
					}else{
						/** //regular mountain plateau
						int[][][] mtn = Mountain.mountain(new Random().nextInt(8)+1);
						for(int i = 0; i < mtn.length;i++){
							for(int w = 0; w < mtn[i].length;w++){
								for(int s = 0; s < mtn[i][w].length;s++){
									if(x+i<grid.length&&y+w<grid.length&&s+1<grid[x][y].length){
										if(grid[x+i][y+w][s+1]==0)
											grid[x+i][y+w][s+1]=mtn[i][w][s];
									}
								}
							}
						}**/
						
					}
					
				}
			}
		}
		
		
	}
	
function volcano(rubble){
	
	var height = new Random().nextInt(6)+8;
	var width = new Random().nextInt(10)+12;
	
	var mtn = createArray(width,width,height);
	
	for(var z = 0; z < height;z=Math.trunc(z+1)){
		var off = Math.trunc(height/width-height/(z+1)/width);
		for(var x = off; x < width-off;x=Math.trunc(x+1)){
			for(var y = off; y < width-off;y=Math.trunc(y+1)){
				if(z==0){
				mtn[x][y][z] = 3;
				if(!Point.inRect(off,off,width-off-1,width-off-1,x,y))
					//{
						if(new Random().nextInt(rubble)+1!=1)
						mtn[x][y][z] = 0;
					//}else{
					//	if(mtn[x][y][z-1]!=0)
					//		if(new Random().nextInt(rubble)+1!=1)
					//			mtn[x][y][z] = 3;
					//}
					
				}else{
					//if(z==0)
					//mtn[x][y][0] = 3;
					//else
					if(mtn[x][y][z-1]==3)
					mtn[x][y][z] = 3;
					if(!Point.inRect(off,off,width-off-1,width-off-1,x,y))
						if(new Random().nextInt(rubble)+1!=1)mtn[x][y][z] = 0;
				}
				if(Point.inRect(width/2-width/4,width/2-width/4,width/2,width/2,x,y)){
					mtn[x][y][z] = 9;
				}
			}
		}
	}
	
	return mtn;
}

function generateDesert(limit){
	
	for(var x = 0; x < grid.length;x++){
		for(var y = 0; y < grid[x].length;y++){
			for(var z = 0; z < grid[x][y].length;z++){
				if(z==0)
				grid[x][y][z] = 5;
				//if(new Random().nextInt(102)==0)grid[x][y][z] = 1;//floating dirt shiz
			}
		}
	}
	
	for(var a = -grid.length; a < grid.length*2;a=Math.trunc(a+grid.length/5)){
		for(var b = -grid.length; b < grid.length*2;b=Math.trunc(b+grid.length/5)){
			
			if(new Random().nextInt(limit)==0){
				var hill = hillGen();
				for(var x = a; x < hill.length+a;x=Math.trunc(x+1)){
					for(var y = b; y < hill[x-a].length+b;y=Math.trunc(y+1)){
						for(var z = 1; z < hill[x-a][y-b].length+1;z=Math.trunc(z+1)){
							hill[x-a][y-b][z-1] = 5;
							if(hill[x-a][y-b][z-1]!=0)
								if(x>-1&&x<grid.length&y>-1&&y<grid.length)
							grid[x][y][z] = hill[x-a][y-b][z-1];
						}
					}
				}
			}
			
		}
	}
	
	//grassing clay tops
	for(var x = 0; x < grid.length;x++){
		for(var y = 0; y < grid[x].length;y++){
			for(var z = 0; z < grid[x][y].length;z++){
				if(grid[x][y][z] == 6&&grid[x][y][z+1]==0)
				grid[x][y][z] = 5;
				//if(new Random().nextInt(102)==0)grid[x][y][z] = 1;//floating dirt shiz
			}
		}
	}
	//claying grass bottoms
	for(var x = 0; x < grid.length;x++){
		for(var y = 0; y < grid[x].length;y++){
			for(var z = 0; z < grid[x][y].length;z++){
				if(grid[x][y][z] == 5&&grid[x][y][z+1]!=0)
				grid[x][y][z] = 6;
				//if(new Random().nextInt(102)==0)grid[x][y][z] = 1;//floating dirt shiz
			}
		}
	}
	
}



function generateForest(){
	generateGrazeLands(1);
	Foresting(new Random().nextInt(15)+5);
}

function Foresting(density){
	for(var x = 0; x < grid.length;x=Math.trunc(x+1)){
		for(var y = 0; y < grid[x].length;y=Math.trunc(y+1)){
			for(var z = 0; z < grid[x][y].length;z=Math.trunc(z+1)){
				if(grid[x][y][z]==1||grid[x][y][z]==2){
					if(z<grid[x][y].length-2){
						if(grid[x][y][z+1]==0&&grid[x][y][z+2]==0){
							if(new Random().nextInt(density)==0){
								grid[x][y][z+1] = 13;
								grid[x][y][z+2] = 14;
							}
						}
					}else break;
				}
				
			}
		}
	}
	
}
var bits = 0;
var selBlock = null;


function popoutCanvas(){
	var w = winder = open('',"Pony Sim City v2 (Browser Edition)","width=800,height=600,menubar=no,location=no,resizable=no,scrollbars=no,status=no,url=no");
	w.document.open("text/html", "replace");
	w.document.write("<html><head><style>html,body{padding:0;margin:0;}</style></head><body></body></html>");
	w.document.close();
	w.document.body.appendChild(canvas);
	canvas.oncontextmenu=function(){return false;};
	function restore_game(){
		if(w.closed){
			document.body.appendChild(canvas);
			canvas = document.getElementById("canvas");
			cg = new CanvasGraphics(canvas,width,height);
			canvas.oncontextmenu=function(){return false;};
			addCanvasListeners();
		}else setTimeout(restore_game,1000);
	}
	restore_game();
}












var gameState = 0,mainState=0,gameScene=-1,gamerunning=false;

function renderGame(g){
	switch(gameState){
		case(0):
		//main menu
		gameMainMenu(g);
		break;
		case(1):
		//game
		renderIsoMap(g);
		renderHUD(g);
		if(b1&&py<height-200){
			editBock(selBlock);
			b1=false;
		}
		break;
		case(2)://ingame video / scene
		gameScenes();
		break;
	}
}

function gameScenes(g){
	switch(gameScene){
		case(0):
		
		//g.drawImage
		//scene stuff here
		
		break;
		case(1):
		
		//g.drawImage
		//scene stuff here
		
		break;
	}
}

function gameMainMenu(g){
	
	switch(mainState){
		case(0)://main menu
		break;
		case(1)://new game
		gameMainNewGame(g);
		return;
		case(2):
		return;
		case(3):
		return;
		case(4):
		return;
		default:
		return;//basically, present 1 button to allow users to go back to the main menu if it faults for some reason :'V (always on by default)
	}
	
	g.setColor("black");
	g.setFont("Sans-Serif",50);//Tahoma _ Sans-Serif _ Times New Roman _ Dialog
	g.drawString("Main Menu", 5, 75);
	
	g.setFont("Dialog",25);
	g.drawString("New Game", 10,125);
	g.drawString("Load Game", 10,175);
	g.drawString("Options", 10,225);
	g.drawString("Help", 10,275);
	
	for(var i = 0; i < 4;i++){
		//i+1 = result of selector
		if(Point.inRect(5,50*i+95,300,45,mx,my)){
			g.drawRect(5,50*i+95,300,45);
		}
		if(Point.inRect(5,50*i+95,300,45,px,py) && b1){
			b1=false;
			//if(i==0)act[i+1].state();
			//view = i+1;
			mainState=i+1;
			if(i==0){
				for(var i = 0; i < active.length;i++){
					active[i] = true;
				}
			}
		}
	}
	
	g.drawString("Credits / Sources", 10, height-20);
	if(Point.inRect(0,height-50,300,45,mx,my)){
		g.drawRect(5,height-50,300,45);
		if(b1){
			b1=false;
			//Menus.view=6;
		}
	}
	
	g.drawString("Check For Updates", 310, height-20);
	if(Point.inRect(305,height-50,300,45,mx,my)){
		g.drawRect(305,height-50,300,45);
		if(b1){
			b1=false;
			//update.Find.check();
		}
	}
	
	if(gamerunning){
	
	g.setColor("red");
	g.drawString("A FROZEN GAME IS IN PROGRESS", 40, 350);
	g.drawString("CLICK TO CONTINUE", 40, 375);
	if(Point.inRect(30,315,500,85,mx,my))
	g.setColor("red");
	else
	g.setColor("white");
	g.drawRect(30,315,500,85);
	
	if(Point.inRect(30,315,500,85,px,py) && b1){
		b1=false;
		gameState=1;
	}
	
	}
	
	g.setColor("blue");
	g.setFont("Bold 20px Dialog");
	if(Point.inRect(width-150, 50, 149, 49,mx,my)){
		g.drawRect(width-150, 50, 149, 49);
		if(b1){
			b1=false;
			popoutCanvas();
		}
	}
	g.drawString("Popout Game", width-140, 77);
	
}

var gameyoff=0;
function gameMainNewGame(g){
	g.setFont("Arial",40);
	g.setColor("black");
	if(Point.inRect(width-50,0,50,height/2,mx,my)){
		g.setColor(0,230,0);
		if(b1){
			b1=false;
			if(gameyoff>0)
			gameyoff-=240;
			if(gameyoff<0)
			gameyoff=0;
		}
	}
	g.fillRect(width-50,0,50,height/2);
	
	g.setColor("black");
	if(Point.inRect(width-50,height/2,50,height/2-50,mx,my)){
		g.setColor(0,230,0);
		if(b1){
			b1=false;
			if(gameyoff<regions.length*272-height)
			gameyoff+=240;
			if(gameyoff>regions.length*272-height)
				gameyoff=regions.length*272-height;
		}
	}
	g.fillRect(width-50,height/2,50,height/2-50);
	g.setColor("white");
	g.drawString("/\\",width-38,height/4);
	g.drawString("\\/",width-38,height/6*4);
	
	g.setFont("Dialog",14);
	for(var i = 0; i < regions.length;i++){
		g.drawImage(regions[i],5,272*i-gameyoff);//275*i-275*regions.length/height*gameyoff);
		g.setColor("black");
		g.drawString(region_desc[i],275,272*i+134-gameyoff);
			if(Point.inRect(0,272*i-gameyoff,width-50,256,mx,my)){
				//if(Textures.overlap==0)
				//g.setColor(0,255,0,128);
				//else
				g.setColor(0,255,0,128);
				g.fillRect(0,272*i-gameyoff,width-50,256);
			}
			if(Point.inRect(0,272*i-gameyoff,width-50,256,px,py)&&b1){
				b1=false;
				init(i);
			}
			if(!active[i]){
				g.setColor(0,0,0,128);
				g.fillRect(0,272*i-gameyoff,width-50,256);
			}
		}
		
		//if(Point.inRect(width-50, 0, 50,height,px,py)&&b1){
		//	gameyoff = dy-(height/regions.length)/2;
		//}
}

//MAP GENERATION
var active = [true,true,true,true,true,true,true];

function init(region){
	/*if(!active[region])return;
	if(region>0){
		if(NewGame.init(region)!=0){
			view=1;
			Textures.overlap=0;
			for(int i = 0; i < active.length;i++){
				active[i] = true;
			}
			return;
		}
		if(act[5].state()&&HUD.Swinger.RefreshConfirm()!=0){
			Textures.overlap=0;
			for(int i = 0; i < active.length;i++){
				active[i] = true;
			}
			return;
		}
	}*/
drag=false;
b1=false;
	//generate and check for map generation
switch(region){
	
	case(0)://ice
		if(!active[region]){
			for(var i = 0; i < active.length;i++){
				active[i] = true;
			}
			return;
		}
		//Textures.overlap=1;
		for(var i = 0; i < active.length;i++){
			active[i] = false;
		}
		active[1] = true;
		active[2] = true;
		active[4] = true;
		return;
	case(1)://plains
		if(!active[region])return;
		gridReset();
		generateGrazeLands(new Random().nextInt(15)+1);
		gamerunning=true;
		gameState=1;
		break;
	case(2)://forest
		if(!active[region])return;
		gridReset();
		generateForest();
		gamerunning=true;
		gameState=1;
		break;
	case(3)://desert
		if(!active[region])return;
		gridReset();
		generateDesert(new Random().nextInt(13)+1);
		gameState=1;
		break;
	case(4)://mountain
		if(!active[region])return;
		gridReset();
		generateMountainRange(new Random().nextInt(100)+85,true);
		gamerunning=true;
		gameState=1;
		break;
	case(5)://volcano
		if(!active[region])return;
		gridReset();
		generateVolcanicLandscape(new Random().nextInt(100)+85);
		gamerunning=true;
		gameState=1;
		break;
	case(6)://canyon
		if(!active[region])return;
		gridReset();
		generateCanyon();
		gamerunning=true;
		gameState=1;
		break;
	}

//reset other values here

}


var HUDState = 0;
function renderHUD(g){
	g.setColor(0,0,0,128);
	g.fillRect(0,height-200,width,200);
	
	switch(HUDState){
		case(0):
		renderHUD_tiles(g);
		break;
		case(1):
		//economy
		break;
		case(2):
		//ponies
		break;
		case(3):
		//functions
		break;
	}
	
	g.setColor(0,0,0,128);
	g.fillRect(width-64,0,64,64);
	if(Point.inRect(width-64,0,64,64,px,py)&&b1){
		b1=false;
		viewdir++;
		viewdir%=4;
	}
	g.fillRect(width-64,96,64,64);
	if(Point.inRect(width-64,96,64,64,px,py)&&b1){
		b1=false;
		viewdir--;
		if(viewdir<0)viewdir=3;
	}
	g.fillRect(width-64,192,64,64);
	if(Point.inRect(width-64,192,64,64,px,py)&&b1){
		b1=false;
		if(scale<1){
			scale*=2;
			xscroll=width/2-grid.length*t_width/2*scale;
			yscroll=height/2;
		}
	}
	g.fillRect(width-64,288,64,64);
	if(Point.inRect(width-64,288,64,64,px,py)&&b1){
		b1=false;
		if(scale>.125){
			scale/=2;
			xscroll=width/2-grid.length*t_width/2*scale;
			yscroll=height/2;
		}
	}
	
	g.setColor(255,255,255,196);
	
	g.setFont("Dialog",50);
	
	g.drawString(">",width-60,32);
	g.drawString("<",width-60,128);
	
	g.drawString("+",width-60,224);
	g.drawString("-",width-60,320);
	
	g.setColor(0,0,0);
	g.drawString(LAST_FPS,5,50);
	
}

var tileScroll=0,tileDrag=false;
var tileLX = -777;
function renderHUD_tiles(g){
	
	//if(b1){
		//if(tileLX==px/(5+144*off+tileScroll,height-200+(200-128)/2));
		//else
		//tileLX = 
	////document.title=tileLX;
	//}
	if(!tileDrag&&b1&&py>height-200){
		if(tileLX==px+mx){//simulates 2 clicks needed to select a block
			//slect tile
			selBlock=Math.trunc((px-tileScroll)/144);
			var off = 0;
			for(var i = 0; i < tiles.length;i++){
				if(tiles[i][viewdir]!=null){
					off++;
					if(off==selBlock){
						selBlock=i;console.log(tiles[i][0]);
						break;
					}
				}
			}
			//document.title=selBlock;
			if(selBlock>=tiles.length)selBlock=-1;
			tileLX=-777;
		}
		tileDrag = true;
		b1=false;
		tileLX=px+mx;
	}
	if(tileDrag){
		tileScroll+=mx-px;
			px=mx;
	}
	if(tileScroll>0)tileScroll=0;
	g.drawRect(5+tileScroll,height-200+(200-128)/2,128,128);
	g.setColor(0,255,0,128);
	var off = 0;
	for(var i = 0; i < tiles.length;i++){
		if(tiles[i][viewdir]!=null){
		g.drawImage(tiles[i][viewdir],/*5+144*/149+144*off+tileScroll,height-200+(200-128)/2);
		off+=1;
		
		}
		
		if(i==selBlock)
			g.fillRect(5+144*off+tileScroll,height-200+(200-128)/2,128,128);
	}
}



/*
public static String[][] img = {
		{"dirt","dirt","dirt","dirt"},
		{"grass","grass","grass","grass"},
		{"stone","stone","stone","stone"},
		{"concrete","concrete","concrete","concrete"},
		{"sand","sand","sand","sand"},
		{"clay","clay","clay","clay"},
		{"water","water","water","water"},
		{"fire","fire","fire","fire"},
		{"lava","lava","lava","lava"},//the 4 visual placements of blocks
		{"roadTile","roadTile","roadTile","roadTile","road0","road1","road2","road3","road0","road1","road2","road3"},//double for overflow
		{"roof","roof","roof","roof"},
		{"roof2","roof2","roof2","roof2"},
		//organic names
		{"oakTree_bottom","oakTree_bottom","oakTree_bottom","oakTree_bottom"},
		{"oakTree_top","oakTree_top","oakTree_top","oakTree_top"},
		//end of names list
		//begins of zone list
		{null,null,null,null},//de-zone
		{"bld/BIZ","bld/BIZ","bld/BIZ","bld/BIZ"},
		{"bld/APT_BTM","bld/APT_BTM","bld/APT_BTM","bld/APT_BTM"},
		{"bld/APT_TOP","bld/APT_TOP","bld/APT_TOP","bld/APT_TOP"},
		{"bld/HSE_BTM","bld/HSE_BTM","bld/HSE_BTM","bld/HSE_BTM"},
		{"bld/HSE_TOP","bld/HSE_TOP","bld/HSE_TOP","bld/HSE_TOP"},
		{"food","food","food","food"},
		{"bld/barracks","bld/barracks","bld/barracks","bld/barracks"},
		{null}//required null pointer
	};
*/

/*BLANKED RESOURCES INDICATE UNIMPLEMENTED BLOCKS _first blank indicates air*/
var tiles_urls =       ["","dirt","grass","stone","concrete","sand","clay","water","fire","lava","roadTile","","","oakTree_bottom","oakTree_top"];
var zone_urls = ["food"];
var zone_urls_shaded = ["food"];
var tiles_shaded_urls = ["","dirt","grass","stone","concrete","sand","clay","water","","","roadTile","","","oakTree_bottom","oakTree_top"];
var building_urls = ["HSE_BTM","HSE_TOP","APT_BTM","APT_TOP"];
var buildings_shaded_urls = ["HSE_BTM","HSE_TOP","APT_BTM","APT_TOP"];
/*
var tiles_urls = ["",
"https://docs.google.com/uc?id=0B-UZHbKERL_cOHI4cnFrcmo1YXM",
"https://docs.google.com/uc?id=0B-UZHbKERL_caW4yaW9KZXJRdUk",
"https://docs.google.com/uc?id=0B-UZHbKERL_cbURhb1ZsUDg3cXc",
"https://docs.google.com/uc?id=0B-UZHbKERL_cMEsxWVdybGlvdVk",
"https://docs.google.com/uc?id=0B-UZHbKERL_cSHFGY09ablBCZFU",
"https://docs.google.com/uc?id=0B-UZHbKERL_ceTRhOHF1VlpHRk0",
"https://docs.google.com/uc?id=0B-UZHbKERL_cLVVUTHhzVGVTWWc",
"https://docs.google.com/uc?id=0B-UZHbKERL_cWWVZT1BITFdpbVU",
"https://docs.google.com/uc?id=0B-UZHbKERL_cTG1CV0ZYdHB2RDg",
"https://docs.google.com/uc?id=0B-UZHbKERL_cMWdydjB2ODV5aDg"];
//*/
var tiles = createArray(tiles_urls.length,8);//8 for shaded and normal textures

var region_desc = [
"A land of ice, snow, and permafrost. Only the hardiest of ponies can live here.",
"A land of rolling hills and grass - lots of it. It is easily reachable by any pony.",
"A land thick with trees. A region filled with resources and appealing to many ponies.",
"A land choked with sand. A place too dry that is appealing for few, accesible to many.",
"A land of intense peaks. A place with thin air on top is a deterrent for many predators.",
"A land of volcanoes and suphur pits with mesas. No pony wishes to live in such extremes.",
"A region even more harsh than the desert. Many steep clifs have led ponies to their deaths."
];
var region_urls = [
	"IceRegion","GrassRegion","ForestRegion","DesertRegion","MountainRegion","FireRegion","CanyonRegion"
];var tileselector = null;
var regions = createArray(region_urls.length);

var loaded = 0;
function preloadImages(){
	//tiles.push(new Image());
	for(var i = 0; i<tiles_urls.length;i++){
		tiles[i][0] = new Image();
		tiles[i][0].onload=onload(i);
		tiles[i][4] = new Image();
		tiles[i][4].onload=onload(i);
		
		if(!(""+tiles_urls[i]).includes("http"))
			if(tiles_urls[i].length>0) tiles[i][0].src="resources/img/tex/"+tiles_urls[i]+".png";
			else tiles[i][0]=null;
		else if(tiles_urls[i].length>0)tiles[i][0].src=tiles_urls[i];
		else tiles[i][0]=null;
		
		if(!(""+tiles_shaded_urls[i]).includes("http"))
		tiles[i][4].src="resources/img/tex/shade/"+tiles_urls[i]+".png";
		else if(tiles_shaded_urls[i].length>0)tiles[i][4].src=tiles_shaded_urls[i];
		else tiles[i][4]=null;
	}
	///*
	for(var i = 0; i<region_urls.length;i++){
		regions[i] = new Image();
		regions[i].onload=onload();
		regions[i].src="resources/img/prev/"+region_urls[i]+".png";
	}//*/
	tileselector = new Image();
	tileselector.onload = onload();
	tileselector.src="resources/img/tex/selector.png";
	
	var offset=tiles.length;
	for(var i =0; i < zone_urls.length;i++){
		tiles[i+offset] = [];
		tiles[i+offset][0] = new Image();
		tiles[i+offset][0].onload=onload(i+offset);
		tiles[i+offset][4] = new Image();
		tiles[i+offset][4].onload=onload(i+offset);
		if(!(""+zone_urls[i]).includes("http"))
			if(zone_urls[i].length>0) tiles[i+offset][0].src="resources/img/tex/"+zone_urls[i]+".png";
			else tiles[i+offset][0]=null;
		else if(zone_urls[i].length>0)tiles[i+offset][0].src=zone_urls[i];
		else tiles[i+offset][0]=null;
		
		if(!(""+zone_urls_shaded[i]).includes("http"))
		tiles[i+offset][4].src="resources/img/tex/shade/"+zone_urls_shaded[i]+".png";
		else if(zone_urls_shaded[i].length>0)tiles[i+offset][4].src=zone_urls_shaded[i];
		else tiles[i+offset][4]=null;
	}
	offset=tiles.length;
	for(var i =0; i < building_urls.length;i++){
		tiles[i+offset] = [];
		tiles[i+offset][0] = new Image();
		tiles[i+offset][0].onload=onload(i+offset);
		tiles[i+offset][4] = new Image();
		tiles[i+offset][4].onload=onload(i+offset);
		if(!(""+building_urls[i]).includes("http"))
			if(building_urls[i].length>0) tiles[i+offset][0].src="resources/img/tex/bld/"+building_urls[i]+".png";
			else tiles[i+offset][0]=null;
		else if(building_urls[i].length>0)tiles[i+offset][0].src=building_urls[i];
		else tiles[i+offset][0]=null;
		
		if(!(""+buildings_shaded_urls[i]).includes("http"))
		tiles[i+offset][4].src="resources/img/tex/shade/bld/"+buildings_shaded_urls[i]+".png";
		else if(buildings_shaded_urls[i].length>0)tiles[i+offset][4].src=buildings_shaded_urls[i];
		else tiles[i+offset][4]=null;
	}
	
}

function onload(n){
	if(typeof n!=='undefined'){
		for(var i = 1; i < 4;i++){
			tiles[n][i]=tiles[n][0];
		}
		for(var i = 5; i < 8;i++){
			tiles[n][i]=tiles[n][4];
		}
	}/**/
	loaded++;
	if(loaded==tiles_urls.length+region_urls.length+1+tiles_shaded_urls.length+3+
		zone_urls.length+zone_urls_shaded.length+building_urls.length)/*1 is for selector*//*3 is for the pony assets*/{
		//graphics();
		//setInterval(graphics,1000/60);
		for(var i = 0; i < tiles.length;i++){
			for(var a = 1; a < 4;a++){
				tiles[i][a]=tiles[i][0];
				tiles[i][a+4]=tiles[i][4];
			}
		}
		setFPS();
	}
}
//*
var ponyBase = new Image();
ponyBase.onload=onload();
ponyBase.src="resources/img/pone/earth_horizontal.png";
var ponyHair = new Image();
ponyHair.onload=onload();
ponyHair.src="resources/img/pone/hair_horizontal.png";
var ponyGuard = new Image();
ponyGuard.onload=onload();
ponyGuard.src="resources/img/pone/guard_horizontal.png";//*/
/*var ponyBase = new Image();
ponyBase.src="resources/img/pone/earth_horizontal.png";
var ponyHair = new Image();
ponyHair.src="resources/img/pone/hair_horizontal.png";
var ponyGuard = new Image();
ponyHair.src="resources/img/pone/guard_horizontal.png";

*///MOVED TO LOADER
//FIXME
/**class Life{
	
}Life.day=true;
**/

var Life = new function(){
	this.day=true;
}

var OPPT = true,trainAI=false;

function recolorPony(){
	var all = document.createElement('canvas');
	var tmp = document.createElement('canvas');
	var ctx = tmp.getContext('2d');
	
	var body = new Image();
	
	var hair = new Image();
	
	
	// save the context state
	ctx.save();

	// draw the overlay
	ctx.drawImage(body,150,35);

	// change composite mode to source-in
	// any new drawing will only overwrite existing pixels
	ctx.globalCompositeOperation="source-in";

	// draw a purple rectangle the size of the canvas
	// Only the overlay will become purple
	ctx.fillStyle=newColor;
	ctx.fillRect(0,0,canvas.width,canvas.height);

	// change the composite mode to destination-atop
	// any new drawing will not overwrite any existing pixels
	ctx.globalCompositeOperation="destination-atop";
}



function PonyAI(n0,n1,x,y,z,img_base,hairType,img_hair){
	this.name0=n0;
	this.name1=n1;
	this.x=x;
	this.y=y;
	this.z=z;
	this.dir=0,this.xDir=1,this.yDir=0;
	this.pony=img_base;
	this.hairType=hairType;
	this.hair=img_hair;
	this.mod=0;//0 citizen, 1 guard, 2 prision
	this.lr=1;//face left or right
	this.walk=0;
	this.oscillate=0;
}

var AInames = [
	[
		"Harvester",
		"Gatherer",
		"Manager",
		"Overseer",
		"Laborer",
		"Employee",
		"Logistian",
		"Transporter",
		"Guard",
		"Soldier",
		"Traveler",
		"Citizen",
		"Grower",
		"Farmer",
		"Builder",
		"Contractor"
	],
	[
		"The_Quick",
		"Solid_Hoof",
		"The_Lovely",
		"Breeze",
		"Silver_Hoof",
		"Steady_Gait",
		"Warm_Heart",
		"The_Nervous",
		"Autumn",
		"Spring",
		"Summer",
		"Winter",
		"The_Adept",
		"Anonymous",
		"Tupper_Ware",
		"Hoof"
		//"I_HAD_A_NAME_BUT_I_CHANGED_IT_TO_THIS"
	]
];

var pones = [];
var ponySpawn = [[0,0,15]];
var wolves =[];

function addEntryRoad(x,y,z){
	ponySpawn[ponySpawn.length]=[x,y,z];
}

function removeEntryRoad(x,y,z){
	for(var i = 0; i < ponySpawn.length;i++){
		if(ponySpawn[i][0]==x&&ponySpawn[i][1]==y&ponySpawn[i][2]==z){
				var arr = ponySpawn.splice(i,1);
			return;
		}
	}
}

function removePopulation(pony){
	if(''+pony !== 'undefined')
	//var hors = pones.splice( pony, 1 )[0];
	var hors = pones.splice( pony, 1 );
}

function killPony(pony){
	//if(''+pony !== 'undefined')
	//var hors = pones.splice( pony, 1 )[0];
	var hors = pones.splice( pony, 1 );
}

//Huheuheuhuehue, dirty minded people
function createPony(){
	if(ponySpawn.length<0)return;
	var spawn = new Random().nextInt(ponySpawn.length);
	if(ponySpawn[spawn].length<0)return;
	pones[pones.length]=new PonyAI(
	AInames[0][new Random().nextInt(AInames[0].length)],AInames[1][new Random().nextInt(AInames[1].length)],
	ponySpawn[spawn][0],ponySpawn[spawn][1],ponySpawn[spawn][2],
	
	//FIXME add in recolors
	ponyBase,new Random().nextInt(3),ponyHair);
}//createPony();killPony(0);

//checked before calling function ro prevent slowdowns -- must be day
function movePonies(){
	
	if(!Life.day)return;
		//getXDir
		//getYDir
		//if(moveCase(getX+XDir,getY+YDir,z)
		//find new dir
		//if no dir, nothing, will either fall or walk down next update.
		//possible for it to become stuck w/o surrounding paths after on the ground
		
		//int 0 = time variables
		//position, dir
		
		//int 1 = graphics variables
		//[q+1]&0xF    = frame 0
		//[q+1]>>4&0xf = frame 2
		//[q+1]>>8&0xF = name  1
		//[q+1]>>12&0xf
		
		removePopulation();
		//FIXME AD IN WOLVES
		//tickWolves();
		
		//if(!Life.day)return;
		
		for(var q = 0; q < pones.length;q++){
			
			//FIXME
			//if(wolves.length>0&&(pones[q+1]>>18&0x3)==1)
			//enGuarde(q);
			//else
			if(pones.mod!=2||!Life.day&&pones.mod==1){
				var x = pones[q].x;
				var y = pones[q].y;
				var z = pones[q].z;
			
				var xDir = pones[q].xDir;//-1; -- I assume this was supposed to be 1 or negative 1 -- or more likely 0 and nevative 1
				var yDir = pones[q].yDir;//-1; -- same with y as abive
				var lr = pones[q].lr;//(pones[q]>>22&0x1);// 23 / 32 bits
				
				//System.out.println("xd: "+xDir+"  yd: "+yDir);
				
				
				if(fallCase(x,y,z))
					z--;
				
				
				/*********************************************************/
				/**************KILLS THE "Train AI's"*********************/
				/*********************************************************/
				if(trainAI)
				if(xDir!=0){//check Y Paths, for random AI Movement
					var w = checkY(x,y,z);
					if(w!=0&&new Random().nextInt(2)==0){
						xDir=0;
						yDir=w;
					}
				}else{//check Y Paths, for random AI Movement
					var w = checkX(x,y,z);
					if(w!=0&&new Random().nextInt(2)==0){
						yDir=0;
						xDir=w;
					}
				}
				
				
				
				
				
				
				switch(xDir){
				case(-1):
					if(x>0&&walkCase(x-1,y,z)){
						x-=1;
						//lr=0;
						break;
					}else{
						if(checkY(x,y,z)!=0){
							xDir=0;
							yDir=checkY(x,y,z);
							//y+=yDir;
							break;
						}else if(checkX(x,y,z)!=0){//failure
							yDir=0;
							xDir=checkX(x,y,z);
							x+=xDir;
						}else{
							break;//no motion (motion is stored for later changes once path is added/removed)
						}
					}
					break;
				
				case(1):
					if(x<grid.length-1&&walkCase(x+1,y,z)){
						x+=1;
						//lr=1;
						break;
					}else{
						if(checkY(x,y,z)!=0){
							xDir=0;
							yDir=checkY(x,y,z);
							//y+=yDir;
							break;
						}else if(checkX(x,y,z)!=0){//failure
							yDir=0;
							xDir=checkX(x,y,z);
							x+=xDir;
						}else{
							break;//no motion (motion is stored for later changes once path is added/removed)
						}
					}
					break;
				
				}
				switch(yDir){
				case(-1):
					if(y>0&&walkCase(x,y-1,z)){
						y-=1;
						//lr=0;
						break;
					}else{
						if(checkX(x,y,z)!=0){
							yDir=0;
							xDir=checkX(x,y,z);
							x+=xDir;
							break;
						}else if(checkY(x,y,z)!=0){//failure
							xDir=0;
							yDir=checkY(x,y,z);
							y+=yDir;
						}else{
							break;//no motion (motion is stored for later changes once path is added/removed)
						}
					}
					break;
				case(1):
					if(y<grid[0].length-1&&walkCase(x,y+1,z)){
						y+=1;
						//lr=1;
						break;
					}else{
						if(checkX(x,y,z)!=0){
							yDir=0;
							xDir=checkX(x,y,z);
							x+=xDir;
							break;
						}else if(checkY(x,y,z)!=0){//failure
							xDir=0;
							yDir=checkY(x,y,z);
							y+=yDir;
						}else{
							break;//no motion (motion is stored for later changes once path is added/removed)
						}
					}
					break;
				
				}
				
				if(riseCase(x+xDir,y+yDir,z))z++;
				else
				if(downCase(x,y,z))z--;
				else
				if(z>0&&fallCase(x,y,z))
					z--;
				
				//FIXME RENDER POSE
				/*switch(xDir){
				case(0):break;
				case(-1):
					lr=lrs[Boot.v.rotate*4+0];
					break;
				case(1):
					lr=lrs[Boot.v.rotate*4+1];
					break;
					default: lr=0;
				}
				switch(yDir){
				case(0):break;
				case(-1):
					lr=lrs[Boot.v.rotate*4+2];
					break;
				case(1):
					lr=lrs[Boot.v.rotate*4+3];
					break;
					default: lr=0;
				}*/
				
				pones[q].x=x;
				pones[q].y=y;
				pones[q].z=z;
			
				pones[q].xDir=xDir;//-1; -- I assume this was supposed to be 1 or negative 1 -- or more likely 0 and nevative 1
				pones[q].yDir=yDir;//-1; -- same with y as abive
				//var lr = (pones[q]>>22&0x1);// 23 / 32 bits
				console.log(x+" "+y+" "+z+"   :: "+xDir+" "+yDir);
				//pones[q] = ((lr&0x1)<<22)|(((yDir+1)&0x3)<<20)|(((xDir+1)&0x3)<<18)|((z&0x3f)<<12)|((y&0x3f)<<6)|(x&0x3f);
			}
		}
	
}

var lrs = [0,1,0,1,  1,0,0,1,  1,0,1,0,  0,1,1,0];
function walkCase(x,y,z){
	if(Point.inRect(-1, -1, grid.length+1, grid[0].length+1, x, y))
	switch(grid[x][y][z]){
	case(0)://true
		if(fallCase(x,y,z))return false;
		//if(z>0){
		if(!downCase(x,y,z))
			return false;
			return true;
		//}else
		//return Menus.spazAI;
	case(10)://tile
		if(!fallCase(x,y,z))
		return true;
		return false;
	
	default:return false;
	}
	return false;
}
function fallCase(x,y,z){
	if(z>0&&(grid[x][y][z-1])==0)//only if air
	return true;
	return false;
}
function downCase(x,y,z){
	if(z>0&&grid[x][y][z-1]==10)return true;//if tile
	return false;
}
function riseCase(x,y,z){
	if(Point.inRect(-1, -1, grid.length+1, grid[0].length+1, x, y))
	if(z+1<grid[0][0].length&&grid[x][y][z+1]==10)
	return true;
	return false;
}



function checkX(x,y,z){
	switch(new Random().nextInt(2)){
	case(0):
			if(walkCase(x-1,y,z))
			return -1;
			if(walkCase(x+1,y,z))
			return 1;
		return 0;
	case(1):
			if(walkCase(x+1,y,z))
			return 1;
			if(walkCase(x-1,y,z))
			return -1;
		return 0;
	}
	return 0;
}
function checkY(x,y,z){
	switch(new Random().nextInt(2)){
	case(0):
			if(walkCase(x,y-1,z))
			return -1;
			if(walkCase(x,y+1,z))
			return 1;
		return 0;
	case(1):
			if(walkCase(x,y+1,z))
			return 1;
			if(walkCase(x,y-1,z))
			return -1;
		return 0;
	}
	return 0;
}


//FIXME add in guard specifically -- CHANGE TO VARIABLES INSTEAD OF BITWISE
//do note that varibles can be coerced into integers with >>> or |0;
/*
function checkGuardX(x,y,z, wolf){
	if(x < (wolves[wolf*2]&0x3f)){
		if(guardWalkCase(x+1,y,z))
		return 1;
	}
	if(x > (wolves[wolf*2]&0x3F)){
		if(guardWalkCase(x-1,y,z))
		return -1;
	}
	return 0;
}
function checkGuardY(x,y,z,wolf){
	if(y < (wolves[wolf*2]>>6&0x3f)){
		if(guardWalkCase(x,y-1,z))
		return 1;
	}
	if(y > (wolves[wolf*2]>>6&0x3F)){
		if(guardWalkCase(x,y-1,z))
		return -1;
	}
	return 0;
}
*/












/*
function renderPonies(){
	int
	
	int tmp = ((zz&0x3f)<<12)|((yy&0x3f)<<6)|((xx&0x3f));
		for(int q = 1; q < pones.length && !change;q+=(((int)(2.0f*rend[render])))){
			if((tmp^(pones[q-1]&0x3FFFF))==0&&(pones[q]>>18&0x3)!=2){
				
				int f0 = pones[q]&0xF;
				int f1 = pones[q]>>4&0xF;
				int hair = pones[q]>>8&0x3;
				
				
				int lr = pones[q-1]>>22&0x1;
				
				//int name1 = pones[q]>>8&0xF;
				//int name2 = pones[q]>>12&0xf;
			
				
				g.drawImage(imgs[q-1],x+w*lr,y-z,                    x+w*(1-lr),h+y-z,32*(f0/2),0,32+32*(f0/2),32,null);
				if((pones[q]>>18&0x3)==1){
					g.drawImage(guard,x+w*lr,y-(w/32)*offset[f0/2]-z,w*(1-lr)+x,h+y-z,32*(hair*2),0,32+32*(hair*2),32,null);
					g.drawImage(guard,x+w*lr,y-(h/32)*offset[f1/2]-z,w*(1-lr)+x,h+y-z,32*(hair*2+1),0,32+32*(hair*2+1),32,null);
				}else{
					g.drawImage(imgs[q],x+w*lr,y-(w/32)*offset[f0/2]-z,w*(1-lr)+x,h+y-z,32*(hair*2),0,32+32*(hair*2),32,null);
					g.drawImage(imgs[q],x+w*lr,y-(h/32)*offset[f1/2]-z,w*(1-lr)+x,h+y-z,32*(hair*2+1),0,32+32*(hair*2+1),32,null);
				}
				
				//time scale perhaps to limit super fast movement
				f0++;
				f1++;
				if(f0==12)f0=0;
				if(f1==12){
					f1=0;
				}
						//names0 + names 1
				//((pones[q]&0x3FC00)<<10)|((hair&0x3)<<8)|((f1&0xf)<<4)|(f0&0xf);
				pones[q] = ((pones[q]>>18&0x3)<<18)|(((pones[q]>>14)&0xf)<<14)|(((pones[q]>>10)&0xf)<<10)|((hair&0x3)<<8)|((f1&0xf)<<4)|(f0&0xf);
				//System.out.println(xx+" , "+yy+" , "+zz);
				
				if(Menus.OPPT)return;
				//System.out.println("RENDERED!");
			}
			
		}
		
	renderWolves(g,x,y, z,xx,yy,zz);
}
//*/
function renderPonies(x,y,z,xx,yy,zz){
	for(var q = 0; q < pones.length;q++){
		if(pones.mod!=2&&pones[q].x==x&&pones[q].y==y&&pones[q].z==z){//0is false, so anything that is equal
			/*g.setColor("red");
			g.fillRect(
			(h_width*xx+h_width*yy+q_width)*scale+xscroll,
			(-q_width*xx+q_width*yy-zz*h_height+q_height)*scale+yscroll,
			h_width*scale,h_height*scale
			);*/
			
			
			g.drawImage(pones[q].pony,q_width*Math.trunc(pones[q].walk/10),0,q_width,q_height,
			(h_width*xx+h_width*yy+q_width)*scale+xscroll,
			(-q_width*xx+q_width*yy-zz*h_height+q_height)*scale+yscroll,
			//(h_width*xx+h_width*yy+q_width+q_width)*scale+xscroll,
			//(-q_width*xx+q_width*yy-zz*h_height+q_height+q_height)*scale+yscroll,
			h_width*scale,h_height*scale
			);
			g.drawImage(pones[q].hair,q_width*pones[q].hairType,0,q_width,q_height,
			(h_width*xx+h_width*yy+q_width)*scale+xscroll,
			(-q_width*xx+q_width*yy-zz*h_height+q_height)*scale+yscroll,
			//(h_width*xx+h_width*yy+q_width+q_width)*scale+xscroll,
			//(-q_width*xx+q_width*yy-zz*h_height+q_height+q_height)*scale+yscroll,
			h_width*scale,h_height*scale
			);
			
			pones[q].walk=(pones[q].walk+1)%60;
			//pones[q].walk++;//=(pones[q].walk+1)%60;
			//if(pones[q].walk>59)pones[q].walk=0;
			
			if(OPPT)
			return;
			var f0 = pones[q].walk;//motion frame
			var f1 = pones[q].oscillate;//motion bob
			var hair = pones[q].hairType;//hair type
			
			
			var lr = pones[q].lr;//pones[q-1]>>22&0x1;
			
			//int name1 = pones[q]>>8&0xF;
			//int name2 = pones[q]>>12&0xf;
			
			
			
			//FIXME add in frames and graphic reflection
			/**
			g.drawImage(imgs[q-1],x+w*lr,y-z,                    x+w*(1-lr),h+y-z,32*(f0/2),0,32+32*(f0/2),32);
			if((pones[q]>>18&0x3)==1){
				g.drawImage(guard,x+w*lr,y-(w/32)*offset[f0/2]-z,w*(1-lr)+x,h+y-z,32*(hair*2),0,32+32*(hair*2),32);
				g.drawImage(guard,x+w*lr,y-(h/32)*offset[f1/2]-z,w*(1-lr)+x,h+y-z,32*(hair*2+1),0,32+32*(hair*2+1),32);
			}else{
				g.drawImage(imgs[q],x+w*lr,y-(w/32)*offset[f0/2]-z,w*(1-lr)+x,h+y-z,32*(hair*2),0,32+32*(hair*2),32);
				g.drawImage(imgs[q],x+w*lr,y-(h/32)*offset[f1/2]-z,w*(1-lr)+x,h+y-z,32*(hair*2+1),0,32+32*(hair*2+1),32);
			}
			**/
			
			//time scale perhaps to limit super fast movement
			f0++;
			f1++;
			if(f0==12)f0=0;
			if(f1==12){
				f1=0;
			}
					//names0 + names 1
			//((pones[q]&0x3FC00)<<10)|((hair&0x3)<<8)|((f1&0xf)<<4)|(f0&0xf);
			pones[q] = ((pones[q]>>18&0x3)<<18)|(((pones[q]>>14)&0xf)<<14)|(((pones[q]>>10)&0xf)<<10)|((hair&0x3)<<8)|((f1&0xf)<<4)|(f0&0xf);
			//System.out.println(xx+" , "+yy+" , "+zz);
			
			if(OPPT)return;//ONE PONY PER TILE, lol
			//System.out.println("RENDERED!");
		}
		
	}
		
	//renderWolves(g,x,y, z,xx,yy,zz);
}
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
	if(gameState==1)
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
		if(e.deltaY<0){
			if(scale<1){
				
				/**
				//x scroll seems to work fine, but y scroll does not line up
				var xp = (h_width*((mx-xscroll)/t_width))+h_width*((my-yscroll)/t_height))*scale;
				xscroll=-((mx-xscroll)/t_width)*t_width;
				//(h_width*x+h_width*y)*scale -- exact x position
				yscroll=((my-yscroll)/t_height)*t_height+(mx-xscroll);
				**/
				////Boot.v.xoff=(Boot.width/2-Boot.v.grid.grid.length*size);
				////Boot.v.yoff=(Boot.height/2);//+Boot.v.yoff/size;
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
preloadImages();