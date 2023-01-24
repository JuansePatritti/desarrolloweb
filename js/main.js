class Category {
  constructor(id = 0, name = "Sin categoria") {
    this.id = id;
    this.name = name;
  }
  toString() {
    if (this.id != 0) {
      return this.name;
    }
    return "Sin categoria";
  }
}

class Product {
  constructor(
    cantidad = 0,
    marca = "sin marca",
    modelo = "sin modelo",
    precio = 0,
    id = 0,
    categoria = null,
    img = "sin img"
  ) {
    this.cantidad = cantidad;
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.categoria = categoria;
    this.img = img;
    this.cantidad = cantidad;
  }
}

let cameraCategory = new Category(1, "Camara");
let lenseCategory = new Category(2, "Lente");

let toastify = document.querySelectorAll(".se").forEach((btn) => {
  btn.addEventListener("click", () => {
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
      onClick: function () {}, // Callback after click
    }).showToast();
  });
});
const allProducts = document.getElementById("shopContent");
const emptyItems = document.querySelector(".modal .modal-body");
const precioTotal = document.querySelector("#precioTotal");
const confirm = document.getElementById("confirm");
const modalCarrito = document.getElementById("exampleModal");
const closeButton = document.getElementById("closeButton");
let newproducts = [];
const getProducts = async () => {
  const response = await fetch("../data/catalog.json");
  const data = await response.json();

  return data;
};
const renderProducts = () => {
  getProducts().then((response) => {
    let products = response;
    console.log(products);

    newproducts = products;
    products.forEach((product) => {
      let content = document.createElement("div");
      content.innerHTML += `<div class="card mt-3" style="width: 15em;">
    <img class="card-img-top mt-0" src="${product.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${
        product.marca.toUpperCase() + " " + product.modelo.toUpperCase()
      }</h5>
      <p class="card-text">Precio: U$D ${product.precio}</p>
      <button class="btn btn-primary se" onclick="addProduct(${
        product.id
      })">Agregar al carrito</button>
    </div>
  </div>
  `;
      allProducts.append(content);
    });

    let toastify = document.querySelectorAll(".se").forEach((btn) => {
      btn.addEventListener("click", () => {
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
          onClick: function () {}, // Callback after click
        }).showToast();
      });
    });
  });
};
renderProducts();

console.log("este es el toast:".toastify);
let addCart = [];
document.addEventListener("DOMContentLoaded", () => {
  addCart = JSON.parse(localStorage.getItem("cart")) || [];
  showCart();
});

console.log("este es el array", newproducts);

function addProduct(id) {
  const exist = addCart.some((prod) => prod.id === id);
  if (exist) {
    addCart.map((prod) => {
      if (prod.id === id) {
        prod.cantidad++;
      }
    });
  } else {
    let addItem = newproducts.find((aProd) => aProd.id === id);
    addCart.push(addItem);
    console.log(addCart);
  }

  showCart();
}
const showCart = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  modalBody.innerHTML = " ";
  addCart.forEach((prod) => {
    const { marca, modelo, precio, categoria, id, img, cantidad } = prod;
    modalBody.innerHTML += `
<div class="modal-contenedor">
  <div>
    <img class="img-fluid img-shop" src="${img}"/>
    </div>

  <div>
    <p>Producto: ${marca.toUpperCase() + " " + modelo.toUpperCase()}
    <p>Precio: ${precio}
    <p>Cantidad: ${cantidad}

    <button onclick="removeProduct(${id})" class="btn btn-danger">Eliminar producto</button>
  </div>
</div>
`;
  });
  if (addCart.length == "" && null && 0 && undefined && []) {
  }
  cartQ = addCart.length;
  console.log(cartQ);
  if (cartQ == 0) {
    confirm.className = "btn btn-warning d-none";
    modalBody.innerHTML = `<div class="modal-body">
     <p class="text-primary">Tu carrito está vacío</p>
     </div>`;
  }
  let total = addCart.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
  precioTotal.innerText = `Total: ` + total;

  if (cartQ > 0) {
    confirm.className = "btn btn-warning";
  }
  saveStorage();
};

function removeProduct(id) {
  const idItem = id;
  addCart = addCart.filter((item) => item.id !== idItem);
  console.log(addCart);
  showCart();
  saveStorage();
}

function saveStorage() {
  localStorage.setItem("cart", JSON.stringify(addCart));
}

function emptyCart() {
  addCart.length = [];
  saveStorage();
  showCart();

  console.log(addCart);
}

function finishOrder() {
  confirm.innerHTML = "";
  confirm.innerHTML += `<button class="btn btn-warning" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`;
  setTimeout(() => {
    confirm.className = "d-none";
    closeButton.click();
    emptyCart();
    localStorage.clear();
    location.reload();

    alert("Compra realizada con éxito!");
  
  }, 2000);
}
