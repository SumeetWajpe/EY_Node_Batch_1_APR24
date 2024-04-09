// write a method to fetch products (fetch API/axios)
// console.log(products)
async function GetProducts() {
  let res = await fetch("http://localhost:3000/products");
  let products = await res.json();
  console.log(products);
}

document.addEventListener("DOMContentLoaded", GetProducts);
