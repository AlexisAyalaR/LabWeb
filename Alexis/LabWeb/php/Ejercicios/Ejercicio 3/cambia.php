<!DOCTYPE html>
<html>
<head>
	<title>Ejercicio 3</title>
</head>
<body>

	<?php

		$nuevoNombre = "Hola " . $_POST['fname'] . " te saluda PHP";

		//Cambia la extensión del archivo a desencriptar
		rename("D1.nel", "D1.java");

		//Se altera el codigo a agregar al archivo
		$nuevoCodigo = 'public class D1{	public static void main (String [] args){		System.out.println ("' . $nuevoNombre . '");	}}';

		//Se cambia el código del archivo
    	file_put_contents('D1.java', $nuevoCodigo);

    	//Se crea el archivo para mantener el código
		$aEncriptar = fopen("aEncriptar.txt", "w");

		//Se copia el texto en el archivo aEncriptar
		copy("D1.java", "aEncriptar.txt");

		//Corre el programa de Java
		$file = "D1.java";
		exec('javac '.$file,$output,$resultCode);
		echo exec("java -cp . D1", $output,$resultCode);

		//Se encritpa
		$file2 = "encripta.java";
		exec('javac '.$file2,$output,$resultCode);
		exec("java -cp . encripta", $output,$resultCode);

		//Se copia de regreso el código encritpado
		copy("aEncriptar.txt", "D1.java");

		//Se borran todos los archivos creados
		unlink('aEncriptar.txt');
		unlink('encripta.class');
		unlink('D1.class');

		//Se encripta la extension 
		rename("D1.java", "D1.nel");

	?>

	<a href="ejercicio3.html">
		<p>Cambia el código</p>
	</a>
	<a href="../../index.html">
		<p>Regresa a los ejercicios</p>
	</a>

</body>
</html>
