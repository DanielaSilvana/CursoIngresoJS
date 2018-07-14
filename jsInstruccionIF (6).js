function mostrar()
{
//tomo la edad  

		var edad;
		edad=document.getElementById("edad").value;
		edad=parseInt(edad);

		/*if(edad<13)
		{
				alert("Es un niño");
		}
		if ((edad>=13) && (edad<=17))
		{
				alert("Es adolescente");
		}
		if (edad>17) 
		{
			alert("Es mayor de edad");
		}*/

		//*Esto es eficaz NO eficiente SI se cumpla una, esa misma condiciona a las demás, el if iterado no


	if(edad<13)
		{
			alert("Es un niño");
		}

	if ((edad>=13) && (edad<=17))
		{
			alert("Es adolescente");
		}
	else
	{
			alert("Es mayor");
	}
	

	/*if (edad>17 && edad<=40) 
	{
			alert("Joven adulto");
	}
	else
	{
			alert("Es anciano");
	} */




}//FIN DE LA FUNCIÓN