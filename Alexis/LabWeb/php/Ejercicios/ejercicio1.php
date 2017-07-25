<!DOCTYPE html>
<html>
<head>
	<title>Ejercicio 1</title>
</head>
<body>	

	<h2>Ejercicio 1</h2>
	<p>Inserta una palabra/frase:</p>
	<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  		Name: <input type="text" name="fname">
  		<input type="submit">
	</form>

	<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
    	$name = $_POST['fname'];
    	$file = '../../info/escribeAqui.txt';
    	file_put_contents($file, $name);
	}
	?>

	<a href="../index.html">
		<p>Regresa</p>
	</a>
</body>
</html>
