// write a method to fetch products (fetch API/axios)
// console.log(products)
async function GetProducts() {
  let res = await fetch("http://localhost:3000/products");
  let products = await res.json();
  let productRow = document.querySelector(".row");
  for (const product of products) {
    productRow.innerHTML += DisplayProductCard(product);
  }
}

function DisplayProductCard(product) {
  let productCard = `
  <div class="col-md-3 my-1">
    <div class="card">
  <img src=${product.imageUrl} width="200px" height="150px" class="card-img-top" alt=${product.title}/>
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">₹.${product.price}</p>
    <p class="card-text">${product.rating}</p>

    <button  class="btn btn-primary">${product.likes}</button>
  </div>
</div>
</div>
    `;
  return productCard;
}

document.addEventListener("DOMContentLoaded", GetProducts);
