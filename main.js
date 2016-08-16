var SIZE = 3; //This is old and reused code, too lazy to comment it all out.
var x = 0;
var y = 0;
function NOTHING_TEXT(x,y){return "<div class='nothing' id='p"+x+"_"+y+"'></div>"; }
function PLAYER_TEXT(x,y){return "<div class='player' id='p"+x+"_"+y+"'></div>"; }
function OBSTACLE_TEXT(x,y){return "<div class='obstacle' id='p"+x+"_"+y"'></div>"; }
function display()
{
	var i = SIZE-1;
	var j = 0;
	var res = "";
	while(i!=-1)
	{
		j = 0;
		while(j!=SIZE)
		{
			res += (i == y && j == x) ? PLAYER_TEXT(j,i) : NOTHING_TEXT(j,i);
			j++;
		}
		res += "<br>";
		i--;
	}
	return res;
}
function keydown(event)
{
	//Remeber the property used for the key pressed. And the arrow keys
	//ARROW KEY LEFT
	//ARROW KEY RIGHT
	//ARROW KEY UP
}
