let container = document.querySelector("main");
let products = async () => {
  let response = await fetch("http://localhost:3000/products");
  let products = await response.json();

  products.map((value) => {
    let img = document.createElement("img");

    img.src = value.image;

    container.append(img);
  });
};

products()
