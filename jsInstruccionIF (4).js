function mostrar()
{
//tomo la edad  
/*Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive)*/

		var edad;
		edad=document.getElementById("edad").value;
		edad=parseInt(edad);
		
			if((edad>=13) && (edad<=17))
			{
					alert("Es adolescente");
			}

}//FIN DE LA FUNCIÓN