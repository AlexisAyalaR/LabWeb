function generaPiramide() {
	var p = document.getElementById("res");
	p.innerHTML = '';
	var n = document.getElementById("textbox").value;

	if(n == ''){
		n = 0;
	}
	for (var i = 1; i <= n; i++){
		for (var j = 0; j < i; j++){
			p.innerHTML +=0;
		}
		p.innerHTML += "<br>";

	}
}