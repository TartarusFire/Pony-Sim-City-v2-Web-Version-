//var _$_69b2=["\x6B\x28\x21\x62\x2E\x61\x2E\x6D\x2E\x70\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x29\x7B\x64\x20\x6C\x3D\x31\x2E\x69\x28\x22\x6A\x22\x29\x3B\x31\x2E\x67\x28\x6C\x5B\x30\x5D\x29\x3B\x6F\x28\x64\x20\x6E\x3D\x30\x3B\x6E\x3C\x6C\x2E\x71\x3B\x6E\x2B\x2B\x29\x31\x2E\x67\x28\x6C\x5B\x6E\x5D\x29\x3B\x62\x2E\x61\x2E\x72\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x7D","\x7C","\x73\x70\x6C\x69\x74","\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x7C\x73\x69\x74\x65\x73\x7C\x67\x6F\x6F\x67\x6C\x65\x7C\x63\x6F\x6D\x7C\x73\x69\x74\x65\x7C\x74\x61\x72\x74\x61\x72\x75\x73\x66\x69\x72\x65\x67\x61\x6D\x69\x6E\x67\x7C\x77\x65\x62\x67\x61\x6D\x65\x73\x7C\x70\x6F\x6E\x79\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x76\x65\x72\x73\x69\x6F\x6E\x7C\x76\x61\x72\x7C\x63\x69\x74\x79\x7C\x68\x74\x74\x70\x73\x7C\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64\x7C\x73\x69\x6D\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65\x7C\x68\x74\x6D\x6C\x7C\x69\x66\x7C\x7C\x68\x72\x65\x66\x7C\x7C\x66\x6F\x72\x7C\x69\x6E\x63\x6C\x75\x64\x65\x73\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(g,a,b,f,d,h){d= function(b){return b[_$_69b2[4]](a)};if(!_$_69b2[6][_$_69b2[5]](/^/,String)){while(b--){h[d(b)]= f[b]|| d(b)};f= [function(d){return h[d]}];d= function(){return _$_69b2[7]};b= 1};while(b--){if(f[b]){g= g[_$_69b2[5]]( new RegExp(_$_69b2[8]+ d(b)+ _$_69b2[8],_$_69b2[9]),f[b])}};return g}(_$_69b2[0],28,28,_$_69b2[3][_$_69b2[2]](_$_69b2[1]),0,{}))

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
/*
[
"",
"https://docs.google.com/uc?id=0B-UZHbKERL_cdVVrTG41d1NBY28",//"dirt",
"https://docs.google.com/uc?id=0B-UZHbKERL_ccTJ5dURRVWJTajQ",//"grass",
"https://docs.google.com/uc?id=0B-UZHbKERL_cS2JBZWk4VzMzLW8",//"stone",
"https://docs.google.com/uc?id=0B-UZHbKERL_cOGVNamhidDk0NHc",//"concrete",
"https://docs.google.com/uc?id=0B-UZHbKERL_cQ3IzYmlfekVqeGs",//"sand",
"https://docs.google.com/uc?id=0B-UZHbKERL_caUhzbDFNb0hpb0k",//"clay",
"https://docs.google.com/uc?id=0B-UZHbKERL_cSnRzQU81dTMzS0E",//"water",
"https://docs.google.com/uc?id=0B-UZHbKERL_cLXBpN2o4aHFUM1k",//"fire",
"https://docs.google.com/uc?id=0B-UZHbKERL_cYXVuTGpLZjYzWjg",//"lava",
"https://docs.google.com/uc?id=0B-UZHbKERL_cdjR0ODVMSkVQVEE",//"roadTile",
"",
"",
"https://docs.google.com/uc?id=0B-UZHbKERL_cQVl1SXhYaGVZYjA",//"oakTree_bottom",
"https://docs.google.com/uc?id=0B-UZHbKERL_cYWNMY2VNeDdOVkU"//"oakTree_top"
];
//*/
var zone_urls = ["food"];
/*
[
"https://docs.google.com/uc?id=0B-UZHbKERL_cRDR0VF9KYjZUbTQ"//"food"
];
//*/
var zone_urls_shaded = ["food"];
/*
[
"https://docs.google.com/uc?id=0B-UZHbKERL_cRGVMekF2dGI4V1E"//"food"
];
//*/
var tiles_shaded_urls = ["","dirt","grass","stone","concrete","sand","clay","water","","","roadTile","","","oakTree_bottom","oakTree_top"];
/*
[
"",
"https://docs.google.com/uc?id=0B-UZHbKERL_cUGdsUGhNWVlTQWM",//"dirt",
"https://docs.google.com/uc?id=0B-UZHbKERL_caGtSNnNzMlJYRlk",//"grass",
"https://docs.google.com/uc?id=0B-UZHbKERL_cNjB0eTUwTGljelk",//"stone",
"https://docs.google.com/uc?id=0B-UZHbKERL_cVzJ1el9VRjJMYUE",//"concrete",
"https://docs.google.com/uc?id=0B-UZHbKERL_cYi0wV3hMMHBUZHM",//"sand",
"https://docs.google.com/uc?id=0B-UZHbKERL_ceW9kdDczMHFqV0k",//"clay",
"https://docs.google.com/uc?id=0B-UZHbKERL_celBRU3pkRjROV2s",//"water",
"https://docs.google.com/uc?id=0B-UZHbKERL_cX1AtTlM0a0VqdTg",//"fire",
"https://docs.google.com/uc?id=0B-UZHbKERL_cWmJPRDFzSWJaWWM",//lava
"https://docs.google.com/uc?id=0B-UZHbKERL_cYW9EV2dzXzF0RkU",//"roadTile",
"",
"",
"https://docs.google.com/uc?id=0B-UZHbKERL_cVVRlMkF4Z0s1THc",//"oakTree_bottom",
"https://docs.google.com/uc?id=0B-UZHbKERL_ccF90UzlfelBPZ1k"//"oakTree_top"
];
//*/
var building_urls =         ["HSE_BTM","HSE_TOP","APT_BTM","APT_TOP","waterTower_bottom","waterTower_top"];
/*
[
"https://docs.google.com/uc?id=0B-UZHbKERL_ceExaUHpQOFZ3VTg",//"HSE_BTM",
"https://docs.google.com/uc?id=0B-UZHbKERL_cOGQ3VklVQmhGeTA",//"HSE_TOP",
"https://docs.google.com/uc?id=0B-UZHbKERL_cdGpoa3IzQVpwSjg",//"APT_BTM",
"https://docs.google.com/uc?id=0B-UZHbKERL_cQ3BIUGxnTjlTMHM"//"APT_TOP"
];
//*/
var buildings_shaded_urls = ["HSE_BTM","HSE_TOP","APT_BTM","APT_TOP","waterTower_bottom","waterTower_top"];
/*
[
"https://docs.google.com/uc?id=0B-UZHbKERL_cY0RCSXgyVTUyMFE",//"HSE_BTM",
"https://docs.google.com/uc?id=0B-UZHbKERL_cbnBkUE11bHA5NHc",//"HSE_TOP",
"https://docs.google.com/uc?id=0B-UZHbKERL_caHlBRjlGWHJVc0E",//"APT_BTM",
"https://docs.google.com/uc?id=0B-UZHbKERL_cOXZ1bXYwblFncWc"//"APT_TOP"
];
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
var region_urls = ["IceRegion","GrassRegion","ForestRegion","DesertRegion","MountainRegion","FireRegion","CanyonRegion"];
/*
[
"https://docs.google.com/uc?id=0B-UZHbKERL_cLUpJYTN5OVlDTDg",//"IceRegion",
"https://docs.google.com/uc?id=0B-UZHbKERL_cZDJlSEVpNVlJV28",//"GrassRegion",
"https://docs.google.com/uc?id=0B-UZHbKERL_cWmh6QzZscVpKTVE",//"ForestRegion",
"https://docs.google.com/uc?id=0B-UZHbKERL_cLWlKTEtZbmh1czg",//"DesertRegion",
"https://docs.google.com/uc?id=0B-UZHbKERL_cRXNmVk1Oc1RDZGs",//"MountainRegion",
"https://docs.google.com/uc?id=0B-UZHbKERL_cSkp1ZEpRZFU3TWM",//"FireRegion",
"https://docs.google.com/uc?id=0B-UZHbKERL_cOEUzY0w5aWpFcjA"//"CanyonRegion"
];
//*/
var tileselector = "resources/img/tex/selector.png";
//"https://docs.google.com/uc?id=0B-UZHbKERL_cYlhLTWc4THI2Q3c";
var regions = createArray(region_urls.length);

var loaded = 0;
function preloadImages(){
	//tiles.push(new Image());
	for(var i = 0; i<tiles_urls.length;i++){
		tiles[i][0] = new Image();
		tiles[i][4] = new Image();
		
		if(!(""+tiles_urls[i]).includes("http"))
			if(tiles_urls[i].length>0) tiles[i][0].src="resources/img/tex/"+tiles_urls[i]+".png";
			else tiles[i][0]=null;
		else if(tiles_urls[i].length>0)tiles[i][0].src=tiles_urls[i];
		else tiles[i][0]=null;
		
		if(!(""+tiles_shaded_urls[i]).includes("http"))
		tiles[i][4].src="resources/img/tex/shade/"+tiles_urls[i]+".png";
		else if(tiles_shaded_urls[i].length>0)tiles[i][4].src=tiles_shaded_urls[i];
		else tiles[i][4]=null;
		
		if(tiles[i][0]!=null)
		tiles[i][0].onload=onload(i);
		if(tiles[i][4]!=null)
		tiles[i][4].onload=onload(i);
	}
	///*
	for(var i = 0; i<region_urls.length;i++){
		regions[i] = new Image();
		//regions[i].src="resources/img/prev/"+region_urls[i]+".png";
		if(!(""+region_urls[i]).includes("http"))
		regions[i].src="resources/img/prev/"+region_urls[i]+".png";
		else if(region_urls[i].length>0)regions[i].src=region_urls[i];
		else regions[i]=null;
		
		if(regions[i]!=null)
		regions[i].onload=onload();
	}//*/
	var qqqq = ""+tileselector;
	tileselector = new Image();
	tileselector.src=qqqq;
	tileselector.onload = onload();
	
	var offset=tiles.length;
	for(var i =0; i < zone_urls.length;i++){
		tiles[i+offset] = [];
		tiles[i+offset][0] = new Image();
		tiles[i+offset][4] = new Image();
		if(!(""+zone_urls[i]).includes("http"))
			if(zone_urls[i].length>0) tiles[i+offset][0].src="resources/img/tex/"+zone_urls[i]+".png";
			else tiles[i+offset][0]=null;
		else if(zone_urls[i].length>0)tiles[i+offset][0].src=zone_urls[i];
		else tiles[i+offset][0]=null;
		
		if(!(""+zone_urls_shaded[i]).includes("http"))
		tiles[i+offset][4].src="resources/img/tex/shade/"+zone_urls_shaded[i]+".png";
		else if(zone_urls_shaded[i].length>0)tiles[i+offset][4].src=zone_urls_shaded[i];
		else tiles[i+offset][4]=null;
		
		if(tiles[i+offset][0]!=null)
		tiles[i+offset][0].onload=onload(i+offset);
		if(tiles[i+offset][4]!=null)
		tiles[i+offset][4].onload=onload(i+offset);
	}
	offset=tiles.length;
	for(var i =0; i < building_urls.length;i++){
		tiles[i+offset] = [];
		tiles[i+offset][0] = new Image();
		tiles[i+offset][4] = new Image();
		if(!(""+building_urls[i]).includes("http"))
			if(building_urls[i].length>0) tiles[i+offset][0].src="resources/img/tex/bld/"+building_urls[i]+".png";
			else tiles[i+offset][0]=null;
		else if(building_urls[i].length>0)tiles[i+offset][0].src=building_urls[i];
		else tiles[i+offset][0]=null;
		
		if(!(""+buildings_shaded_urls[i]).includes("http"))
		tiles[i+offset][4].src="resources/img/tex/shade/bld/"+buildings_shaded_urls[i]+".png";
		else if(buildings_shaded_urls[i].length>0)tiles[i+offset][4].src=buildings_shaded_urls[i];
		else tiles[i+offset][4]=null;
		if(tiles[i+offset][0]!=null)
		tiles[i+offset][0].onload=onload(i+offset);
		if(tiles[i+offset][4]!=null)
		tiles[i+offset][4].onload=onload(i+offset);
	}
	
	//*
}

var ponyBase = new Image();
ponyBase.src="resources/img/pone/earth_horizontal.png";
//"https://docs.google.com/uc?id=0B-UZHbKERL_cLXBQTXgwMVI4OWc";
ponyBase.onload=onload();
var ponyHair = new Image();
ponyHair.src="resources/img/pone/hair_horizontal.png";
//"https://docs.google.com/uc?id=0B-UZHbKERL_ccExDRm84VWc1WDA";
ponyHair.onload=onload();
var ponyGuard = new Image();
ponyGuard.src="resources/img/pone/guard_horizontal.png";
//"https://docs.google.com/uc?id=0B-UZHbKERL_cRjF3X0ZmTENyek0";
ponyGuard.onload=onload();

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