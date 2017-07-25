<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>	

	<?php
	$target_dir = "../../info/";
	$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
	$uploadOk = 1;
	if ($uploadOk == 0) {
	    echo "No se subió el archivo";

	} else {
	    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
	        echo "El archivo ". basename( $_FILES["fileToUpload"]["name"]). " se 
	        ha subido.";
	    } else {
	        echo "No se subió el archivo.";
	    }
	}
?>

	<a href="ejercicio2.html">
		<p>Sube otro archivo</p>
	</a>
	<a href="../index.html">
		<p>Regresa a los ejercicios</p>
	</a>
</body>
</html>