let main_container = document.querySelector(".container");
let fetchCartProducts = async (id) => {
  let totalPrice = 0;
  let response = await fetch(`http://localhost:3000/users/${id}`);
  let userData = await response.json();
  console.log(userData.cart);
  userData.cart.map((value) => {
    let productContainer = document.createElement("article");
    let brand = document.createElement("p");
    let price = document.createElement("p");
    let image = document.createElement("img");
    brand.innerHTML = value.brand;
    price.innerHTML = value.price;
    image.src = value.image;
    productContainer.className = "cartProduct";
    productContainer.append(image, brand, price);
    main_container.append(productContainer);
    totalPrice += parseInt(value.price);
  });

  let totalPriceDisplay = document.createElement("h1");
  console.log(totalPrice);

  totalPriceDisplay.innerHTML = `Total Cart Value : ${totalPrice}`;
  main_container.append(totalPriceDisplay);
};

fetchCartProducts(localStorage.getItem("id"));
