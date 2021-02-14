const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url = "https://kea-alt-del.dk/t7/api/products/" + id;
fetch(url)
  .then((res) => res.json())
  .then((data) => viewProduct(data));

function viewProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brandName").textContent =
    ">" + product.brandname;
  document.querySelector(".breadcrumbs .prodName").textContent =
    ">" + product.productdisplayname;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
  document.querySelector("h3").textContent = product.productdisplayname;
  document.querySelector(
    ".sticker"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  document.querySelector(".prod").textContent = product.productdisplayname;
  document.querySelector(
    ".season"
  ).textContent = `${product.season}, ${product.productionyear}`;
  document.querySelector(".ID").textContent = product.id;
}
