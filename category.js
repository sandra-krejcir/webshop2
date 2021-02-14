const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    listBrands(data);
  });

function listBrands(data) {
  data.forEach(showBrands);
}
function showBrands(product) {
  console.log(product);
  const template = document.querySelector("#brands").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".link").textContent = product.brandname;
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
