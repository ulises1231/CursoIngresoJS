/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{   
	//Esto es un comentario
    //alert("anda");
    //Toda linea de instruccion , termina con punto y coma (;)
    /*Esto es un comentario en bloque
    var nombre;
    alert("nombre");
    alert(nombre);
    nombre = "ulises";
    alert(nombre);
    var person = prompt("Please enter your name", "Harry Poter");
    */
    nombre=prompt("Ingrese su nombre", "Ulises Ponce");
	//siempre separamos los terminos por coma
	/*
	alert("su nombre es:");
	alert(nombre);
	*/
	alert("su nombre es: "+ nombre);
}

