let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  let formData = new FormData(form);
  checking(formData.get("email"), formData.get("password"));
});

let checking = async (username, password) => {
  let userData = await fetch("http://localhost:3000/users");
  let users = await userData.json();
  let filterData = users.filter((value) => value.username == username);
  console.log(filterData);

  if (filterData.length == 1) {
    if (filterData[0].password == password) {
      console.log("Login done");
      alert("Login done");
      localStorage.setItem("id", filterData[0].id);
      location.href = "../homepage/index.html";
    } else {
      alert("Password incorrect");
      console.log("password incorrect");
    }
  } else {
    alert("User not found");
    console.log("user not found");
  }
};
