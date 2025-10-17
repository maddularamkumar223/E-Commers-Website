let navbar = document.createElement("nav");
navbar.className = "navbar";
let logo = document.createElement("section");
let profile = document.createElement("section");
let container = document.querySelector(".container");

// ! Logo blok

let logoImage = document.createElement("img");
let imageA = document.createElement("a");
imageA.innerHTML = "Home";
imageA.href = "../../../homepage/index.html";
imageA.append(logoImage);
logo.appendChild(imageA);

// ! Navigation Block

let navigation = document.createElement("section");
let navigationUl = document.createElement("ul");
let navigationData = [
  {
    category: "Electronics",
    path: "../../../product/displayProducts/electronics/electronics.html",
  },
  {
    category: "Men",
    path: "../../../product/displayProducts/men/men.html",
  },
  {
    category: "Women",
    path: "../../../product/displayProducts/women/women.html",
  },
  {
    category: "Kids",
    path: "../../../product/displayProducts/kids/kids.html",
  },
  {
    category: "Clothes",
    path: "../../../product/displayProducts/clothes/clothes.html",
  },
  {
    category: "Beauty",
    path: "../../../product/displayProducts/beauty/beauty.html",
  },
  {
    category: "Books",
    path: "../../../product/displayProducts/books/books.html",
  },
  {
    category: "Home Appliances",
    path: "#",
  },
];

navigationData.forEach((value) => {
  addFunction(value.category, value.path, navigationUl);
});
navigation.appendChild(navigationUl);

// ! Profile

let profileUl = document.createElement("ul");
let profileData = [
  {
    symbol: '<i class="fa-solid fa-heart"></i>',
    class: "wishlist",
    path: "../../../product/displayProducts/wishlist/wishlist.html",
  },
  {
    symbol: '<i class="fa-solid fa-bag-shopping"></i>',
    class: "cart",
    path: "../../../product/displayProducts/cart/cart.html",
  },
  {
    symbol: '<i class="fa-solid fa-user"></i>',
    class: "ls",
    path: "#",
  },
  {
    symbol: '<i class="fa-solid fa-plus"></i>',
    path: "../../../product/addProduct/index.html",
    class: "addProduct",
  },
];
profileData.forEach((data) => {
  addFunction(data.symbol, data.path, profileUl, data.class);
});
profile.appendChild(profileUl);

// ! Append the values to the navbar
navbar.append(logo, navigation, profile);
container.before(navbar);

// ! Function to add the data
function addFunction(name, path, addElement, className) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerHTML = name;
  a.href = path;
  li.classList = className;
  li.appendChild(a);
  addElement.appendChild(li);
}
