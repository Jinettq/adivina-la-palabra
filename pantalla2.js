/*clase 90*/

jugador1= localStorage.getItem("jugador1");
jugador2= localStorage.getItem("jugador2");

puntos_jug1= 0;
puntos_jug2= 0;

document.getElementById("nombrejugador1").innerHTML=jugador1 + " : ";
document.getElementById("nombrejugador2").innerHTML=jugador2 + " : ";

document.getElementById("puntosjug1").innerHTML=puntos_jug1;
document.getElementById("puntosjug2").innerHTML=puntos_jug2;

document.getElementById("turnodepregunta").innerHTML=jugador1;
document.getElementById("turnoderespuesta").innerHTML=jugador2;



/*clase 91*/

function enviar(){
    leer_palabra= document.getElementById("palabra").value;
    palabra=leer_palabra.toLowerCase();

    letra1=palabra.charAt(1);

    mitad_de_palabra=Math.floor(palabra.length/2);
    letra2=palabra.charAt(mitad_de_palabra);

    longitud=palabra.length -1;
    letra3=palabra.charAt(longitud);

    quitar_letra1 =palabra.replace(letra1, " _ ");
    quitar_letra2 =quitar_letra1.replace(letra2, " _ ");
    quitar_letra3 =quitar_letra2.replace(letra3, " _ ");
    console.log(quitar_letra3);

    palabra_elegida_por_jugador="<h4 id='palabra_mostrada'> Palabra. " + quitar_letra3 +"</h4>";
    respuesta_elegida_por_jugador="<br> Respuesta : <input type='text' id='respuesta_del_jugador'>";
    boton_comprobar="<br><br><button id='comprobar' onclick='comprobar()'>Comprobar</button>";
    resultado_turno=palabra_elegida_por_jugador +  respuesta_elegida_por_jugador +boton_comprobar;
    document.getElementById("salida").innerHTML= resultado_turno;
    document.getElementById("palabra").value= " ";    

}

/*clase 92*/

turnodepregunta = "jugador1";
turnoderespuesta = "jugador2";

function comprobar()
{
    obtener_respuesta=document.getElementById("respuesta_del_jugador").value;
    respuesta=obtener_respuesta.toLowerCase();

    if(respuesta == palabra)	
	{
		if(turnoderespuesta == "jugador1")
		{
			puntos_jug1 = puntos_jug1 +1;
		    document.getElementById("puntosjug1").innerHTML = puntos_jug1;
            console.log(puntos_jug1);
		}
		else
		{
			puntos_jug2 = puntos_jug2 +1;
		    document.getElementById("puntosjug2").innerHTML = puntos_jug2;
            console.log(puntos_jug2);
		}
	}

    if(turnodepregunta == "jugador1")
    {
        turnodepregunta = "jugador2";
        document.getElementById("turnodepregunta").innerHTML= jugador2;
    }
     else
    {
        turnodepregunta = "jugador1";
         document.getElementById("turnodepregunta").innerHTML= jugador1;
    }

     if(turnoderespuesta == "jugador1")
    {
        turnoderespuesta = "jugador2";
        document.getElementById("turnoderespuesta").innerHTML= jugador2;
    }
    else
    {
        turnoderespuesta = "jugador1";
        document.getElementById("turnoderespuesta").innerHTML= jugador1;
    }

        document.getElementById("salida").innerHTML= "";
 }
