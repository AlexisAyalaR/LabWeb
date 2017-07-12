cd Desktop/LabWeb/Alexis/LabWeb/terminal/Ejercicios/Encriptacion

## Decodificando

	#Se cambia en .nel a .java
	for f in *.nel; do         mv "$f" "$(basename "$f" .nel).java";     done

	#Crea el archivo aEncriptar.txt
	touch aEncriptar.txt

	#Copia el algoritmo de D1.java a aEncriptar.txt
	cat D1.java >> aEncriptar.txt

	#Crea el archivo desencripta.java
	touch desencripta.java

	#Copia .desencripta.java a desencripta.java
	cat .desencripta.java > desencripta.java

	#Compila y corre el algoritmo para desencriptar
	javac desencripta.java && java desencripta

	#Borra los archivos de desencriptamiento
	rm desencripta.java && rm desencripta.class


##Corre el programa

	#Copia el texto desencriptado al archivo para correrlo
	cat aEncriptar.txt > D1.java

	#Compila y corre el programa
	javac D1.java && java D1

	#Borra la clase
	rm D1.class


## Codificando

	#Crea el archivo para encriptar
	touch encripta.java

	#Copia .encripta.java a encripta.java
	cat .encripta.java > encripta.java

	#Compila y corre el algoritmo para encriptar
	javac encripta.java && java encripta

	#Copia el texto encriptado a D1.java
	cat aEncriptar.txt > D1.java

	#Borra los archivos de encriptamiento
	rm encripta.java && rm encripta.class

	#Borra el archivo aEncriptar.txt
	rm aEncriptar.txt

	#Cambia el .java a .nel
	for f in *.java; do         mv "$f" "$(basename "$f" .java).nel";     done

$SHELL


