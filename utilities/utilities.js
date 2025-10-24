let main_container = document.querySelector(".container");
export let products = async (classification = "") => {
  let response = await fetch("http://localhost:3000/products");
  let finalResponse = await response.json();

  let productData = finalResponse.filter(
    (value) => value.category == classification
  );
  if (classification == "") {
    productDisplay(finalResponse);
    console.log(finalResponse);
  } else {
    productDisplay(productData);
    console.log(productData);
  }
};

let productDisplay = (displayArray) => {
  displayArray.map((value) => {
    let productContainer = document.createElement("article");
    let aside = document.createElement("aside");
    let add_to_cart_button = document.createElement("button");
    let update_to_wishlist_button = document.createElement("button");

    add_to_cart_button.innerHTML = "Add To Cart";
    update_to_wishlist_button.innerHTML = "Wishlist";
    productContainer.innerHTML = `
             <figure> 
                <img src=${value.image}>
             </figure>
            <p>Brand Name: ${value.brand}</p>
            <p>Product name: ${value.productName}</p>
            <p>Description: ${value.description}</p>
            <p>Price: ${value.price}</p>
            <p>Rating: ${value.rating}</p>
    `;

    add_to_cart_button.addEventListener("click", () => {
      if (localStorage.getItem("id")) {
        addToCart(localStorage.getItem("id"), value);
      } else {
        location.href = "../../../../login/index.html";
      }
    });
    update_to_wishlist_button.addEventListener("click", () => {
      console.log("Hited wishlist");
      if (localStorage.getItem("id")) {
        addProductToWishlist(localStorage.getItem("id"), value);
      } else {
        location.href = "../../../../login/index.html";
      }
    });
    aside.append(add_to_cart_button, update_to_wishlist_button);
    productContainer.appendChild(aside);
    main_container.appendChild(productContainer);
  });
};

// ! Add to cart function
async function addToCart(id, product) {
  let personDetails = await fetch(`http://localhost:3000/users/${id}`);
  let person = await personDetails.json();
  let updateCart = [...person.cart, product];
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      cart: updateCart,
    }),
  });
}

// ! Add to wishlist
async function addProductToWishlist(id, product) {
  let personDetails = await fetch(`http://localhost:3000/users/${id}`);
  let person = await personDetails.json();
  let updateCart = [...person.wishlist, product];
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      wishlist: updateCart,
    }),
  });
}

// console.log(localStorage.getItem("id"))
