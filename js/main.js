// /*
// let username = prompt("Ingrese su nombre:");
// console.log("Hola " + username + "!")
// alert("Hola " + username + "!")

// let cameraBrand= prompt(username + ", cuentanos... ¿Cual es la marca de tu cámara?").toUpperCase()
// if(cameraBrand==="CANON"){
//     alert("Usas Canon igual que nosotros! Este es tu espacio...")
// }
// else

//  alert("Que bueno! Nosotros usamos Canon, pero de todas formas te va a interesar!")*/

// //ejemplo 2
// /*let insertName;
//  let turno=0;
//  for (turno=1; turno < 6; turno++) {
//     insertName= prompt("ingrese su nombre")
//    console.log(
//     "--> el paciente " + insertName + " tiene el turno " + turno
//    );

//  }*/

// //Ejercicio 1ra Entrega
// /*let opciones;
// let username = prompt(
//   "Hola! Bienvenido al sistema de venta de autos, por favor ingrese su nombre"
// );
// console.log("Tu nombre es= " + username);
// let userAmount = parseFloat(
//   prompt(
//     "¿Que tal " + username + "? Ingrese la cantidad de dinero que desea gastar"
//   )
// );
// if (isNaN(userAmount) || userAmount == "null" || userAmount == "") {
//  // do {
//    // userAmount = prompt("Por favor, ingrese solo numeros!");
//   while (isNaN(userAmount) || userAmount == "null" || userAmount == "");
//   userAmount = prompt("Por favor, ingrese solo numeros!");
//   console.log("Su monto es =" + userAmount);
// } else {
//   cars(userAmount);
// }

// function cars(amount) {
//   let x = parseFloat(amount);
//   let carOne = 1000; //Ford Ka
//   let carTwo = 1500; //Ford Fiesta
//   let carThree = 2500; //Chevrolet corsa
//   let carFour = 4500; //Peugeot 307
//   let carFive = 10000; //Honda Civic

//   console.log("Tu dinero es = " + x);

//     if (x < 1500 && x >= 1000){
//       console.log("Usted puede comprar un Ford Ka, valuado en $" + carOne);
//       let opcion=prompt("Presione '1' si desea comprar el Ford Ka o '0' para salir")
//       if (parseInt(opcion)<0 || parseInt(opcion)>1)
//       {
//         alert("error, no ingresaste '0 / 1'")
//       }
//       else{
//       return opciones=opcion.toString();
//      }
//     }

//     else if( x < 2500 && x >= 1000){
//       console.log(
//         "Usted puede comprar un Ford Ka, valuado en $" + carOne + " o un Ford Fiesta, valuado en $"+ carTwo);
//        let opcion=prompt("Presione '1' si desea comprar el Ford Ka | '2' para comprar el Ford Fiesta | '0' para salir")
//        if (parseInt(opcion)<0 || parseInt(opcion)>2)
//        {
//         alert("error, no ingresaste '0 / 1 / 2'")
//        }
//        else{
//        return opciones=opcion.toString();
//       }

//     }
//     else if (x < 4500 && x >= 1000){
//       console.log(
//         "Usted puede comprar un Ford Ka, valuado en $" + carOne + "; un Ford Fiesta, valuado en $"+ carTwo + " o un Chevrolet Corsa, valuado en $" + carThree
//       );
//       let opcion=prompt("Presione '1' si desea comprar el Ford Ka | Presione '2' si desea comprar el Ford Fiesta | Presione 3 si desea comprar  el Chevrolet Corsa")
//        if (parseInt(opcion)<0 || parseInt(opcion)>3)
//        {
//         alert("error, no ingresaste '0 / 1 / 2 / 3'")
//        }
//        else{
//        return opciones=opcion.toString();
//       }
//    }

//     else if( x < 10000 && x >= 1000){
//       console.log(
//         "Usted puede comprar un Ford Ka, valuado en $" + carOne + "; un Ford Fiesta, valuado en $"+ carTwo + "; un Chevrolet Corsa, valuado en $" + carThree+" o un Peugeot 307, valuado en $"+carFour
//       );
//       let opcion=prompt("Presione '1' si desea comprar el Ford Ka | Presione '2' si desea comprar el Ford Fiesta | Presione 3 si desea comprar  el Chevrolet Corsa | '4' para comprar el Peugeot 307")
//       if (parseInt(opcion)<0 || parseInt(opcion)>4)
//       {
//         alert("error, no ingresaste '0 / 1 / 2 / 3 / 4'")
//       }
//       else{
//       return opciones=opcion.toString();
//      }
//      }

//     else if (x >= 10000){
//       console.log(
//         "Usted puede comprar un Ford Ka, valuado en $" + carOne + "; un Ford Fiesta, valuado en $"+ carTwo + "; un Chevrolet Corsa, valuado en $" + carThree+"; un Peugeot 307, valuado en $"+carFour+" o un Honda Civic, valuado en $"+carFive
//       );
//       let opcion=prompt("Presione '1' si desea comprar el Ford Ka | Presione '2' si desea comprar el Ford Fiesta | Presione 3 si desea comprar  el Chevrolet Corsa | '4' para comprar el Peugeot 307 | '5' para comprar el Honda Civic")
//       if (parseInt(opcion)<0 || parseInt(opcion)>5)
//       {
//         alert("error, no ingresaste '0 / 1 / 2 / 3 / 4 / 5'")
//       }
//       else{
//       return opciones=opcion.toString();
//      }
//     }
//       else{
//         alert("Lo siento, no poseemos autos disponibles con el valor solicitado")
//       }
//     }
//     function comprar(opc){
//       switch(opc.toString()){
//       case '1':
//         newPrice=userAmount-1000;
//         console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
//       break;
//       case '2':
//         newPrice=userAmount-1500;
//         console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
//         break;
//         case '3':
//         newPrice=userAmount-2500;
//         console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
// break;
//         case '4':
//         newPrice=userAmount-4500;
//         console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
// break;
//         case '5':
//         newPrice=userAmount-10000;
//         console.log("Comprado! Usted tenía $"+ userAmount + " y ahora tiene $"+newPrice)
// break;
//       }
//     }
//     console.log("opcion = " + opciones )

//     comprar(opciones);
// */

// //Segunda Entrega

// // PROBANDO OBJ & CLASS
// /*class Camera {
//   constructor(marca, modelo, precio) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.precio = precio;
//   }
//   getMarca() {
//     return this.marca;
//   }
//   getModelo() {
//     return this.modelo;
//   }
//   getPrecio() {
//     return this.precio;
//   }
// }

// const camera1 = new Camera("Canon", "EOS RP", 1500);
// console.log(camera1.getPrecio());
// console.log(camera1.getModelo());*/
// /*
// let preciosConIVA = camaras.map((unaCamara) => {
//   return { ...unaCamara, precio: unaCamara.precio * 1.21 };
// });
// console.log(preciosConIVA);

// let fillter = preciosConIVA.filter((fillter) => {
//   return fillter.precio >= 1800;
// });
// console.log("--> estas son las camaras q salen 2000 o mas", fillter);
// */

// let camaras = [
//   { marca: "NIKON", modelo: "D7000", precio: 1600 },
//   { marca: "CANON", modelo: "EOS RP", precio: 2000 },
//   { marca: "CANON", modelo: "EOS R", precio: 2500 },
//   { marca: "SONY", modelo: "a7", precio: 1400 },
//   { marca: "SONY", modelo: "a8", precio: 2800 },
//   { marca: "SONY", modelo: "a10", precio: 3000 },
//   { marca: "SONY", modelo: "a12", precio: 3200 },
//   { marca: "SONY", modelo: "a14", precio: 4000 },
// ];

// console.log(camaras);
// let marcasDisp = camaras.forEach((mar) => {
//   return console.log("las marcas disp son: ", mar.marca);
// });

// var condition = false;
// let firstAnswer;
// do {
//   firstAnswer = prompt(
//     "¿Ustéd desea comprar una cámara? Presione 1 si la respuesta es 'si', presione 2 si la respuesta es 'no'"
//   );
//   if (firstAnswer !== "1" && firstAnswer !== "2") {
//     condition = false;
//   } else {
//     condition = true;
//   }
// } while (condition === false);

// if (firstAnswer === "1") {
//   let secondAnswer = prompt("¿Qué marca de cámara le interesa?").toUpperCase();

//   let filtered = camaras.filter((elemento) => {
//     return elemento.marca === secondAnswer;
//   });
//   console.log(filtered);

//   for (let index = 0; index < filtered.length; index++) {
//     const element = filtered[index];

//     console.log(
//       "Tenemos disponible la marca de cámara que deseas, el modelo " +
//         parseInt(index + 1) +
//         " es:",
//       filtered[index].modelo
//     );
//   }
//   console.log(filtered.length);

//   if (filtered.length > 1) {
//     var condition = false;
//     for (let i = 0; i < filtered.length; i++) {
//       const element = filtered[i];
//     }
//     let fourthAnswer;
//     fourthAnswer = prompt("elija la opc para ver el precio: ");
//     console.log(
//       "el precio con IVA, es de: ",
//       filtered[parseInt(fourthAnswer) - 1].precio * 1.21
//     );
//   } else {
//     let thirdAnswer;
//     var condition = false;
//     if (filtered.length === 0) {
//       console.log("no poseemos esa camara");
//       thirdAnswer = 5;
//     } else
//       do {
//         thirdAnswer = prompt(
//           "Presione 1 para ver el precio de la camara, 2 para ver el precio de la camara con IVA, 3 para salir"
//         );
//         if (thirdAnswer !== "1" && thirdAnswer !== "2" && thirdAnswer !== "3") {
//           condition = false;
//         } else {
//           condition = true;
//         }
//       } while (condition === false);
//     switch (thirdAnswer) {
//       case "1":
//         console.log("El precio de la cámara sin IVA es: $" + filtered.precio);

//         break;

//       case "2":
//         let precioIva = camaras.map((unaCamara) => {
//           return { ...unaCamara, precio: unaCamara.precio * 1.21 };
//         });
//         let selected = precioIva.find((elemento) => {
//           return elemento.marca === secondAnswer;
//         });

//         console.log("El precio de la cámara con IVA es: $" + selected.precio);

//         break;

//       case "3":
//         console.log("gracias por su consulta!");
//         break;
//     }
//   }

//   /*if(finded(secondAnswer)!==undefined)
//   {
//     console.log("el resultado es", finded.marca);
//   }
//   else{
//     console.log("no poseemos esa marca de cámara");
//   }
// }*/

//   if (firstAnswer === "2") {
//   }
// }

// --> TERCER ENTREGA
class Category {
  constructor(id = 0, name = "Sin categoria") {
    this.id = id;
    this.name = name;
  }
  toString() {
    if (this.id!=0) {
      return this.name;
    }
    return "Sin categoria"
  }
}

class Product {
  constructor(
    marca = "sin marca",
    modelo = "sin modelo",
    precio = 0,
    id=0,
    categoria= null,
    img="sin img"
  ) {
    this.id=id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.categoria = categoria;
    this.img=img
  }
  toString() {
    if (this.categoria != null) {
      return this.marca, this.modelo;
    }
    this.marca;
  }

 
}

class Order {
  constructor(product = null, quantity = 0) {
    this.product = product;
    this.quantity = quantity;
  }
  toString(){
    if (product!=null) {
      return this.product.marca + " " + this.product.modelo
    }
    return "ningun producto seleccionado";
  }
   getSubtotal() {
    if (this.product!=null) {
      return parseFloat(this.quantity * this.product.precio);
    }
    return 0;
  }
  
 }


let cameraCategory = new Category(1, "Camara");
let lenseCategory = new Category(2, "Lente");
const allProducts=document.getElementById("shopContent")
const emptyItems=document.querySelector(".modal .modal-body")
let products= [];

products.push(new Product("canon", "eos rp", 1200,1,cameraCategory,"../img/img_canonrp.png"));
products.push(new Product("canon", "eos r", 1600,2,cameraCategory,"../img/img_canonrp.png"));
products.push(new Product("sony", "a7", 1400,3,cameraCategory,"../img/img_canonrp.png"));
products.push(new Product("sony", "a5", 1100,4,cameraCategory,"../img/img_canonrp.png"));
products.push(new Product("nikon", "d7500", 1600,5,cameraCategory,"../img/img_canonrp.png"));
products.push(new Product("nikon", "d5600", 1200,6,cameraCategory,"../img/img_canonrp.png"));
products.push(new Product("fuji", "xt4", 1300,7,cameraCategory,"../img/img_canonrp.png"));


console.table(products)
products.forEach((product)=>{
  let content = document.createElement("div")
  content.innerHTML+=
  `<div class="card mt-3" style="width: 15em;">
    <img class="card-img-top mt-0" src="${product.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${product.marca.toUpperCase() + " " + product.modelo.toUpperCase()}</h5>
      <p class="card-text">Precio: U$D ${product.precio}</p>
      <button class="btn btn-primary se" onclick="addProduct(${product.id})">Agregar al carrito</button>
    </div>
  </div>
  `
  allProducts.append(content)
})
let addCart=[] 

document.addEventListener("DOMContentLoaded",()=>{
  addCart=JSON.parse(localStorage.getItem("cart")) || []
  showCart()
})

function addProduct(id){
 
 let addItem= products.find((aProd)=>
  aProd.id===id)
  addCart.push(addItem)
  console.log(addCart);
  showCart()
 }

 const showCart= ()=>{
  const modalBody=document.querySelector(".modal .modal-body")
    modalBody.innerHTML=" "
addCart.forEach((prod)=>{
 const {marca, modelo,precio, categoria, id, img} = prod
  modalBody.innerHTML +=
`
<div class="modal-contenedor">
  <div>
    <img class="img-fluid img-shop" src="${img}"/>
    </div>

  <div>
    <p>Producto: ${marca.toUpperCase() + " " +modelo.toUpperCase()}
    <p>Precio: ${precio}
    <p>Cantidad: 1

    <button onclick="removeProduct(${id})" class="btn btn-danger">Eliminar producto</button>
  </div>
</div>
`

 

 }) 
 if (addCart.length=="" && null && 0 && undefined &&[]) {
  
 }
 cartQ=addCart.length
 console.log(cartQ);
 if (cartQ==0) {
 
   modalBody.innerHTML =
    `<div class="modal-body">
     <p class="text-primary">Tu carrito está vacío</p>
     </div>`
  
 }

saveStorage()
 }
 function removeProduct(id){
  const idItem=id
  addCart=addCart.filter((item)=>item.id!==idItem)
console.log(addCart);
showCart()
saveStorage()
 }
 function saveStorage(){
  localStorage.setItem("cart", JSON.stringify(addCart))
 }
 function emptyCart(){
  addCart.length=[]
  saveStorage()
  showCart()

  console.log(addCart);
 }
 function productSearch(){
let inputValue= document.querySelector("#inputSearch").value;
products.filter((product)=>{
  if(inputValue==product.modelo||inputValue===product.marca)
console.log("encontrado");})

 }

let toastify=document.querySelectorAll('.se').forEach(btn => {
  btn.addEventListener('click', () => {
       Toastify({
  text: "A product has been added",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #555555,#000000)",
  },
  onClick: function(){} // Callback after click
}).showToast()
  });
});

// let cart= new Order()
// let acumulable=0;


//let total=0


// let newCard =[];

// function addToCard(newCard,purchaseItem) 
//   const nuevoArray = [];  
//     for(let i = 0; i < arr.length; i = i + 1) {      
//         nuevoArray.push(purchaseItem(arr[i], i)); 
// }
// function getTotal() {
//   addCard.forEach(aCard => {

//   console.log("resultado -->" ,aCard.product.categoria.toString(),": ",aCard.product.marca, aCard.product.modelo, "precio unitario: U$D", "quantity:" , aCard.quantity, aCard.getSubtotal()); 
//   total=aCard.getSubtotal();
//   acumulable=total+acumulable;})
 
//   console.log("el total es: ---------> U$D", acumulable, "tasd", total);
//   return total=0
 
// }





//   function convertToPesos(acumulable) {
//    return parseFloat(acumulable)*324
//   }
// console.log(); 
// function purchaseItem(){  

// //btn.addEventListener("click",purchaseItem)
// addCard.push(new Order(products.find(unProducto=> {return unProducto.id==2}), 1))
//   getTotal()

//  }


