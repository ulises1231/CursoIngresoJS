/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
	var edad;
	nombre=document.getElementById('elNombre').value
	edad= document.getElementById('laEdad');
 
    alert("Usted se llama Jose"+  nombre  +"  y tiene " +edad+" años");
    
}

