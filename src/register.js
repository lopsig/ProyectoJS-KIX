import { User } from "./User";

const userMaster = new User(
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

//Validaciones y redireccion a "HOME"
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let fistName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let birthDate = document.getElementById("birthDate").value;
    let userName = document.getElementById("userName").value;
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

      //GUARDAR USUARIOS
      const register = () => {
        let newUser = new User(
          fistName,
          lastName,
          email,
          birthDate,
          userName,
          password
        );
        users = [...users, newUser];
        console.log(newUser);
      };
      register();
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

