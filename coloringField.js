heatmap = document.getElementById("HeatmapCanvas");
heatmap.width = 900;
heatmap.height = 500;
var c = heatmap.getContext('2d');
console.log(field);

var coloringField = document.getElementById("coloringField"),
	bool = false;

document.getElementById('button').onclick = function heatmap()
	{
		var cx = 250.1,
			cy = 10.1;
		c.globalAlpha = 0.85
		bool = !bool;
		console.log(bool);
		if (bool == true){ 
				for (var i = 0; i < 10800; i++)
				{
			var pitchX = (cx-250)*60/850,
		        pitchY = (cy-10)*45/460,
		        leftPostXY = [263.4*60/850, 0*45/460], // xy coords of the goal
		        rightPostXY = [336.6*60/850, 0*45/460],
		        centreGoalXY = [300*60/850, 0*45/460],
		        goalWidth = 73.2*60/850;

		    if (cx < 300) {
		      var distNearPost = Math.sqrt(Math.pow(pitchX - leftPostXY[0], 2) + Math.pow(pitchY - leftPostXY[1], 2)),
		          distFarPost = Math.sqrt(Math.pow(pitchX - rightPostXY[0], 2) + Math.pow(pitchY - rightPostXY[1], 2));
		    } else {
		      var distFarPost = Math.sqrt(Math.pow(pitchX - leftPostXY[0], 2) + Math.pow(pitchY - leftPostXY[1], 2)),
		          distNearPost = Math.sqrt(Math.pow(pitchX - rightPostXY[0], 2) + Math.pow(pitchY - rightPostXY[1], 2));
		    }
		      
		    var goalAngle = Math.acos((Math.pow(distNearPost, 2) + Math.pow(distFarPost, 2) - Math.pow(goalWidth, 2))/(2*distNearPost*distFarPost)), // angle made by position of shot, and goalposts by cosine rule
		        goalDistance = Math.sqrt(Math.pow(centreGoalXY[0]-pitchX, 2) + Math.pow(centreGoalXY[1]-pitchY, 2)); // Distance to the centre of the goal
		      
		    var   xG = 1/(1+Math.exp(-(-1.745598 + 1.338737*goalAngle - 0.110384*goalDistance + 0.168798*goalAngle*goalDistance)));
			   
				c.fillStyle = 'hsl(130, 50%,  ' + 150* xG + '%';
				c.fillRect(cx, cy, 5,5);
				cx += 5;
		 		if (cx >= 850) {cy += 5, cx=250;}
				}
			}
		else{

		for (var i = 0; i < 10800; i++)
		{
		  c.clearRect(0,0,900,500);
		}

		}

};
