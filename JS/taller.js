   //varaibles booleanas
   var bandera = false;
   //variavle arrray
   var arrayNumero = new Array(2000);
   //varaibles contadoras
   var contIntentos = 0;
   var i = 0;
   //varaible que genera numero aleatorio
   var aleatorio = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

  

  

    do{
          //tomar dato digitado
        alert("Numero a adivinar: " + aleatorio);
        var numero = prompt("Digite un numero entero del 1 - 100");
      
        //declaracion de varaibles
        if(Number(numero)){
            if((numero > 0) && (numero < 101)){
                arrayNumero[i]=numero;
                i++;
                if(numero == aleatorio){
                    alert("Felicidades has adivinado el numero");
                    contIntentos++
                    bandera = true;
                }else{
                    contIntentos++;
                    if(numero<aleatorio){
                        alert("PISTA: El numero ingresado es MENOR al numero a adivinar");
                    }else{
                        alert("PISTA: El numero ingresado es MAYOR al numero a adivinar");
                    }
                }
            }else{
                alert("ERROR... Digite un numero del 1 - 100");
            }
           
        }else{
            alert("ERROR... Digite un numero del 1 - 100");
        }
   }while(bandera == false);
   
   document.write(" <h1>'Felicidades has ganado el juego'</h1>");
   document.write("<div class='table'>");
    document.write("<table>");
    document.write("<tr>");
    document.write("<td>");
    document.write("<h2> Intentos </h2>");
    document.write("</td>");
    document.write("<td>");
    document.write("<h2> numero </h2>");
    document.write("</td>");
  
   document.write("</tr>")
   for(var k=0;k<contIntentos;k++){
    document.write("<tr>"+"<th>" +  (k+1) + "°</th>");
    document.write("<th>" + arrayNumero[k] + "</th>" + "</tr>");
   }
   

   document.write("</table>")
   document.write("</div>");

   if(contIntentos == 1){
    document.write("<div class='resul'>");
    document.write("<h1> SOBRESALIENTE </h1>");
    document.write("<img src='CSS/img/4415966.png'");
    document.write("</div>");
   }else if(contIntentos < 4){
    document.write("<div class='resul'>");
    document.write("<h1> NOTABLE </h1>");
    document.write("<img src='CSS/img/png_like_67264.png'");
    document.write("</div>");
   }else if(contIntentos < 11 ){
    document.write("<div class='resul'>");
    document.write("<h1> MUY BIEN </h1>");
    document.write("<img src='CSS/img/descarga.jpg'");
    document.write("</div>");
   }else if(contIntentos < 25){
    document.write("<div class='resul'>");
    document.write("<h1> REGULAR </h1>");
    document.write("<img src='CSS/img/_104304494_mediaitem104304493.jpg'");
    document.write("</div>");
   }else{
    document.write("<div class='resul'>");
    document.write("<h1> PÉSIMO </h1>");
    document.write("<img src='CSS/img/61ef9b5a92fdd.jpeg'");
    document.write("</div>");
   }
   

