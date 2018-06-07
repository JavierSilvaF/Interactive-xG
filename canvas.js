field = document.getElementById("Field");
field.width = 900;
field.height = 500;
var c = field.getContext('2d');
console.log(field);

// CANCHA
c.beginPath();
	c.moveTo(250,10);
	c.lineTo(850,10);
	c.lineTo(850,460);
	c.lineTo(250,460);
	c.lineTo(250,10);
	c.strokeStyle = "black";
	c.stroke();
c.fillStyle="rgb(220,220,220)";
c.fillRect(251,11,598,448);


// AREA
c.beginPath();
	c.moveTo(375,10);
	c.lineTo(375,160);
	c.lineTo(725,160);
	c.lineTo(725,10);
	c.strokeStyle = "black";
	c.stroke();

// AREA CHICA
c.beginPath();
	c.moveTo(450,10);
	c.lineTo(450,65);
	c.lineTo(650,65);
	c.lineTo(650,10);
	c.strokeStyle = "black";
	c.stroke();

c.beginPath();
	c.moveTo(513.4,  10);
	c.lineTo(513.4,   5);
	c.lineTo(586.6, 5);
	c.lineTo(586.6,10);
	c.strokeStyle = "black";
	c.stroke();	

// CIRCULOS
c.beginPath();
	c.arc(550, 110, 2, 0, Math.PI*2,false);
	c.strokeStyle = 'black';
	c.stroke();
c.beginPath();
	c.arc(550, 110, 85, 0.65, Math.PI*0.80,false);
	c.strokeStyle = 'black';
	c.stroke();
c.beginPath();
	c.arc(550, 460, 2, 0, Math.PI*2,false);
	c.strokeStyle = 'black';
	c.stroke();
c.beginPath();
	c.arc(550, 460, 85, 91.1, Math.PI*2, false);
	c.strokeStyle = 'black';
	c.stroke();