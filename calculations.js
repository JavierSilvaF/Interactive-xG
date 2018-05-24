console.log('Simple xG Shot Model.');
var calculations = document.querySelector('calculations'),
	canvas = document.querySelector('canvas'),
	c = canvas.getContext('2d'),
	cx = 250,
	cy = 10,
	cont = 0;


/* Ideally i would like to have an Event that waits
for the user to click on the field and the register
the position.

An If statement to make sure the position is ON the
field and then proceed to the corresponding calcula
tions.

	MEDIDAS DEL CAMPO:
	Esq. Izq. (250,30)
	Esq. Der. (850,30)

	Esq. Izq. (250,260)
	Esq. Der. (850,260)

	Near Post = 513.4 , 10
	Far  Post = 586.6 , 10

 */

document.addEventListener("click", getPosition, false);

function getPosition(Event){
	var x = Event.clientX;
	var y = Event.clientY;
	console.log(x, y);

    var pitchX = (x-250)*60/850,
        pitchY = (y-10)*45/460,
        leftPostXY = [263.4*60/850, 0*45/460], // xy coords of the goal
        rightPostXY = [336.6*60/850, 0*45/460],
        centreGoalXY = [300*60/850, 0*45/460],
        goalWidth = 73.2*60/850;


    if (x<10 | y<10 | x>860 | y>460) { // if shot is off the pitch
      var xG = 0;
    } 
    else {
    if (x < 300) {
      var distNearPost = Math.sqrt(Math.pow(pitchX - leftPostXY[0], 2) + Math.pow(pitchY - leftPostXY[1], 2)),
          distFarPost = Math.sqrt(Math.pow(pitchX - rightPostXY[0], 2) + Math.pow(pitchY - rightPostXY[1], 2));
    } else {
      var distFarPost = Math.sqrt(Math.pow(pitchX - leftPostXY[0], 2) + Math.pow(pitchY - leftPostXY[1], 2)),
          distNearPost = Math.sqrt(Math.pow(pitchX - rightPostXY[0], 2) + Math.pow(pitchY - rightPostXY[1], 2));
    }
      
      var goalAngle = Math.acos((Math.pow(distNearPost, 2) + Math.pow(distFarPost, 2) - Math.pow(goalWidth, 2))/(2*distNearPost*distFarPost)), // angle made by position of shot, and goalposts by cosine rule
          goalDistance = Math.sqrt(Math.pow(centreGoalXY[0]-pitchX, 2) + Math.pow(centreGoalXY[1]-pitchY, 2)); // Distance to the centre of the goal
      
      var   xG = 1/(1+Math.exp(-(-1.745598 + 1.338737*goalAngle - 0.110384*goalDistance + 0.168798*goalAngle*goalDistance)));
      console.table([
        {name: "pitchX", value: pitchX},
        {name: "pitchY", value: pitchY},
        {name: "distNearPost", value: distNearPost},
        {name: "distFarPost", value: distFarPost},
        {name: "goalAngle", value: goalAngle},
        {name: "goalDistance", value: goalDistance},
      ])
        console.log('xG: ', xG);
        var text = "xG = ";
		document.getElementById("xGtext").innerHTML =text, document.getElementById("xG").innerHTML =xG;
   	}
   	return x, y, xG;
   	
/* 

		for (var i = 0; i < 270000; i++)
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
		   
		    c.globalAlpha = 0.8;
			c.fillStyle = 'hsl(130, 50%,  ' + 150* xG + '%';
			c.fillRect(cx, cy, 1, 1);
			cx++;
	 		if (cx >= 850) {cy++, cx=250;}
		}
*/
}

 