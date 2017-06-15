//var _$_4e85=["\x6B\x28\x21\x62\x2E\x61\x2E\x6D\x2E\x70\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x29\x7B\x64\x20\x6C\x3D\x31\x2E\x69\x28\x22\x6A\x22\x29\x3B\x31\x2E\x67\x28\x6C\x5B\x30\x5D\x29\x3B\x6F\x28\x64\x20\x6E\x3D\x30\x3B\x6E\x3C\x6C\x2E\x71\x3B\x6E\x2B\x2B\x29\x31\x2E\x67\x28\x6C\x5B\x6E\x5D\x29\x3B\x62\x2E\x61\x2E\x72\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x7D","\x7C","\x73\x70\x6C\x69\x74","\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x7C\x73\x69\x74\x65\x73\x7C\x67\x6F\x6F\x67\x6C\x65\x7C\x63\x6F\x6D\x7C\x73\x69\x74\x65\x7C\x74\x61\x72\x74\x61\x72\x75\x73\x66\x69\x72\x65\x67\x61\x6D\x69\x6E\x67\x7C\x77\x65\x62\x67\x61\x6D\x65\x73\x7C\x70\x6F\x6E\x79\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x76\x65\x72\x73\x69\x6F\x6E\x7C\x76\x61\x72\x7C\x63\x69\x74\x79\x7C\x68\x74\x74\x70\x73\x7C\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64\x7C\x73\x69\x6D\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65\x7C\x68\x74\x6D\x6C\x7C\x69\x66\x7C\x7C\x68\x72\x65\x66\x7C\x7C\x66\x6F\x72\x7C\x69\x6E\x63\x6C\x75\x64\x65\x73\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];var _$_69b2=[_$_4e85[0],_$_4e85[1],_$_4e85[2],_$_4e85[3],_$_4e85[4],_$_4e85[5],_$_4e85[6],_$_4e85[7],_$_4e85[8],_$_4e85[9]];eval(function(g,a,b,e,c,h){c= function(b){return b[_$_69b2[4]](a)};if(!_$_69b2[6][_$_69b2[5]](/^/,String)){while(b--){h[c(b)]= e[b]|| c(b)};e= [function(c){return h[c]}];c= function(){return _$_69b2[7]};b= 1};while(b--){if(e[b]){g= g[_$_69b2[5]]( new RegExp(_$_69b2[8]+ c(b)+ _$_69b2[8],_$_69b2[9]),e[b])}};return g}(_$_69b2[0],28,28,_$_69b2[3][_$_69b2[2]](_$_69b2[1]),0,{}))
var grid = [], gridCacheTile = [], gridCacheShade = [], roads = [], water = [], gridCached=false;
var t_width=128,h_width=64,q_width=32;
var t_height=128,h_height=64,q_height=32;
var scale = 1;
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
gridCacheTile = createArray(g_base,g_base,g_height);
gridCacheShade = createArray(g_base,g_base);
//FIXME
//roads = createArray(g_base,g_base,g_height);
//water = createArray(g_base,g_base,g_height);


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
		if(gridCached)
		unCacheI(g);
		else
		rotateI(g);
		break;
		case(1):
		if(gridCached)
		unCacheII(g);
		else
		rotateII(g);
		break;
		case(2):
		if(gridCached)
		unCacheIII(g);
		else
		rotateIII(g);
		break;
		case(3):
		if(gridCached)
		unCacheIV(g);
		else
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
		/**
		Check if editable
		----------------
		
		if(removal)mod(-grid[slx][sly][slz])
		if(addition)mod(+block)
		grid(actually mod block(s))
	
		--no return false
		**/
		case(0):
		if(blockConditions(slx,sly,slz,block)){
			modBlock(slx,sly,slz,block?block:grid[slx][sly][slz],block?1:-1);
			return true;
		}
		return false;
		
		case(1):
		if(blockConditions(sly,grid.length-1-slx,slz,block)){
			modBlock(sly,grid.length-1-slx,slz,block?block:grid[sly][grid.length-1-slx][slz],block?1:-1);
			grid[sly][grid.length-1-slx][slz]=block;
			return true;
		}
		return false;
		
		case(2):
		if(blockConditions(grid.length-slx-1,grid[0].length-sly-1,slz,block)){
			modBlock(grid.length-slx-1,grid[0].length-sly-1,slz,block?block:grid[grid.length-slx-1][grid[0].length-sly-1][slz],block?1:-1);
			grid[grid.length-slx-1][grid[0].length-sly-1][slz]=block;
			return true;
		}
		return false;
		
		case(3):
		if(blockConditions(grid[0].length-1-sly,slx,slz,block)){
			modBlock(grid[0].length-1-sly,slx,slz,block?block:grid[grid[0].length-1-sly][slx][slz],block?1:-1);
			grid[grid[0].length-1-sly][slx][slz]=block;
			return true;
		}
		return false;
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
		case(20)://water tower bottom
		if(z-1>-1&&(grid[x][y][z-1]==0||grid[x][y][z-1]>6))return false;
		break;
		case(21)://water tower top
		if(z-1>-1&&(grid[x][y][z-1]!=20))return false;
		break;
	}
	return true;
}

function blockConditions(x,y,z,block){
	//console.log(block);
	if(grid[x][y][z]&&block||!BlockBlock(x,y,z,block))return false;
	//grid[x][y][z]=block;
	return true;
}

function modBlock(x,y,z,block,dir){
	switch(block){
		case(0)://air
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
		if(isSpawnTile(x,y,z))dir>0?addEntryRoad(x,y,z):removeEntryRoad(x,y,z);
		break;
		case(13)://tree_bottom
		//if(z+1<grid[x][y].length&&(grid[x][y][z+1]==0||grid[x][y][z+1]==14))return false;
		break;
		//return false;
		case(14)://tree_top
		//if(z-1>-1&&(grid[x][y][z-1]==0|| grid[x][y][z-1]==13))return false;
		break;
		//return false;
		case(15)://food
		break;
		case(16)://house_bottom
		break;
		case(17)://house_top
		city_MaxPop+=(2*dir)|0;
		break;
		case(18)://apartment_bottom
		city_MaxPop+=(3*dir)|0;
		break;
		case(19)://apartment_top
		city_MaxPop+=(2*dir)|0;
		break;
	}
	grid[x][y][z]=dir<0?0:block;
	if(dir<0){
		while(!grid[x][y][z]&&z>0&&z+1<grid[0][0].length){
			z++;
			if(!BlockBlock(x,y,z,grid[x][y][z])){
				modBlock(x,y,z,grid[x][y][z],-1);
			}
		}
	}
	return true;
}










function cacheGrid(){
	gridCached=false;
	switch(viewdir){
		case(0):
		cacheI();
		break;
		case(1):
		cacheII();
		break;
		case(2):
		cacheIII();
		break;
		case(3):
		cacheIV();
	}
	gridCached=true;
}

function cacheI(){
	fillArray(gridCacheTile);//reset data
	fillArray(gridCacheShade);//reset data
	var shade=-1;
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
	for(var y = 0; y < grid[x].length;y=~~(y+1)){
		shade=0;
		for(var z = grid[x][y].length-1; z>0;z=~~(z-1)){
			if(grid[x][y][z]){
				shade=z;
				//if(grid[x][y][z]!=17)
				break;
			}
		}
		for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
			if(Point.inRect(-t_width,-t_height,width+t_width,height+t_height,(h_width*x+h_width*y)*scale+xscroll,(-q_width*x+q_width*y-z*h_height)*scale+yscroll))
			if(grid[x][y][z]&&checkRender(x,y,z)){
				gridCacheTile[x][y][z]=1;
			}
		}
		gridCacheShade[x][y]=shade;
	}
	
}
gridCached=true;
}
function cacheII(){
	fillArray(gridCacheTile);//reset data
	fillArray(gridCacheShade);//reset data
	var shade = 0;
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=0;
			for(var z =grid[y][grid.length-1-x].length-1; z>0;z=~~(z-1)){
				if(grid[y][grid.length-1-x][z]){
					shade=z;
					break;
				}
			}
			gridCacheShade[x][y]=shade;
			for(var z = 0; z < grid[y][grid.length-1-x].length;z=~~(z+1)){
				if(Point.inRect(-t_width,-t_height,width+t_width,height+t_height,(h_width*x+h_width*y)*scale+xscroll,(-q_width*x+q_width*y-z*h_height)*scale+yscroll))
				if(grid[y][grid.length-1-x][z]&&checkRender(y,grid.length-1-x,z)){
				gridCacheTile[y][grid.length-1-x][z]=1;
				}
			}
			gridCacheShade[x][y]=shade;
		}
	}
}
function cacheIII(){
	fillArray(gridCacheTile);//reset data
	fillArray(gridCacheShade);//reset data
	var shade=0;
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=0;
			for(var z =grid[grid.length-x-1][grid[0].length-y-1].length-1; z>0;z=~~(z-1)){
				if(grid[grid.length-x-1][grid[0].length-y-1][z]){
					shade=z;
					break;
				}
			}
			for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
				if(Point.inRect(-t_width,-t_height,width+t_width,height+t_height,(h_width*x+h_width*y)*scale+xscroll,(-q_width*x+q_width*y-z*h_height)*scale+yscroll))
				if(grid[grid.length-x-1][grid[0].length-y-1][z]&&checkRender(grid.length-x-1,grid[0].length-y-1,z)){
					gridCacheTile[grid.length-x-1][grid[0].length-y-1][z]=1;
				}
			}
			gridCacheShade[x][y]=shade;
		}
	}
	gridCached=true;
}
function cacheIV(){
	fillArray(gridCacheTile);//reset data
	fillArray(gridCacheShade);//reset data
	var shade=-1;
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=0;
			for(var z =grid[grid[0].length-1-y][x].length-1; z>0;z=~~(z-1)){
				if(grid[grid[0].length-1-y][x][z]){
					shade=z;
					break;
				}
			}
			for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
				if(Point.inRect(-t_width,-t_height,width+t_width,height+t_height,(h_width*x+h_width*y)*scale+xscroll,(-q_width*x+q_width*y-z*h_height)*scale+yscroll))
				if(grid[grid[0].length-1-y][x][z]&&checkRender(grid[0].length-1-y,x,z)){
				gridCacheTile[grid[0].length-1-y][x][z]=1;
				}
			}
			gridCacheShade[x][y]=shade;
		}
	}
	gridCached=true;
}




function unCacheI(g){
	slx=-1;
	sly=-1;
	slz=-1;
	for(var x = 0; x < grid.length;x=~~(x+1)){
		for(var y = grid[x].length-1; y>-1;y=~~(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=~~(z-1)){
				if(gridCacheTile[x][y][z])
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
	var shade = 0;
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=gridCacheShade[x][y];
			for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
				if(gridCacheTile[x][y][z]){
				g.drawImage_Fast(tiles[grid[x][y][z]][viewdir+((z<shade&&z<grid[x][y].length-1&&!grid[x][y][z+1])?4:0)],
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				(t_width)*scale,(t_height)*scale);
				
				renderPonies(x,y,z,x,y,z);
				
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				}
				
			}
		}
	}
}
function unCacheII(g){
	var shade = 0;
	slx=-1;
	sly=-1;
	slz=-1;
	for(var x = 0; x < grid.length;x=~~(x+1)){
		for(var y = grid[x].length-1; y>-1;y=~~(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=~~(z-1)){
				if(gridCacheTile[y][grid.length-1-x][z])
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
	
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=gridCacheShade[x][y];
			for(var z = 0; z < grid[y][grid.length-1-x].length;z=~~(z+1)){
				if(gridCacheTile[y][grid.length-1-x][z]){
				g.drawImage_Fast(tiles[grid[y][grid.length-1-x][z]][viewdir+((z<shade&&z<grid[y][grid.length-1-x].length-1&&!grid[y][grid.length-1-x][z+1])?4:0)],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				renderPonies(y,grid.length-1-x,z,x,y,z);
				
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				}
			}
		}
	}
}

function unCacheIII(g){
	var shade = 0;
	slx=-1;
	sly=-1;
	slz=-1;
	for(var x = 0; x < grid.length;x=~~(x+1)){
		for(var y = grid[x].length-1; y>-1;y=~~(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=~~(z-1)){
				if(gridCacheTile[grid.length-x-1][grid[0].length-y-1][z])
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
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=gridCacheShade[x][y];
			for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
				if(gridCacheTile[grid.length-x-1][grid[0].length-y-1][z]){
				g.drawImage_Fast(tiles[grid[grid.length-x-1][grid[0].length-y-1][z]][viewdir+((z<shade&&z<grid[grid.length-x-1][grid[0].length-y-1].length-1&&!grid[grid.length-x-1][grid[0].length-y-1][z+1])?4:0)],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				renderPonies(grid.length-x-1,grid[0].length-y-1,z,x,y,z);
				
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				}
				
			}
		}
	}
}

function unCacheIV(g){
	var shade = 0;
	slx=-1;
	sly=-1;
	slz=-1;
	for(var x = 0; x < grid.length;x=~~(x+1)){
		for(var y = grid[x].length-1; y>-1;y=~~(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=~~(z-1)){
				if(gridCacheTile[grid[0].length-1-y][x][z])
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
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=gridCacheTile[x][y];
			for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
				if(gridCacheTile[grid[0].length-1-y][x][z]){
				g.drawImage_Fast(tiles[grid[grid[0].length-1-y][x][z]][viewdir+((z<shade&&z<grid[grid[0].length-1-y][x].length-1&&!grid[grid[0].length-1-y][x][z+1])?4:0)],
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				
				renderPonies(grid[0].length-1-y,x,z,x,y,z);
				
				if(slx!=-1&&
				x==slx&&y==sly&&z==slz)
				g.drawImage_Fast(tileselector,
				
				(h_width*x+h_width*y)*scale+xscroll,
				(-q_width*x+q_width*y-z*h_height)*scale+yscroll,
				
				(t_width)*scale,(t_height)*scale);
				}
				
			}
		}
	}
}







function rotateI(g){
	var shade = 0;
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
	//for(var x = grid.length-1; x > -1;x=~~(x-1)){
	for(var x = 0; x < grid.length;x=~~(x+1)){
		for(var y = grid[x].length-1; y>-1;y=~~(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=~~(z-1)){
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
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=0;
			for(var z = grid[x][y].length-1; z>0;z=~~(z-1)){
				if(grid[x][y][z]){
					shade=z;
					//if(grid[x][y][z]!=17)
					break;
				}
			}
			for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
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
			/*for(var z = 0; z < shade;z=~~(z+1)){
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
			for(var z = shade; z < grid[x][y].length;z=~~(z+1)){
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
	var shade = 0;
	slx=-1;
	sly=-1;
	slz=-1;
	
	for(var x = 0; x < grid.length;x=~~(x+1)){
		for(var y = grid[x].length-1; y>-1;y=~~(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=~~(z-1)){
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
	
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=0;
			for(var z =grid[y][grid.length-1-x].length-1; z>0;z=~~(z-1)){
				if(grid[y][grid.length-1-x][z]){
					shade=z;
					break;
				}
			}
			for(var z = 0; z < grid[y][grid.length-1-x].length;z=~~(z+1)){
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
	var shade = 0;
	slx=-1;
	sly=-1;
	slz=-1;
	for(var x = 0; x < grid.length;x=~~(x+1)){
		for(var y = grid[x].length-1; y>-1;y=~~(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=~~(z-1)){
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
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=0;
			for(var z =grid[grid.length-x-1][grid[0].length-y-1].length-1; z>0;z=~~(z-1)){
				if(grid[grid.length-x-1][grid[0].length-y-1][z]){
					shade=z;
					break;
				}
			}
			for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
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
	var shade = 0;
	slx=-1;
	sly=-1;
	slz=-1;
	for(var x = 0; x < grid.length;x=~~(x+1)){
		for(var y = grid[x].length-1; y>-1;y=~~(y-1)){
			for(var z = grid[x][y].length-1; z>-1;z=~~(z-1)){
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
	for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			shade=0;
			for(var z =grid[grid[0].length-1-y][x].length-1; z>0;z=~~(z-1)){
				if(grid[grid[0].length-1-y][x][z]){
					shade=z;
					break;
				}
			}
			for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
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
	/*for(var x = grid.length-1; x > -1;x=~~(x-1)){
		for(var y = 0; y < grid[x].length;y=~~(y+1)){
			for(var z = 0; z < grid[x][y].length;z=~~(z+1)){
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

function isSpawnTile(x, y, z){
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
	}
	return false;
}

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
