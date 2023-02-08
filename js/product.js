const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((responce) => responce.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".description h3").textContent = product.brandname;
  document.querySelector(".description p").innerHTML = product.description;

  document.querySelector("img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";

  document.querySelector(".back").setAttribute("href", `list.html?season=${product.season}`);

  if (product.discount === null) {
    document.querySelector("h4").textContent = " ";
    document.querySelector(".pris").textContent = product.price + ",- kr";
  } else {
    document.querySelector(".description .pris").textContent = product.price + ",- kr";
    document.querySelector(".pris").classList.add("tilbud");
    let pris = (product.price / 100) * (100 - product.discount);
    let prisAfrund = Math.round(pris);
    document.querySelector("h4").textContent = prisAfrund + ",- kr" + " " + product.discount + "%";
  }
}
