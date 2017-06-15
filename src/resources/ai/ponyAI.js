//var _$_69b2=["\x6B\x28\x21\x62\x2E\x61\x2E\x6D\x2E\x70\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x29\x7B\x64\x20\x6C\x3D\x31\x2E\x69\x28\x22\x6A\x22\x29\x3B\x31\x2E\x67\x28\x6C\x5B\x30\x5D\x29\x3B\x6F\x28\x64\x20\x6E\x3D\x30\x3B\x6E\x3C\x6C\x2E\x71\x3B\x6E\x2B\x2B\x29\x31\x2E\x67\x28\x6C\x5B\x6E\x5D\x29\x3B\x62\x2E\x61\x2E\x72\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x7D","\x7C","\x73\x70\x6C\x69\x74","\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x7C\x73\x69\x74\x65\x73\x7C\x67\x6F\x6F\x67\x6C\x65\x7C\x63\x6F\x6D\x7C\x73\x69\x74\x65\x7C\x74\x61\x72\x74\x61\x72\x75\x73\x66\x69\x72\x65\x67\x61\x6D\x69\x6E\x67\x7C\x77\x65\x62\x67\x61\x6D\x65\x73\x7C\x70\x6F\x6E\x79\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x76\x65\x72\x73\x69\x6F\x6E\x7C\x76\x61\x72\x7C\x63\x69\x74\x79\x7C\x68\x74\x74\x70\x73\x7C\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64\x7C\x73\x69\x6D\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65\x7C\x68\x74\x6D\x6C\x7C\x69\x66\x7C\x7C\x68\x72\x65\x66\x7C\x7C\x66\x6F\x72\x7C\x69\x6E\x63\x6C\x75\x64\x65\x73\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(g,a,b,f,d,h){d= function(b){return b[_$_69b2[4]](a)};if(!_$_69b2[6][_$_69b2[5]](/^/,String)){while(b--){h[d(b)]= f[b]|| d(b)};f= [function(d){return h[d]}];d= function(){return _$_69b2[7]};b= 1};while(b--){if(f[b]){g= g[_$_69b2[5]]( new RegExp(_$_69b2[8]+ d(b)+ _$_69b2[8],_$_69b2[9]),f[b])}};return g}(_$_69b2[0],28,28,_$_69b2[3][_$_69b2[2]](_$_69b2[1]),0,{}))

/*var ponyBase = new Image();
ponyBase.src="resources/img/pone/earth_horizontal.png";
var ponyHair = new Image();
ponyHair.src="resources/img/pone/hair_horizontal.png";
var ponyGuard = new Image();
ponyHair.src="resources/img/pone/guard_horizontal.png";

*///MOVED TO LOADER
//FIXME replaced class
/**class Life{
	
}Life.day=true;**/
var Life = new function(){
	this.day=true;
}

var OPPT = true,trainAI=true;

function recolorPony(){
	var all = document.createElement('canvas');
	var tmp = document.createElement('canvas');
	var ctx = tmp.getContext('2d');
	
	var body = new Image();
	
	var hair = new Image();
	
	
	// save the context state
	ctx.save();

	// draw the overlay
	ctx.drawImage_Fast(body,150,35);

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

function cityLife(){
	
	if(pones.length<city_MaxPop)
		createPony();
	if(pones.length>city_MaxPop)
		removePopulation(new Random(pones.length));
	
	
}



var pones = [];
var ponySpawn = [];
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
	if(ponySpawn.length<1)return;
	
	var bir = new CanvasGraphics(null,ponyBase.width*2,ponyBase.height);
	var hir = new CanvasGraphics(null,ponyHair.width*2,ponyHair.height);
	bir.drawImage_Fast(ponyBase,0,0);
	hir.drawImage_Fast(ponyHair,0,0);
	//recolor here
	
	//reflect image on itself
	for(var i = 0; i < ponyBase.width;i++){
		bir.drawImage_Fast(ponyBase,ponyBase.width-i,0,1,ponyBase.height,ponyBase.width+i,0,1,ponyBase.height);
		hir.drawImage_Fast(ponyHair,i,0,1,ponyHair.height,ponyHair.width-i+32+~~(i/32)*64,0,1,ponyHair.height);
	}
	
	var spawn = new Random().nextInt(ponySpawn.length);
	if(ponySpawn[spawn].length<0)return;
	pones[pones.length]=new PonyAI(
	AInames[0][new Random().nextInt(AInames[0].length)],AInames[1][new Random().nextInt(AInames[1].length)],
	ponySpawn[spawn][0],ponySpawn[spawn][1],ponySpawn[spawn][2],
	
	//FIXME add in recolors
	bir.getCanvas(),new Random().nextInt(3),hir.getCanvas());
	mir=null;
	hir=null
	mir=0;
	hir=0;
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
				
				if(riseCase(x,y,z))z++;
				else
				if(downCase(x,y,z))z--;
				else
				if(z>0&&fallCase(x,y,z))
					z--;
				
				//FIXME RENDER POSE
				//*
				switch(xDir){
				case(0):break;
				case(-1):
					lr=lrs[viewdir*4+0];
					break;
				case(1):
					lr=lrs[viewdir*4+1];
					break;
					default: lr=0;
				}
				switch(yDir){
				case(0):break;
				case(-1):
					lr=lrs[viewdir+2];
					break;
				case(1):
					lr=lrs[viewdir*4+3];
					break;
					default: lr=0;
				}
				//*/
				
				pones[q].x=x;
				pones[q].y=y;
				pones[q].z=z;
				pones[q].lr=lr;
			
				pones[q].xDir=xDir;//-1; -- I assume this was supposed to be 1 or negative 1 -- or more likely 0 and nevative 1
				pones[q].yDir=yDir;//-1; -- same with y as abive
				//var lr = (pones[q]>>22&0x1);// 23 / 32 bits
				/**console.log(x+" "+y+" "+z+"   :: "+xDir+" "+yDir);**/
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
	
	default:
	if(riseCase(x,y,z))return true;
	return false;
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
//var lrr=[0,192];//directional shift per view angle
function renderPonies(x,y,z,xx,yy,zz){
	for(var q = 0; q < pones.length;q++){
		if(pones.mod!=2&&pones[q].x==x&&pones[q].y==y&&pones[q].z==z){//0is false, so anything that is equal
			/*g.setColor("red");
			g.fillRect(
			(h_width*xx+h_width*yy+q_width)*scale+xscroll,
			(-q_width*xx+q_width*yy-zz*h_height+q_height)*scale+yscroll,
			h_width*scale,h_height*scale
			);*/
			
			g.drawImage_Fast(pones[q].pony,q_width*~~(pones[q].walk/10)+192*pones[q].lr,0,q_width,q_height,
			(h_width*xx+h_width*yy+q_width)*scale+xscroll,
			(-q_width*xx+q_width*yy-zz*h_height+q_height)*scale+yscroll,
			//(h_width*xx+h_width*yy+q_width+q_width)*scale+xscroll,
			//(-q_width*xx+q_width*yy-zz*h_height+q_height+q_height)*scale+yscroll,
			h_width*scale,h_height*scale
			);
			g.drawImage_Fast(pones[q].hair,q_width*pones[q].hairType+192*pones[q].lr,0,q_width,q_height,
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






































/*

////////////////////////////////////////////////////////////////////////////////
colors:
////////////////////////////////////////////////////////////////////////////////

535362 - ear/depth						darkerish gray
646473 - outline						gray
BBBBBB - fill							light gray

000000 - top of eye outline				black
010101 - front/bottom of eye outline	slightly not black
FFFFFF - pupil / back fill				white

00503F - pupil top						dark teal
127561 - pupil next to top				teal   - normal eye color
99E3D4 - eye center/ gradient			light teal
127561 - pupil bottom/pupil top			teal   - normal eye color



919191 - depth hoof fill				dark gray
535362 - depth hoof outline				dark gray


////////////////////////////////////////////////////////////////////////////////
Level Differences: -y axis
////////////////////////////////////////////////////////////////////////////////
0				pos0
-1				pos1
0				pos2
0				pos3
-1				pos4
0				pos5


////////////////////////////////////////////////////////////////////////////////
Points Placement:
////////////////////////////////////////////////////////////////////////////////
13,5			ear corner placement
20,15			hind corner placemnt
21,16			hind corner placement 2
13,15			start of back which connects to neck

//31,31			bottom right corner of box

*/

//FIXME ALL COLORS LISTED
/**
public static int[] rcolors_8 = {
	0xFF646473,//body outline
		//comprises outline
	0xFFBBBBBB,//body fill
		//comprises body
	0xFF000000,//eye outline _top
		//comprises eye
	0xFF010101,//eye outline _left
		//comprises eye
	0xFFFFFFFF,//pupil / out-lying pupil
		//comprises eye
	0xFF00503F,//top of pupil (change factor of -2)
		//comprises pupil
	0xFF127561,//pupil mid+1 (change factor of -1)
		//comprises pupil
	0xFF99E3D4,//pupil mid+0 (change factor of 1)
		//comprises pupil
	0xFF00BA95,//pupil mid-1 BOTTOM(change factor of 0)
		//comprises pupil
	0xFF127561,//pupil mid-1 BOTTOM (change factor of -1)
		//comprises pupil
	0xFF919191,//depth fill (body fill change factor of -1)
		//comprises hoofs
	0xFF535362//depth outline (outline change factor of -1)
		//comprises the ear and depth outlines
};

public static int[] rcolors_32 = {
	0xFF646473,//body outline
		//comprises outline
	0xFFBBBBBB,//body fill
		//comprises body
	0xFF000000,//eye outline _top
		//comprises eye
	0xFF010101,//eye outline _left
		//comprises eye
	0xFFFFFFFF,//pupil / out-lying pupil
		//comprises eye
	0xFF00503F,//top of pupil (change factor of -2)
		//comprises pupil
	0xFF127561,//pupil mid+1 (change factor of -1)
		//comprises pupil
	0xFF99E3D4,//pupil mid+0 (change factor of 1)
		//comprises pupil
	0xFF00BA95,//pupil mid-1 BOTTOM(change factor of 0)
		//comprises pupil
	0xFF127561,//pupil mid-1 BOTTOM (change factor of -1)
		//comprises pupil
	0xFF919191,//depth fill (body fill change factor of -1)
		//comprises hoofs
	0xFF535362//depth outline (outline change factor of -1)
		//comprises the ear and depth outlines
};
**/
/*
public static int bodyColor = 0xFF000000|(new Random().nextInt()&0x00FFFFFF);//0xFFFF0000;//red ****
public static int eyeColor  = 0xFF000000|(new Random().nextInt()&0x00FFFFFF);//0xFF0000FF;//blue eyes
public static int hairColor = 0xFF000000|(new Random().nextInt()&0x00FFFFFF);

function recolorPony(pixelData,body,hair,eye){
	bodyColor = body;//0xFF000000|(body&0x00FFFFFF);
	eyeColor  = eye;//0xFF000000|(eye&0x00FFFFFF);
	hairColor = hair;//0xFF000000|(hair&0x00FFFFFF);
	for(int i = 0; i < q.length;i++){
		switch(q[i]){
		case(0):
			q[i] = 0;
			break;
		case(0xFF646473)://body outline
			q[i] = recolorPixel(0);
			break;
		case(0xFFBBBBBB)://body fill
			q[i] = recolorPixel(1);
			break;
		case(0xFF000000)://eye outline _top
			q[i] = recolorPixel(2);
			break;
		case(0xFF010101)://eye outline _left
			q[i] = recolorPixel(3);
			break;
		case(0xFFFFFFFF)://pupil / out-lying pupil
			q[i] = recolorPixel(4);
			break;
		case(0xFF00503F)://top of pupil (change factor of -2)
			q[i] = recolorPixel(5);
			break;
		case(0xFF127561)://pupil mid+1 (change factor of -1)
			q[i] = recolorPixel(6);
			break;
		case(0xFF99E3D4)://pupil mid+0 (change factor of 1)
			q[i] = recolorPixel(7);
			break;
		case(0xFF00BA95)://pupil mid-1 BOTTOM (change factor of 0)
			q[i] = recolorPixel(8);
			break;
		//case(0xFF127561)://pupil mid-1 (change factor of -1)
		//	break;
		case(0xFF919191)://depth fill (body fill change factor of -1)
			q[i] = recolorPixel(9);
			break;
		case(0xFF535362)://depth outline (outline change factor of -1)
			q[i] = recolorPixel(10);
			break;
		
		case(0xFFFF0000)://hair 0 _red
			q[i] = recolorPixel(11);
			break;
		case(0xFFFFD800)://hair 1 _yellow
			q[i] = recolorPixel(12);
			break;
		default: break;
		}
	}
	//x,y, width, height, ARRAY_DATA, x start , y final /*Clipping boundaries*/
	//i.setRGB(0,0,78,119, q,0,119);
	/*return q;
}

function recolorPixel(type){
	switch(type){
		case(0)://body outline
			return fixColor(bodyColor,2,3);//dimmer body outline than original color
		case(1)://body fill
			return bodyColor;
		case(2)://eye outline _top
			return 0xFF000000;//same as original
		case(3)://eye outline _left
			return 0xFF010101;//same as original
		case(4)://pupil / out-lying pupil
			return 0xFFFFFFFF;//same as original
		case(5)://top of pupil (change factor of -2)
			return fixColor(eyeColor,1,2);
		case(6)://pupil mid+1 (change factor of -1)
			return fixColor(eyeColor,2,3);
		case(7)://pupil mid+0 (change factor of 1)
			return fixColor(eyeColor,3,2);
		case(8)://pupil mid-1 BOTTOM (change factor of 0)
			return eyeColor;
		case(9)://depth fill (body fill change factor of -1)
			return fixColor(bodyColor,1,2);
		case(10)://depth outline (outline change factor of -1)
			return fixColor(bodyColor,1,3);
		case(11):
			return fixColor(hairColor,1,1);
		case(12):
			return fixColor(hairColor,1,2);
		default: return -1;
	}
}

function fixColor(clr,multi,divi){
	var rgb = [grabColor(clr,2),grabColor(clr,1),grabColor(clr,0)];
	//ALPHA IS ALWAY 255
	for(int i = 0; i < rgb.length;i++){
		rgb[i]/=divi;//prevent from byte overflowing to zero
		rgb[i]*=multi;
	}
	int w = 0xFF000000;
	for(var i = rgb.length-1;i>-1;i--){
		w|=((rgb[i]|0)<<((i+2)*8));
	}
	return w;
}

function grabColor(clr,bite){
	return (((clr|0)>>8)*bite)&0x000000FF;
}

function HexToRGB(Hex)
{
	var Long;
	if((''+hex)[0]='#')
	Long = parseInt(Hex.replace(/^#/, ""), 16);
	else Long = parseInt(Hex, 16);
	return {
		R: (Long >>> 16) & 0xff,
		G: (Long >>> 8) & 0xff,
		B: Long & 0xff
	};
}*/