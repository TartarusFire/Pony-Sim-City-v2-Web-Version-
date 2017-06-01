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