let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  let formData = new FormData(form);
  let passwordCheck = "";
  if (formData.get("password") == formData.get("confirmPassword")) {
    passwordCheck = formData.get("password");
  } else {
    alert("Password mismatch");
  }

  let user = {
    name: formData.get("name"),
    username: formData.get("email"),
    password: passwordCheck,
    address: formData.get("address"),
    gender: formData.get("gender"),
    dob: formData.get("dob"),
    contact: formData.get("contact"),
    cart: [],
    wishlist: [],
    role:'user'
  };
  addUser(user);
});

let addUser = async (data) => {
  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
