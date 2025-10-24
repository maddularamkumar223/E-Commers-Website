let navbar = document.createElement("nav");
navbar.className = "navbar row";
let logo = document.createElement("section");
let profile = document.createElement("section");
let navigation = document.createElement("section");
let bars = document.createElement("section");
let container = document.querySelector(".container");

bars.innerHTML = '<i class="fa-solid fa-bars"></i>';
logo.className = "col-md-2 col-lg-3 col-6";
profile.className = "d-none d-lg-block col-3";
navigation.className = "d-none d-md-block col-6 col-md-7 col-lg-6";
bars.className = "d-sm-block d-lg-none col-md-3 col-6";

// ! Logo block

let logoImage = document.createElement("img");
let imageA = document.createElement("a");
imageA.innerHTML = "Home";
imageA.href = "../../../homepage/index.html";
imageA.append(logoImage);
logo.appendChild(imageA);

// ! Navigation Block

let navigationUl = document.createElement("ul");

navigationUl.className = "d-flex justify-content-evenly w-100";
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
    category: "Beauty",
    path: "../../../product/displayProducts/beauty/beauty.html",
  },
  {
    category: "Books",
    path: "../../../product/displayProducts/books/books.html",
  },
  {
    category: "Home",
    path: "#",
  },
];

navigationData.forEach((value) => {
  addFunction(value.category, value.path, navigationUl);
});
navigation.appendChild(navigationUl);

// ! Profile

let profileUl = document.createElement("ul");
profileUl.className = "d-flex justify-content-evenly w-100";
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
    path: "../login/index.html",
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
navbar.append(logo, navigation, profile, bars);
container.before(navbar);

// ! Function to add the data
function addFunction(name, path, addElement, classValue) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerHTML = name;
  a.href = path;
  if (classValue) {
    li.className = classValue;
  }
  li.appendChild(a);
  // if (localStorage.getItem("role") == "admin" && classValue == "addProduct") {
  //   addElement.appendChild(li);
  // } else {
  // }
  addElement.appendChild(li);
}
