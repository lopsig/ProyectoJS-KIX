const users = JSON.parse(localStorage.getItem("usersList"));
console.log(users);


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

    //Llamar al objeto
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
