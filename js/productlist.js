const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

fetch("https://kea-alt-del.dk/t7/api/products?season=" + season)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  const template = document.querySelector("#productTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";

  copy.querySelector("h2").textContent = product.brandname;

  if (product.discount) {
    copy.querySelector("h3").textContent = product.price;
    copy.querySelector("h3").classList.add("tilbud");
    let pris = (product.price / 100) * (100 - product.discount);
    let prisAfrund = Math.round(pris);
    copy.querySelector("h4").textContent = prisAfrund + " - " + " " + product.discount + "%";
  } else {
    copy.querySelector("h3").textContent = product.price;
    copy.querySelector("h4").textContent = "";
  }

  if (product.soldout) {
    copy.querySelector(".produkt").classList.add("soldout");
  }

  copy.querySelector(".link-site").setAttribute("href", `product.html?id=${product.id}`);

  document.querySelector(".produkt_container").appendChild(copy);
}
