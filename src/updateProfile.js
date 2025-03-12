//Usuario en sesion actual
let userActual = JSON.parse(localStorage.getItem("userActual"));
console.log(userActual);

//Datos Actuales del Usuario
document.getElementById(
  "editFirstName"
).placeholder = `Nombre Actual: ${userActual.firstName}`;
document.getElementById(
  "editLastName"
).placeholder = `Apellido Actual: ${userActual.lastName}`;

//Todos los usuarios registrados
let allUsers = JSON.parse(localStorage.getItem("usersList"));
console.log(allUsers);

// Email de sesion actual
let emailUserActual = userActual.email;
console.log(emailUserActual);
console.log(userActual.firstName);

//Datos de usuario actual en la lista de registrados
let userInLocalStorage = allUsers.find(
  (user) => user.email === emailUserActual
);
console.log(userInLocalStorage);
// console.log(userInLocalStorage.firstName);
// userInLocalStorage.firstName = "Jonathan"
// console.log(userInLocalStorage.firstName);

//Validaciones y redireccion a "HOME"
document
  .getElementById("updateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("editFirstName").value;
    let lastName = document.getElementById("editLastName").value;
    // let email = document.getElementById("editEmail").value;
    let birthDate = document.getElementById("editBirthDate").value;
    // let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("error");

    //Contraseña

    if (password !== confirmPassword) {
      error.textContent = "Las contraseñas no coinciden";
      error.style.color = "red";
    } else if (password.length < 6) {
      error.textContent = "Contraseña Inválida";
    } else if (password === confirmPassword) {
      error.textContent = "Las contraseñas coinciden";
      error.style.color = "green";
      window.location.href = "home_prueba.html";
    }

    if (userInLocalStorage && userInLocalStorage.email === emailUserActual) {
      // CAMBIAR DATOS

      userInLocalStorage.firstName = firstName;
      userInLocalStorage.lastName = lastName;
      userInLocalStorage.birthDate = birthDate;
      userInLocalStorage.password = password;

      localStorage.setItem("usersList", JSON.stringify(allUsers));
    }

    if (firstName.length < 3) {
      error.textContent =
        "Nombre y apellido deben tener por lo menos 2 caracteres";
      error.style.color = "red";
    }

    if (lastName.length < 3) {
      error.textContent =
        "Nombre y apellido deben tener por lo menos 2 caracteres";
      error.style.color = "red";
    }

    // Actualizar userActual
    userActual.firstName = firstName;
    userActual.lastName = lastName;
    userActual.birthDate = birthDate;
    userActual.password = password;

    // Guardar userActual actualizado en el Local Storage
    localStorage.setItem("userActual", JSON.stringify(userActual));
  });

//Alertas para validación de contraseña
const passwordInput = document.getElementById("password");
const length = document.getElementById("length");
const letter = document.getElementById("letter");
const number = document.getElementById("number");
const special = document.getElementById("special");

passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;

  // Verificar longitud
  if (password.length >= 6) {
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
  }

  // Verificar si contiene letras
  if (/[a-zA-Z]/.test(password)) {
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
  }

  // Verificar si contiene números
  if (/\d/.test(password)) {
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
  }

  // Verificar si contiene caracteres especiales
  if (/[!@#$%^&*.]/.test(password)) {
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
  }
});
