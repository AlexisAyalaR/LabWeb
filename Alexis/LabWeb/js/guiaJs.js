var tiempo = '15s';

function generaBee(){

		var divBee = document.getElementById("bee");
		var img = document.createElement("IMG");
		img.src = "../../img/bee.png";
		img.height = "40";
		img.width = "50";
		img.setAttribute("id", "beeImg");
		img.style.animationDuration = tiempo;
		img.addEventListener("click", function(){ 
			generaBee();
		});
		divBee.appendChild(img);
}