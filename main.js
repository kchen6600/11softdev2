var c = document.getElementById("svg");
var bclear = document.getElementById("clear");

var requestID = 0;

var directionx = Math.floor(Math.random() * 10) - 5;
var directiony = Math.floor(Math.random() * 10) - 5;

var xArray = [];
var yArray = [];

var posx = [];
var posy = [];

var draw = function(e){
	clearInterval(requestID);
	requestID = setInterval(animations, 16);
	var r1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    r1.setAttribute("x", e.offsetX);
    r1.setAttribute("y", e.offsetY);
    r1.setAttribute("width", 20);
    r1.setAttribute("height", 20);
    r1.setAttribute("stroke", "#FFFFFF");
    r1.setAttribute("fill", "lightsteelblue");
    svg.appendChild(r1);
	
	xArray.push(directionx);
	yArray.push(directiony);
	posx.push(e.offsetX);
	posy.push(e.offsetY);

	animations();
}

var animations = function(){
    
	for (i = 0; i < svg.childElementCount; i++){
		
		if (posy[i] <= 0 || posy[i] + 20 >= 500){
			directiony = -1 * directiony;
		}
		if (posx[i] <= 0 || posx[i] + 20 >= 500){
			directionx = -1 * directionx;
		}
	
		posx[i] += directionx;
		posy[i] += directiony;
		
		svg.children[i].setAttribute("x", posx[i]);
		svg.children[i].setAttribute("y", posy[i]);
	}
}
requestID = setInterval(animations, 16);

c.addEventListener('click', draw, true);


var clear = function() {
	clearInterval(requestID);
    c.innerHTML="";
};

bclear.addEventListener('click', clear);