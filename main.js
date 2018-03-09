var c = document.getElementById("svg");
var bclear = document.getElementById("clear");

var requestID = 0;

var directionx = Math.floor(Math.random() * 10) - 5;
var directiony = Math.floor(Math.random() * 10) - 5;



var animations = function(e){
	var posx = e.offsetX;
	var posy = e.offsetY;

	var draw = function(){
		
		/**
        while (c.firstChild) {
            c.removeChild(c.firstChild);
        }
		**/
        var r1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        r1.setAttribute("x", posx);
        r1.setAttribute("y", posy);
        r1.setAttribute("width", 20);
        r1.setAttribute("height", 20);
        r1.setAttribute("stroke", "#FFFFFF");
        r1.setAttribute("fill", "lightsteelblue");
        svg.appendChild(r1);
		posx += directionx;
		posy += directiony;
		if (posy <= 0 || posy + 20 >= 500){
			directiony = -1 * directiony;
		}
		if (posx <= 0 || posx + 20 >= 500){
			directionx = -1 * directionx;
		}
	}
    requestID = setInterval(draw, 16);
	draw();
}


c.addEventListener('click', animations, true);


var clear = function() {
    c.innerHTML="";
};

bclear.addEventListener('click', clear);