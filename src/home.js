const btnsFavorite = document.querySelectorAll('.favorite');
const products = document.querySelectorAll('.card-product');
const counterFavorites = document.querySelector('.counter-favorite');

const containerListFavorites = document.querySelector(
  '.container-list-favorites'
);
const listFavorites = document.querySelector('.list-favorites');

let favorites = [];

const updateFavoritesInLocalStorage = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem('favorites');

  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites);
    showHTML();
  }
};

const toggleFavorite = product => {
  const index = favorites.findIndex(
    element => element.id === product.id
  );

  if (index > -1) {
    favorites.splice(index, 1);
    updateFavoritesInLocalStorage();
  } else {
    favorites.push(product);
    updateFavoritesInLocalStorage();
  }
};

const updateFavoriteMenu = () => {
  listFavorites.innerHTML = '';

  favorites.forEach(fav => {
    // Crear un nuevo elemento 'div' para el producto favorito
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('card-favorite');

    // Crear y añadir el título del producto
    const titleElement = document.createElement('p');
    titleElement.classList.add('title');
    titleElement.textContent = fav.title;
    favoriteCard.appendChild(titleElement);

    // Crear y añadir el precio del producto
    const priceElement = document.createElement('p');
    priceElement.textContent = fav.price;
    favoriteCard.appendChild(priceElement);

    // Añadir el producto favorito a la lista
    listFavorites.appendChild(favoriteCard);
  });
};


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal("header form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".experience__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".experience__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".experience__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".experience__stats", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".subscribe .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe form", {
  ...scrollRevealOption,
  delay: 500,
});