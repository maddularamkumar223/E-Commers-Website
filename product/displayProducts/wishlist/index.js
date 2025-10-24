let main_container = document.querySelector(".container");
let fetchWishlistProducts = async (id) => {
  let response = await fetch(`http://localhost:3000/users/${id}`);
  let userData = await response.json();
  console.log(userData.cart);
  userData.wishlist.map((value) => {
    let productContainer = document.createElement("article");
    let brand = document.createElement("p");
    let price = document.createElement("p");
    let image = document.createElement("img");
    brand.innerHTML = value.brand;
    price.innerHTML = value.price;
    image.src = value.image;
    productContainer.className = "wishlistProduct";
    productContainer.append(image, brand, price);
    main_container.append(productContainer);
  });
};

fetchWishlistProducts(localStorage.getItem("id"));
