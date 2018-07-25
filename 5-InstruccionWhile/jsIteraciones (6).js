/*Enunciado:
Al presionar el botón pedir 5 números e 
informar la suma acumulada y el promedio.*/

function mostrar()
{ 
	//var numeroUno x5?//
	
	var contador=0;
	var pedir;
	var suma=0;
	var promedio;


	while(contador<5){

		pedir=prompt("Ingrese");
		pedir=parseInt(pedir);
		suma=suma+pedir;
		contador++;

	}

	document.getElementById('suma').value=suma;
	document.getElementById('promedio').value=suma/5;

	






}//FIN DE LA FUNCIÓN