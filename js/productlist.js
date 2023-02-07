fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product.brandimage);

  const template = document.querySelector("#productTemplate").content;

  const copy = template.cloneNode(true);

  //copy.querySelector("img").src = product.brandimage;

  copy.querySelector("h2").textContent = product.brandname;

  if (product.discount) {
    copy.querySelector("h3").textContent = product.price;
    copy.querySelector("h3").classList.add("tilbud");
    copy.querySelector("h4").textContent = (product.price / 100) * product.discount;
  } else {
    copy.querySelector("h3").textContent = product.price;
    copy.querySelector("h4").textContent = "";
  }

  if (product.soldout) {
    copy.querySelector(".produkt").classList.add("soldout");
  }

  document.querySelector("main").appendChild(copy);
}
