fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then((responce) => responce.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".description h3").textContent = product.brandname;
  document.querySelector(".description p").innerHTML = product.description;
  document.querySelector(".description .pris").textContent = product.price + ",- kr";
}
