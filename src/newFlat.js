import { Flat } from "./Flat";

const flatMaster = new Flat(
  "Quito",
  "Calle N",
  395,
  100,
  1995,
  30,
  "2025-11-03",
  "true",
  true,
);


let flats = JSON.parse	(localStorage.getItem("flatsList")) || [flatMaster];
console.log(flats);
console.log("********************************");

//Validaciones y redireccion a "HOME"
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
    let hasAC = document.querySelector('input[name="hasAC"]:checked').value;
    
    // let no = document.getElementById("no").value;
    
    let error = document.getElementById("error");

    if (streetName.length < 3 && city.length < 3) {
      error.textContent = "Ciudad y Calle deben tener por lo menos 3 caracteres";
      error.style.color = "red";
    } else if (streetName.length >= 3 && city.length >= 3) {
      error.textContent ="Datos Correctos";
      error.style.color = "green";
      //GUARDAR FLATS
      const newFlat = () => {
        let newFlat = new Flat(
          city,
          streetName,
          parseFloat(streetNumber),
          parseFloat(areaSize), // Convertir a número
          parseFloat(yearBuilt), // Convertir a número
          parseFloat(rentPrice), // Convertir a número
          dateAvailable,
          hasAC,
          true
        );

        console.log(newFlat);
        flats = [...flats, newFlat];
        console.log(flats);
        localStorage.setItem("flatsList", JSON.stringify(flats));
      };

      newFlat();

      window.location.href = "allFlats.html";
      console.log("Redireccionar a ALL FLATS");
    }
  });
