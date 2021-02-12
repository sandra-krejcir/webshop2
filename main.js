const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")
const url = "https://kea-alt-del.dk/t7/api/products/" + id;
fetch(url)
.then((res) -> res.json())
.then((data) -> listProducts(data))

function listProducts(product) {
    console.log(product);
    const template = document.querySelector("#theList").content;
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector("a").href = `product.html?id=${product.id}`;
    copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector(".price").textContent = product.price;
    const parent = document.querySelector("main");
    parent.appendChild(copy);
}