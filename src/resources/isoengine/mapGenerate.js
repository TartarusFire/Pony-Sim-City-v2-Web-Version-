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