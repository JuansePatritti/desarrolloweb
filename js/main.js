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
/*let opciones;
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
  while (isNaN(userAmount) || userAmount == "null" || userAmount == "");
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
*/


//Segunda Entrega


// PROBANDO OBJ & CLASS
/*class Camera {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
  getMarca() {
    return this.marca;
  }
  getModelo() {
    return this.modelo;
  }
  getPrecio() {
    return this.precio;
  }
}

const camera1 = new Camera("Canon", "EOS RP", 1500);
console.log(camera1.getPrecio());
console.log(camera1.getModelo());*/



let camaras = [
  { marca: "NIKON", modelo: "D7000", precio: 1600 },
  { marca: "CANON", modelo: "EOS RP", precio: 2000 },
  { marca: "SONY", modelo: "a7", precio: 1400 },
  { marca: "SONY", modelo: "a8", precio: 2800 },
  { marca: "SONY", modelo: "a10", precio: 3000 },
  { marca: "SONY", modelo: "a12", precio: 3200 },
  { marca: "SONY", modelo: "a14", precio: 4000 },
  { marca: "CANON", modelo: "EOS R", precio: 2500 },
];

console.log(camaras);
let marcasDisp= camaras.forEach((mar) => {
  return console.log("las marcas disp son: ",mar.marca);
});
/*
let preciosConIVA = camaras.map((unaCamara) => {
  return { ...unaCamara, precio: unaCamara.precio * 1.21 };
});
console.log(preciosConIVA);

let fillter = preciosConIVA.filter((fillter) => {
  return fillter.precio >= 1800;
});
console.log("--> estas son las camaras q salen 2000 o mas", fillter);
*/
var condition = false;
let firstAnswer;
do {
  firstAnswer = prompt(
    "¿Ustéd desea comprar una cámara? Presione 1 si la respuesta es 'si', presione 2 si la respuesta es 'no'"
  );
  if (firstAnswer !== "1" && firstAnswer !== "2") {
    condition = false;
  } else {
    condition = true;
  }
} while (condition === false);

if (firstAnswer === "1") {
  let secondAnswer = prompt("¿Qué marca de cámara le interesa?").toUpperCase();

  let filtered = camaras.filter((elemento => {

    return elemento.marca === secondAnswer;
  }));
  console.log(filtered);
   
  
  for (let index = 0; index < filtered.length; index++) {
    const element = filtered[index];

    console.log(
    "Tenemos disponible la marca de cámara que deseas, el modelo "+ parseInt(index+1) +" es:", 
    filtered[index].modelo
  );
  }
  console.log(filtered.length);
 
  if(filtered.length>1){
    var condition = false;
    for (let i = 0; i < filtered.length; i++) {
      const element = filtered[i];}
  let fourthAnswer;
    fourthAnswer = prompt(
      "elija la opc para ver el precio: ")
      console.log("el precio con IVA, es de: ",filtered[parseInt(fourthAnswer)-1].precio*1.21)
    
  }
     
    else{

  
   let thirdAnswer; 
  var condition = false;
  if(filtered.length===0){
      console.log("no poseemos esa camara");
      thirdAnswer= 5
      
    }
  else  do {
    thirdAnswer = prompt(
      "Presione 1 para ver el precio de la camara, 2 para ver el precio de la camara con IVA, 3 para salir"
    );
    if (thirdAnswer !== "1" && thirdAnswer !== "2" && thirdAnswer !== "3") {
      condition = false;
    } else {
      condition = true;
    }
  } while (condition === false);
  switch (thirdAnswer) {
    case "1":
      console.log("El precio de la cámara sin IVA es: $" + filtered.precio);

      break;

    case "2":
      let precioIva = camaras.map((unaCamara) => {
        return { ...unaCamara, precio: unaCamara.precio * 1.21 };
      });
      let selected = precioIva.find((elemento) => {
        return elemento.marca === secondAnswer;
      });

      console.log("El precio de la cámara con IVA es: $" + selected.precio);

      break;

      case "3": console.log("gracias por su consulta!");
      break;
      
  }}
  
  /*if(finded(secondAnswer)!==undefined)
  {
    console.log("el resultado es", finded.marca);
  }
  else{
    console.log("no poseemos esa marca de cámara");
  }
}*/

if (firstAnswer === "2") {
}

//prueba
}

