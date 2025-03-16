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
      // Guardar el usuario actual en localStorage
      localStorage.setItem("userActual", JSON.stringify(user));

      // Guardar la hora de inicio de sesión
      const loginTime = new Date().getTime(); // Obtener la hora actual en milisegundos
      localStorage.setItem("loginTime", loginTime);

      // Redirigir a Home
      window.location.href = "home.html";
    } else {
      error.textContent = "Email o contraseña incorrectos";
    }

  });

  // Redirección a Register
document.getElementById("registerBtn").addEventListener("click", function () {
  window.location.href = "register.html";
});


// Función para verificar la expiración de la sesión
function checkSessionExpiration() {
  const loginTime = localStorage.getItem("loginTime");
  const currentTime = new Date().getTime();
  const sessionDuration = 60 * 60 * 1000; // 60 minutos en milisegundos

  if (loginTime && currentTime - loginTime > sessionDuration) {
    // La sesión ha expirado
    localStorage.removeItem("userActual"); // Eliminar el usuario de la sesión
    localStorage.removeItem("loginTime"); // Eliminar la hora de inicio de sesión
    window.location.href = "loggin.html"; // Redirigir a la página de login
  }
}

// Verificar la expiración de la sesión cada minuto
setInterval(checkSessionExpiration, 60 * 1000); // 60,000 milisegundos = 1 minuto
