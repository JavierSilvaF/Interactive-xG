//var calculations = document.querySelector('calculations');
console.log('Calculation of Caley v1 xG shot model.');

/* Ideally i would like to have an Event that waits
for the user to click on the field and the register
the position.

An If statement to make sure the position is ON the
field and then proceed to the corresponding calcula
tions.
*/

document.addEventListener("click", getPosition, false);

function getPosition(Event){
	var xPosition = Event.clientX;
	var yPosition = Event.clientY;
	console.log(yPosition, xPosition)
}
