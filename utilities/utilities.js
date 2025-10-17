let container = document.querySelector(".container");
console.log(container);
let products = async () => {
  let response = await fetch("http://localhost:3000/products");
  let finalResponse = await response.json();
  console.log(finalResponse);
  finalResponse.map((value) => {
    let productContainer = document.createElement("article");
    productContainer.innerHTML = `
             <figure> 
                <img src=${value.image}>
             </figure>
            <p>Brand Name: ${value.brand}</p>
            <p>Product name: ${value.productName}</p>
            <p>Description: ${value.description}</p>
            <p>Price: ${value.price}</p>
            <p>Rating: ${value.rating}</p>
           <aside>
                <button>Add To Cart</button>
                <button>WishList</button>
           </aside>
    `;
    container.appendChild(productContainer);
  });
};
products();
