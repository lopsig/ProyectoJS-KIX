// home.js

// Cargar flats desde el localStorage
let flats = JSON.parse(localStorage.getItem("flatsList")) || [];

// Cargar el nombre del usuario desde el localStorage
let user = JSON.parse(localStorage.getItem("userActual"));
document.getElementById(
  "user-greeting"
).textContent = `Hola, ${user.firstName} ${user.lastName}`;

// Función para renderizar la tabla de favoritos
function renderFavoritesTable() {
  const tbody = document.querySelector("#favorites-table tbody");
  tbody.innerHTML = ""; // Limpiar la tabla

  // Filtrar flats favoritos
  const favorites = flats.filter((flat) => flat.favourite);

  favorites.forEach((flat) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${flat.city}</td>
      <td>${flat.streetName}</td>
      <td>${flat.streetNumber}</td>
      <td>${flat.areaSize}</td>
      <td>${flat.yearBuilt}</td>
      <td>$${flat.rentPrice}</td>
      <td>${flat.dateAvailable}</td>
      <td>${flat.hasAC ? "Sí" : "No"}</td>
      <td>
        <button class="remove-btn" data-id="${flat.city}-${
      flat.streetName
    }">Remove</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  // Agregar eventos a los botones de "Remove"
  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", removeFavorite);
  });
}

// Función para eliminar un flat de favoritos
function removeFavorite(event) {
  const id = event.target.getAttribute("data-id");
  const flat = flats.find((f) => `${f.city}-${f.streetName}` === id);

  if (flat) {
    flat.favourite = false; // Marcar como no favorito
    localStorage.setItem("flatsList", JSON.stringify(flats)); // Guardar cambios en localStorage
    renderFavoritesTable(); // Volver a renderizar la tabla
  }
}

// Evento para el botón de "Log out"
document.getElementById("logout-button").addEventListener("click", () => {
  localStorage.removeItem("userActual"); // Eliminar el usuario de la sesión
  window.location.href = "loggin.html"; // Redirigir a la página de login
});

// Renderizar la tabla inicial
renderFavoritesTable();
