<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>	

	<?php
	$target_dir = "../../../info/";
	$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
	$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
	$nombre = basename( $_FILES["fileToUpload"]["name"]);
	if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
	    
	    echo "El archivo ". basename( $_FILES["fileToUpload"]["name"]). " se 
	        ha subido.";

	        if($imageFileType == "jpg" || $imageFileType == "png" || $imageFileType == "jpeg" || $imageFileType == "pdf" || $imageFileType == "mp3") {
	        	echo "<iframe src=\"../../../info/". $nombre."\" width=\"300px\" style=\"height:300px\"></iframe>";
    			
			} elseif($imageFileType == "mp3"){
				echo "<iframe src=\"../../../info/". $nombre."\" width=\"300px\" style=\"height:100px\"></iframe>";
			} else{
				echo "Como no se subio imagen ni pdf ni audio, no hay preview.";
			}

	} else {
	    echo "No se subió el archivo.";
	}
	?>

	<a href="ejercicio2.html">
		<p>Sube otro archivo</p>
	</a>
	<a href="../../index.html">
		<p>Regresa a los ejercicios</p>
	</a>
</body>
</html>