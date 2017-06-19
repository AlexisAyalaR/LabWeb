var numero = 0;
var arreglo = [];

function generaIdioma(){
	var idioma = document.getElementById("bDropdown").value;
	if(idioma != "Selecciona un idioma"){
		var div = generaDiv();
		var p = document.getElementById("res");
		var x = generaClose(div);
		var id = document.createElement("P");
		var t = document.createTextNode(idioma);
		var dropDown = generaDropDown();
		div.appendChild(x);
		div.appendChild(id);
		id.appendChild(t);
		div.appendChild(dropDown);
		p.appendChild(div);
		x.addEventListener("click", function(){ 
			eliminaIdioma(div, idioma, dropDown);
		});
		arreglo[numero] = idioma;
		numero++;
	}
	else
		alert("Selecciona un idioma");
}

function generaDiv(){
	var div = document.createElement("DIV");
	div.style.width = "400";
	div.style.height = "150";
	div.style.marginTop = "30";
	div.style.paddingTop = "20";
	div.style.textAlign = "center";
	div.style.fontSize = "35";
	div.style.border = "3px solid white";
	div.style.borderRadius = "5000px 500px 5000px 500px";
	div.style.backgroundColor = "#0047b3";
	div.style.color = "white";
	return div;
}

function generaClose(div){
	var x = document.createElement("BUTTON");
	var xClose = document.createTextNode("x");
	x.appendChild(xClose);
	x.style.cssFloat = "right";
	x.style.fontSize = "13";
	x.style.marginRight = "20";
	x.style.marginTop = "0";
	return x;
}

function generaDropDown(){
	var dropDown = document.createElement("SELECT");

	var principiante = document.createElement("OPTION");
	var p = document.createTextNode("Principiante");
	principiante.appendChild(p);

	var intermedio = document.createElement("OPTION");
	var i = document.createTextNode("Intermedio");
	intermedio.appendChild(i);

	var avanzado = document.createElement("OPTION");
	var a = document.createTextNode("Avanzado");
	avanzado.appendChild(a);

	dropDown.appendChild(principiante);
	dropDown.appendChild(intermedio);
	dropDown.appendChild(avanzado);

	dropDown.style.marginTop = "25";

	dropDown.setAttribute("id", "Div"+numero);

	return dropDown;
}

function muestraIdiomas(){
	var res = document.getElementById("muestraResultado");
	res.innerHTML = '';
	for (var j = 0; j < numero; j++) {
		res.innerHTML += "Idioma: "+arreglo[j]+"; Nivel: "+document.getElementById("Div"+j).value;
		res.innerHTML += "<br>";
	}
	alert("Lenguajes Modificados");
}


function eliminaIdioma(div, idioma, dropDown){ 
	
	for (var k = 0; k < numero; k++) {
		if(arreglo[k] == idioma){
			arreglo[k] = arreglo[numero-1];
			arreglo[numero-1] = '';
			var num = numero-1;
			document.getElementById("Div"+num).id = "Div"+k;
			k = numero-1
			numero--;
		}
	}

	div.parentNode.removeChild(div); 
	
}


	