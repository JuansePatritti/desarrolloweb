/*
let username = prompt("Ingrese su nombre:");
console.log("Hola " + username + "!")
alert("Hola " + username + "!")

let cameraBrand= prompt(username + ", cuentanos... ¿Cual es la marca de tu cámara?").toUpperCase()
if(cameraBrand==="CANON"){
    alert("Usas Canon igual que nosotros! Este es tu espacio...")
}
else

 alert("Que bueno! Nosotros usamos Canon, pero de todas formas te va a interesar!")*/

//ejemplo 2
/*let insertName;
 let turno=0;
 for (turno=1; turno < 6; turno++) {
    insertName= prompt("ingrese su nombre")
   console.log(
    "--> el paciente " + insertName + " tiene el turno " + turno 
   );
    
 }*/

//Ejercicio 1ra Entrega
let opciones;
let username = prompt(
  "Hola! Bienvenido al sistema de venta de autos, por favor ingrese su nombre"
);
console.log("Tu nombre es= " + username);
let userAmount = parseFloat(
  prompt(
    "¿Que tal " + username + "? Ingrese la cantidad de dinero que desea gastar"
  )
);
if (isNaN(userAmount) || userAmount == "null" || userAmount == "") {
 // do {
   // userAmount = prompt("Por favor, ingrese solo numeros!");
  /*}*/while (isNaN(userAmount) || userAmount == "null" || userAmount == "");
  userAmount = prompt("Por favor, ingrese solo numeros!");
  console.log("Su monto es =" + userAmount);
} else {
  cars(userAmount);
}

function cars(amount) {
  let x = parseFloat(amount);
  let carOne = 1000; //Ford Ka
  let carTwo = 1500; //Ford Fiesta
  let carThree = 2500; //Chevrolet corsa
  let carFour = 4500; //Peugeot 307
  let carFive = 10000; //Honda Civic

  console.log("Tu dinero es = " + x);

    if (x < 1500 && x >= 1000){
      console.log("Usted puede comprar un Ford Ka, valuado en $" + carOne);
      let opcion=prompt("Presione '1' si desea comprar el Ford Ka o '0' para salir")
      if (parseInt(opcion)<0 || parseInt(opcion)>1)
      {
        alert("error, no ingresaste '0 / 1'")
      }
      else{
      return opciones=opcion.toString();
     }
    }

    else if( x < 2500 && x >= 1000){
      console.log(
        "Usted puede comprar un Ford Ka, valuado en $" + carOne + " o un Ford Fiesta, valuado en $"+ carTwo);
       let opcion=prompt("Presione '1' si desea comprar el Ford Ka | '2' para comprar el Ford Fiesta | '0' para salir")
       if (parseInt(opcion)<0 || parseInt(opcion)>2)
       {
        alert("error, no ingresaste '0 / 1 / 2'")
       }
       else{
       return opciones=opcion.toString();
      }
    
    }
    else if (x < 4500 && x >= 1000){
      console.log(
        "Usted puede comprar un Ford Ka, valuado en $" + carOne + "; un Ford Fiesta, valuado en $"+ carTwo + " o un Chevrolet Corsa, valuado en $" + carThree
      );
      let opcion=prompt("Presione '1' si desea comprar el Ford Ka | Presione '2' si desea comprar el Ford Fiesta | Presione 3 si desea comprar  el Chevrolet Corsa")
       if (parseInt(opcion)<0 || parseInt(opcion)>3)
       {
        alert("error, no ingresaste '0 / 1 / 2 / 3'")
       }
       else{
       return opciones=opcion.toString();
      }
   }

    else if( x < 10000 && x >= 1000){
      console.log(
        "Usted puede comprar un Ford Ka, valuado en $" + carOne + "; un Ford Fiesta, valuado en $"+ carTwo + "; un Chevrolet Corsa, valuado en $" + carThree+" o un Peugeot 307, valuado en $"+carFour
      );
      let opcion=prompt("Presione '1' si desea comprar el Ford Ka | Presione '2' si desea comprar el Ford Fiesta | Presione 3 si desea comprar  el Chevrolet Corsa | '4' para comprar el Peugeot 307")
      if (parseInt(opcion)<0 || parseInt(opcion)>4)
      {
        alert("error, no ingresaste '0 / 1 / 2 / 3 / 4'")
      }
      else{
      return opciones=opcion.toString();
     }
     }

    else if (x >= 10000){
      console.log(
        "Usted puede comprar un Ford Ka, valuado en $" + carOne + "; un Ford Fiesta, valuado en $"+ carTwo + "; un Chevrolet Corsa, valuado en $" + carThree+"; un Peugeot 307, valuado en $"+carFour+" o un Honda Civic, valuado en $"+carFive
      );
      let opcion=prompt("Presione '1' si desea comprar el Ford Ka | Presione '2' si desea comprar el Ford Fiesta | Presione 3 si desea comprar  el Chevrolet Corsa | '4' para comprar el Peugeot 307 | '5' para comprar el Honda Civic")
      if (parseInt(opcion)<0 || parseInt(opcion)>5)
      {
        alert("error, no ingresaste '0 / 1 / 2 / 3 / 4 / 5'")
      }
      else{
      return opciones=opcion.toString();
     }
    }
      else{
        alert("Lo siento, no poseemos autos disponibles con el valor solicitado")
      }
    }
    function comprar(opc){
      switch(opc.toString()){
      case '1':
        newPrice=userAmount-1000;
        console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
      break;
      case '2':
        newPrice=userAmount-1500;
        console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
        break;
        case '3':
        newPrice=userAmount-2500;
        console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
break;
        case '4':
        newPrice=userAmount-4500;
        console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
break;
        case '5':
        newPrice=userAmount-10000;
        console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
break;
      }
    }
    console.log("opcion = " + opciones )

    comprar(opciones);

