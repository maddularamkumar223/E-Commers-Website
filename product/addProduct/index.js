let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let brand = formData.get("brandName");
  let description = formData.get("description");
  let productName = formData.get("productName");
  let price = formData.get("price");
  let rating = formData.get("rating");
  let image = formData.get("image");
  let category = formData.get("category"); 
  let reader = new FileReader();
  reader.onload = (event) => {
    let imageUrl = event.target.result;
    let product = {
      brand: brand,
      description: description,
      productName: productName,
      price: price,
      rating: rating,
      image: imageUrl,
      category: category.toLocaleLowerCase(),
    };
    addProduct(product);
  };
  reader.readAsDataURL(image);
});
let addProduct = async (product) => {
  await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
};
