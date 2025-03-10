import { User } from "./User";

let userMaster = new User(
  "Jonathan",
  "López",
  "lsjleo12@gmail.com",
  "11-22-1993",
  "leo12",
  "leo.1122"
);

console.log(userMaster);
let users = [userMaster];
console.log("********************************");

// console.log(userMaster.firstName);
// userMaster.firstName = "Leonardo";
// console.log(userMaster);
// console.log(userMaster.firstName);

//Validaciones y redireccion a "HOME"
document
  .getElementById("updateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let fistName = document.getElementById("editFirstName").value;
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
    }
    else if (password === confirmPassword) {
      error.textContent = "Las contraseñas coinciden";
      error.style.color = "green";

      // CAMBIAR DATOS
      userMaster.firstName = fistName;
      userMaster.lastName = lastName;
      userMaster.birthDate = birthDate;
      userMaster.password = password;

      console.log(users);

      // window.location.href = "home_prueba.html";
    }

    if (fistName.length < 3) {
      error.textContent =
        "Nombre y apellido deben tener por lo menos 2 caracteres";
      error.style.color = "red";
    }

    if (lastName.length < 3) {
      error.textContent =
        "Nombre y apellido deben tener por lo menos 2 caracteres";
      error.style.color = "red";
    }
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
