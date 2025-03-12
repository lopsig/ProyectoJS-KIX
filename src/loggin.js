const users = JSON.parse(localStorage.getItem("usersList"));
console.log(users);

// const user = users.find((user) => user.email === "lsjleo12@gmail.com");
// console.log(user);

// const password = users.find((user) => user.password === "leo.95");
// console.log(password);

// if (
//   user &&
//   user.email === "lsjleo12@gmail.com" &&
//   user.password === "leo.1122"
// ) {
//   console.log("Esta correcto");
// } else {
//   console.log("NO ESTA BIEN");
// }

///////////////////////////////////////////////
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // Usuarios registrados
    const users = JSON.parse(localStorage.getItem("usersList"));
    console.log(users);

    //
    const user = users.find((user) => user.email === email);
    console.log(user);

    if (user && user.email === email && user.password === password) {
      window.location.href = "home_prueba.html";
      localStorage.setItem("userActual", JSON.stringify(user));
      
    } else {
      error.textContent = "Email o contraseña incorrectos";
    }


    // if (user) {
    //   localStorage.setItem("sessionActive", "true");
    //   localStorage.setItem("sessionTime", Date.now());
    //   window.location.href = "home.html"; // Redirige a home después del login
    // } else {
    //   document.getElementById("errorMessage").textContent =
    //     "Email o contraseña incorrectos";
    // }
  });

// Redirección a Register
document.getElementById("registerBtn").addEventListener("click", function () {
  window.location.href = "register.html";
});
