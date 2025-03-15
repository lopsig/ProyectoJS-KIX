
let flats = JSON.parse(localStorage.getItem("flatsList")) || [];

// Función para renderizar la tabla
function renderTable(data) {
  const tbody = document.querySelector("#flats-table tbody");
  tbody.innerHTML = ""; // Limpiar la tabla

  data.forEach((flat) => {
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
        <button class="favorite-btn" data-id="${flat.city}-${flat.streetName}">
          ${flat.favourite ? "⭐" : "✩"}
        </button>
      </td>
    `;

    tbody.appendChild(row);
  });

  // Agregar eventos a los botones de favoritos
  document.querySelectorAll(".favorite-btn").forEach((button) => {
    button.addEventListener("click", toggleFavorite);
  });
}

// Función para alternar favoritos
function toggleFavorite(event) {
  const id = event.target.getAttribute("data-id");
  const flat = flats.find((f) => `${f.city}-${f.streetName}` === id);

if (flat) {
  flat.favourite = !flat.favourite; // Alternar estado
  localStorage.setItem("flatsList", JSON.stringify(flats)); // Guardar cambios en localStorage
  renderTable(flats); // Volver a renderizar la tabla
}
}

// Función para filtrar los flats
function filterFlats() {
  const city = document.getElementById("city").value.toLowerCase();
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
  const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;
  const minArea = parseFloat(document.getElementById("min-area").value) || 0;
  const maxArea = parseFloat(document.getElementById("max-area").value) || Infinity;

  const filtered = flats.filter((flat) => {
    return (
      flat.city.toLowerCase().includes(city) &&
      flat.rentPrice >= minPrice &&
      flat.rentPrice <= maxPrice &&
      flat.area >= minArea &&
      flat.area <= maxArea
    );
  });

  renderTable(filtered);
}

// Función para ordenar por ciudad
function sortByCity() {
  flats.sort((a, b) => a.city.localeCompare(b.city));
  renderTable(flats);
}

// Función para ordenar por precio
function sortByPrice() {
  flats.sort((a, b) => a.rentPrice - b.rentPrice);
  renderTable(flats);
}

// Función para ordenar por tamaño del área
function sortByArea() {
  flats.sort((a, b) => a.area - b.areaSize);
  renderTable(flats);
}

// Eventos para los botones de ordenamiento
document.getElementById("sort-city").addEventListener("click", sortByCity);
document.getElementById("sort-price").addEventListener("click", sortByPrice);
document.getElementById("sort-area").addEventListener("click", sortByArea);

// Evento para el botón de filtrar
document.getElementById("filter-button").addEventListener("click", filterFlats);

// Renderizar la tabla inicial
renderTable(flats);