const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    listProducts(data);
  });

function listProducts(data) {
  data.forEach(showProducts);
}

function showProducts(product) {
  console.log(product);
  const template = document.querySelector("#theList").content;
  const copy = template.cloneNode(true);
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = `Price: ${product.price},00 DKK`;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector(
      ".price"
    ).textContent = `Price: ${product.price},00 DKK / -${product.discount}%`;
  }
  copy.querySelector("a").href = `product.html?id=${product.id}`;
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
