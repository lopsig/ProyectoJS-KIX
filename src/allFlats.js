let flats = JSON.parse(localStorage.getItem("flatsList")) || [];

// Cargar el nombre del usuario desde el localStorage
let user = JSON.parse(localStorage.getItem("userActual"));
document.getElementById(
  "user-greeting"
).textContent = `Hola, ${user.firstName} ${user.lastName}`;

// Función para renderizar la tabla
const renderTable = (data) => {
  const tbody = document.querySelector("#flats-table tbody");
  tbody.innerHTML = ""; // Limpiar la tabla

  data.forEach((flat) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${flat._city}</td>
      <td>${flat._streetName}</td>
      <td>${flat._streetNumber}</td>
      <td>${flat._areaSize}</td>
      <td>${flat._yearBuilt}</td>
      <td>$${flat._rentPrice}</td>
      <td>${flat._dateAvailable}</td>
      <td>${flat._hasAC ? "Sí" : "No"}</td>
      <td>
        <button class="favorite-btn" data-id="${flat._city}-${
      flat._streetName
    }">
          ${flat._favourite ? "⭐" : "✩"}
        </button>
      </td>
      <td>
        <button class="show-images-btn" data-id="${flat._city}-${
      flat._streetName
    }">
          Mostrar Imágenes
        </button>
      </td>
    `;

    tbody.appendChild(row);
  });

  // Agregar eventos a los botones de favoritos
  document.querySelectorAll(".favorite-btn").forEach((button) => {
    button.addEventListener("click", toggleFavorite);
  });

  // Agregar eventos a los botones de "Mostrar Imágenes"
  document.querySelectorAll(".show-images-btn").forEach((button) => {
    button.addEventListener("click", showImages);
  });
}

// Función para alternar favoritos
const toggleFavorite = (event) => {
  const id = event.target.getAttribute("data-id");
  const flat = flats.find((f) => `${f._city}-${f._streetName}` === id);

  if (flat) {
    flat._favourite = !flat._favourite; // Alternar estado
    localStorage.setItem("flatsList", JSON.stringify(flats)); // Guardar cambios en localStorage
    renderTable(flats); // Volver a renderizar la tabla
  }
}

// Función para mostrar imágenes en el modal
const showImages=(event) => {
  const id = event.target.getAttribute("data-id");
  const flat = flats.find((f) => `${f._city}-${f._streetName}` === id);

  if (flat && flat._images && flat._images.length > 0) {
    const modal = document.getElementById("image-modal");
    const modalImages = document.getElementById("modal-images");

    // Limpiar el contenido previo del modal
    modalImages.innerHTML = "";

    // Mostrar las imágenes en el modal
    flat._images.forEach((image) => {
      const img = document.createElement("img");
      img.src = image;
      img.alt = `Imagen de ${flat._city}, ${flat._streetName}`;
      img.style.width = "100%"; // Ajustar el tamaño de la imagen
      img.style.maxWidth = "200px"; // Limitar el ancho máximo
      img.style.margin = "10px"; // Añadir margen
      img.style.borderRadius = "8px"; // Bordes redondeados
      modalImages.appendChild(img);
    });

    // Mostrar el modal
    modal.style.display = "block";
  } else {
    alert("No hay imágenes para este departamento.");
  }
}

// Cerrar el modal al hacer clic en la "X"
document.querySelector(".close-modal").addEventListener("click", () => {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
  const modal = document.getElementById("image-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Función para filtrar los flats
const filterFlats=() =>{
  const city = document.getElementById("city").value.toLowerCase();
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
  const maxPrice =
    parseFloat(document.getElementById("max-price").value) || Infinity;
  const minArea = parseFloat(document.getElementById("min-area").value) || 0;
  const maxArea =
    parseFloat(document.getElementById("max-area").value) || Infinity;

  const filtered = flats.filter((flat) => {
    return (
      flat._city.toLowerCase().includes(city) &&
      flat._rentPrice >= minPrice &&
      flat._rentPrice <= maxPrice &&
      flat._areaSize >= minArea &&
      flat._areaSize <= maxArea
    );
  });

  renderTable(filtered);
}

// Función para ordenar por ciudad
const sortByCity = ()  => {
  flats.sort((a, b) => a._city.localeCompare(b._city));
  renderTable(flats);
}

// Función para ordenar por precio
const sortByPrice=()=> {
  flats.sort((a, b) => a._rentPrice - b._rentPrice);
  renderTable(flats);
}

// Función para ordenar por tamaño del área
const sortByArea= ()=> {
  flats.sort((a, b) => a._areaSize - b._areaSize);
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

// Evento para el botón de "Log out"
document.getElementById("logout-button").addEventListener("click", () => {
  localStorage.removeItem("userActual"); // Eliminar el usuario de la sesión
  window.location.href = "loggin.html"; // Redirigir a la página de login
});
