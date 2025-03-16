import { Flat } from "./Flat";

// Array para almacenar las imágenes cargadas
let images = [];

// Evento para cargar imágenes
document.getElementById("images").addEventListener("change", function (event) {
  const files = event.target.files;

  if (files.length > 0) {
    images = []; // Reiniciar el array de imágenes
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = function (e) {
        images.push(e.target.result); // Guardar la imagen en base64
        console.log("Imagen cargada:", file.name);
      };

      reader.readAsDataURL(file); // Convertir la imagen a base64
    }
  } else {
    alert("Por favor, selecciona al menos una imagen.");
  }
});

// Validaciones y redirección a "ALL FLATS"
document
  .getElementById("newFlatForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let city = document.getElementById("city").value;
    let streetName = document.getElementById("streetName").value;
    let streetNumber = document.getElementById("streetNumber").value;
    let areaSize = document.getElementById("areaSize").value;
    let yearBuilt = document.getElementById("yearBuilt").value;
    let rentPrice = document.getElementById("rentPrice").value;
    let dateAvailable = document.getElementById("dateAvailable").value;
    // let hasAC = document.querySelector('input[name="hasAC"]:checked').value;
    let hasAC =
      document.querySelector('input[name="hasAC"]:checked').value === "true";
    let error = document.getElementById("error");

    // Validar que los campos de texto tengan al menos 3 caracteres
    if (streetName.length < 3 || city.length < 3) {
      error.textContent =
        "Ciudad y Calle deben tener por lo menos 3 caracteres";
      error.style.color = "red";
      return; // Detener la ejecución si no se cumplen las validaciones
    }

    // Validar que se hayan cargado al menos una imagen
    if (images.length === 0) {
      error.textContent = "Debes cargar al menos una imagen.";
      error.style.color = "red";
      return; // Detener la ejecución si no se cargan imágenes
    }

    // Si todo está correcto, guardar el flat
    error.textContent = "Datos Correctos";
    error.style.color = "green";

    // Crear el nuevo flat
    let newFlat = new Flat(
      city,
      streetName,
      parseFloat(streetNumber),
      parseFloat(areaSize),
      parseFloat(yearBuilt),
      parseFloat(rentPrice),
      dateAvailable,
      hasAC,
      true, // Marcar como favorito
      images // Guardar las imágenes
    );

    console.log(newFlat);

    // Obtener la lista actual de flats o inicializar un array vacío
    let flats = JSON.parse(localStorage.getItem("flatsList")) || [];
    flats.push(newFlat); // Añadir el nuevo flat
    localStorage.setItem("flatsList", JSON.stringify(flats)); // Guardar en localStorage

    // Redirigir a ALL FLATS
    window.location.href = "allFlats.html";
  });

  // Evento para el botón de "Log out"
document.getElementById("logout-button").addEventListener("click", () => {
  localStorage.removeItem("userActual"); // Eliminar el usuario de la sesión
  window.location.href = "loggin.html"; // Redirigir a la página de login
});

