
function generaIdentidad(){

	var n = Math.floor((Math.random() * 100000) + 1);
	var p = document.getElementById("res");
	var div = generaDiv();
	var divImg = generaDivImg();
	var img = document.createElement("IMG");
	var id = document.createElement("P");
	var t = document.createTextNode(n);
	var x = generaClose(div);
	img.src = "../../img/lol.png";
	img.height = "140";
	img.width = "100";
	divImg.appendChild(img);
	id.appendChild(t);
	div.appendChild(x);
	div.appendChild(divImg);
	div.appendChild(id);
	p.appendChild(div);
	x.addEventListener("click", function(){ div.parentNode.removeChild(div); });
}

function generaDiv(){
	var div = document.createElement("DIV");
	div.style.width = "150";
	div.style.height = "210";
	div.style.cssFloat = "left";
	div.style.textAlign = "center";
	div.style.border = "3px solid white";
	div.style.borderRadius = "15px 0px 30px";
	div.style.backgroundColor = "#0073e6";
	div.style.color = "white";
	return div;
}

function generaDivImg(){
	var divImg = document.createElement("DIV");
	divImg.style.width = "120";
	divImg.style.height = "145";
	divImg.style.backgroundColor = "#0080ff";
	divImg.style.textAlign = "center";
	divImg.style.marginTop = "20";
	divImg.style.marginLeft = "15";
	divImg.style.border = "2px solid #0073e6";
	divImg.style.borderRadius = "10px";
	return divImg;
}

function generaClose(div){
	var x = document.createElement("BUTTON");
	var xClose = document.createTextNode("x");
	x.appendChild(xClose);
	x.style.cssFloat = "right";
	x.style.marginRight = "3";
	x.style.marginTop = "3";
	return x;
}



		//{ div.parentNode.removeChild(div); });
