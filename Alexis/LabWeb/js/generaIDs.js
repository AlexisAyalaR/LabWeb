var n = 1;

function generaIdentidad(){

	var p = document.getElementById("res");
	var div = generaDiv();
	var img = document.createElement("img");
	var id = document.createElement("p");
	var t = document.createTextNode(n);
	img.src = "../../img/lol.png";
	img.height = "150";
	img.width = "100";
	div.appendChild(img);
	id.appendChild(t);
	div.appendChild(id);
	p.appendChild(div);
	n = n + 1;
}

function generaDiv(){
	var div = document.createElement("div");
	div.style.width = "150";
	div.style.height = "210";
	div.style.cssFloat = "left";
	div.style.textAlign = "center";
	div.style.border = "3px solid white";
	div.style.backgroundColor = "#556DF0"
	div.style.color = "white";
	return div;
}