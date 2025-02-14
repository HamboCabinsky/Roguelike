let worldstr = 
`1111111111
1000000001
1000000001
1000001001
1000000001
1000000001
1001000001
1000000001
1000000001
1111111111`;

/*
NSEW
N 	 1
 S 	 2
NS   3
  E  4
N E  5
 SE  6
NSE  7
   W 8
N  W 9
 S W A
NS W B
  EW C
N EW D
 SEW E
NSEW F
*/

let N =
`1111221111
1000000001
1000000001
1000000001
1000000001
1000000001
1000000001
1000000001
1000000001
1111111111`;

let S = 
`1111111111
1000000001
1000000001
1000000001
1000000001
1000000001
1000000001
1000000001
1000000001
1111221111`;

let NS =
`1111221111
1000000001
1000000001
1000000001
1000000001
1000000001
1000000001
1000000001
1000000001
1111221111`;

let E =
`1111111111
1000000001
1000000001
1000000001
1000000002
1000000002
1000000001
1000000001
1000000001
1111111111`;

let NE =
`1111221111
1000000001
1000000001
1000000001
1000000002
1000000002
1000000001
1000000001
1000000001
1111111111`;

let SE =
`1111111111
1000000001
1000000001
1000000001
1000000002
1000000002
1000000001
1000000001
1000000001
1111221111`;

let NSE = 
`1111221111
1000000001
1000000001
1000000001
1000000002
1000000002
1000000001
1000000001
1000000001
1111221111`;

let W = 
`1111111111
1000000001
1000000001
1000000001
2000000001
2000000001
1000000001
1000000001
1000000001
1111111111`;

let NW =
`1111221111
1000000001
1000000001
1000000001
2000000001
2000000001
1000000001
1000000001
1000000001
1111111111`;

let SW =
`1111111111
1000000001
1000000001
1000000001
2000000001
2000000001
1000000001
1000000001
1000000001
1111221111`;

let NSW =
`1111221111
1000000001
1000000001
1000000001
2000000001
2000000001
1000000001
1000000001
1000000001
1111221111`;

let EW = 
`1111111111
1000000001
1000000001
1000000001
2000000002
2000000002
1000000001
1000000001
1000000001
1111111111`;

let NEW = 
`1111221111
1000000001
1000000001
1000000001
2000000002
2000000002
1000000001
1000000001
1000000001
1111111111`;

let SEW =
`1111111111
1000000001
1000000001
1000000001
2000000002
2000000002
1000000001
1000000001
1000000001
1111221111`;

let NSEW = 
`1111221111
1000000001
1000000001
1000000001
2000000002
2000000002
1000000001
1000000001
1000000001
1111221111`;

function getRoomByNumber(num)
{
	if(num == '1') return N;
	else if(num == '2') return S;
	else if(num == '3') return NS;
	else if(num == '4') return E;
	else if(num == '5') return NE;
	else if(num == '6') return SE;
	else if(num == '7') return NSE;
	else if(num == '8') return W;
	else if(num == '9') return NW;
	else if(num == 'A') return SW;
	else if(num == 'B') return NSW;
	else if(num == 'C') return EW;
	else if(num == 'D') return NEW;
	else if(num == 'E') return SEW;
	else if(num == 'F') return NSEW;
}

function getRoomNumber(room)
{
		/*
	NSEW
	N 	 1
	 S 	 2
	NS   3
	  E  4
	N E  5
	 SE  6
	NSE  7
	   W 8
	N  W 9
	 S W A
	NS W B
	  EW C
	N EW D
	 SEW E
	NSEW F
	*/
	if(room == "N") return '1';
	else if(room == "S") return '2';
	else if(room == "NS") return '3';
	else if(room == "E") return '4';
	else if(room == "NE") return '5';
	else if(room == "SE") return '6';
	else if(room == "NSE") return '7';
	else if(room == "W") return '8';
	else if(room == "NW") return '9';
	else if(room == "SW") return 'A';
	else if(room == "NSW") return 'B';
	else if(room == "EW") return 'C';
	else if(room == "NEW") return 'D';
	else if(room == "SEW") return 'E';
	else if(room == "NSEW") return 'F';
}

function getEntrances(room)
{
	if(room == N) return "N";
	else if(room == S) return "S";
	else if(room == NS) return "NS";
	else if(room == E) return "E";
	else if(room == NE) return "NE";
	else if(room == SE) return "SE";
	else if(room == NSE) return "NSE";
	else if(room == W) return "W";
	else if(room == NW) return "NW";
	else if(room == SW) return "SW";
	else if(room == NSW) return "NSW";
	else if(room == EW) return "EW";
	else if(room == NEW) return "NEW";
	else if(room == SEW) return "SEW";
	else if(room == NSEW) return "NSEW";
}


function getConnectingRoom(entrance)
{
	let random = Math.random();
	if(entrance == "N")
	{
		if(random < .125) return ["S", S];
		else if(random < .25) return ["NS", NS];
		else if(random < .375) return ["SE", SE];
		else if(random < .5) return ["NSE", NSE];
		else if(random < .625) return ["SW", SW];
		else if(random < .75) return ["NSW", NSW];
		else if(random < .875) return ["SEW", SEW];
		else return ["NSEW", NSEW];
	}
	else if(entrance == "S")
	{
		if(random < .125) return ["N", N];
		else if(random < .25) return ["NS", NS];
		else if(random < .375) return ["NE", NE];
		else if(random < .5) return ["NSE", NSE];
		else if(random < .625) return ["NW", NW];
		else if(random < .75) return ["NSW", NSW];
		else if(random < .875) return ["NEW", NEW];
		else return ["NSEW", NSEW];
	}
	else if(entrance == "E")
	{
		if(random < .125) return ["E", E];
		else if(random < .25) return ["NE", NE];
		else if(random < .375) return ["SE", SE];
		else if(random < .5) return ["NSE", NSE];
		else if(random < .625) return ["EW", EW];
		else if(random < .75) return ["NEW", NEW];
		else if(random < .875) return ["SEW", SEW];
		else return ["NSEW", NSEW];
	}
	else if(entrance == "W")
	{
		if(random < .125) return ["W", W];
		else if(random < .25) return ["NW", NW];
		else if(random < .375) return ["WE", WE];
		else if(random < .5) return ["NWE", NWE];
		else if(random < .625) return ["SW", SW];
		else if(random < .75) return ["NSW", NSW];
		else if(random < .875) return ["SEW", SEW];
		else return ["NSEW", NSEW];
	}

}

function generate_snake(entrance,level,position)
{
	let room = null;
	if(entrance == "N"){
		if(position[1]-1 < 0) return;
		if(level[position[0]][position[1]-1] == '0'){
			room = getConnectingRoom("N");
			level[position[0]][position[1]-1] = getRoomNumber(room[0]);
			for(char of room[0])
			{
				generate_snake(char, level, [position[0],position[1]-1]);
			}
		}
	}
	else if(entrance == "S"){
		if(position[1]+1 > 31) return;
		if(level[position[0]][position[1]+1] == '0'){
			room = getConnectingRoom("S");
			level[position[0]][position[1]+1] = getRoomNumber(room[0]);
			for(char of room[0])
			{
				generate_snake(char, level, [position[0],position[1]+1]);
			}
		}
	}
	else if(entrance == "E"){
		if(position[0]+1 > 31) return;
		if(level[position[0]+1][position[1]] == '0'){
			room = getConnectingRoom("E");
			level[position[0]+1][position[1]] = getRoomNumber(room[0]);
			for(char of room[0])
			{
				generate_snake(char, level, [position[0]+1,position[1]]);
			}
		}
	}
	else if(entrance == "W"){
		if(position[0] -1 < 0) return;
		if(level[position[0]-1][position[1]] == '0'){
			room = getConnectingRoom("E");
			level[position[0]-1][position[1]] = getRoomNumber(room[0]);
			for(char of room[0])
			{
				generate_snake(char, level, [position[0]-1,position[1]]);
			}
		}
	}
}

function generate_level_data()
{
	let level = [];
	for(let i = 0; i < 32; i++)
	{
		level.push([])
		for(let j = 0; j < 32; j++)
		{
			level[i].push('0');
		}
	}
	let position = [16, 16];
	level[16][16] = 'F';
	generate_snake("N", level, position);
	generate_snake("S", level, position);
	generate_snake("E", level, position);
	generate_snake("W", level, position);
	return level;
}
