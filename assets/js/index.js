import { Leon } from "./Leon.js";
import { Lobo } from "./Lobo.js";
import { Oso } from "./Oso.js";
import { Aguila } from "./Aguila.js";
import { Serpiente } from "./Serpiente.js";

let animales = [];

(async () => {
  try {
    const resp = await fetch("animales.json");
    const data = await resp.json();
    data.animales.forEach((elem) => {
      switch (elem.name) {
        case "Leon":
          animales.push(new Leon(elem.name, elem.imagen, elem.sonido));
          break;
        case "Lobo":
          animales.push(new Lobo(elem.name, elem.imagen, elem.sonido));
          break;
        case "Oso":
          animales.push(new Oso(elem.name, elem.imagen, elem.sonido));
          break;
        case "Serpiente":
          animales.push(new Serpiente(elem.name, elem.imagen, elem.sonido));
          break;
        case "Aguila":
          animales.push(new Aguila(elem.name, elem.imagen, elem.sonido));
          break;
      }
    });
  } catch (error) {
    console.log(error);
  }
})();

const animals = document.getElementById("animal");
const register = document.getElementById("btnRegistrar");
const age = document.getElementById("edad");
const comments = document.getElementById("comentarios");
const pre = document.querySelector("#preview");
const note = document.getElementById("Animales");

animals.addEventListener("change", () => {
  let seleccion = animals.value;
  let seleccionIndex = animales.findIndex(
    (elem) => elem.getNombre() == seleccion
  );

  pre.innerHTML = `<img src="assets/imgs/${animales[
    seleccionIndex
  ].getImg()}" style="height: 15rem" class="mx-auto d-block" >`;
});

register.addEventListener("click", () => {
  let animalito = animals.value;
  let animalitoIndex = animales.findIndex(
    (elem) => elem.getNombre() == animalito
  );
  if (
    age.value == "Seleccione un rango de años" ||
    comments.value.trim() == "" ||
    animals.value == "Seleccione un animal"
  ) {
    alert("Debe completar todos los campos");
  } else if (animales[animalitoIndex]._comentarios == "") {
    animales[animalitoIndex]._edad = age.value;
    animales[animalitoIndex]._comentarios = comments.value;
    note.innerHTML += `<div  class="card border-info mb-3" style="max-width: 18rem;">
    <div><img id="modalClick" src="assets/imgs/${animales[
      animalitoIndex
    ].getImg()}" style="height:15rem" class="${animalito} mx-auto d-block" data-toggle="modal" data-target="#exampleModal"><i class="fa-solid fa-volume-high"></i></div>`;

    // Resetear el formulario después de guardar el animal
    age.value = "Seleccione un rango de años";
    comments.value = "";
    animals.value = "Seleccione un animal";
    document.querySelector("#preview").innerHTML = "";
  } else {
    alert("Animal ya registrado");
  }
});

note.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.id === "modalClick") {
    cargarModal(event);
  }
});

const cargarModal = (event) => {
  const clickedImage = event.target;
  const animalClass = clickedImage.classList[0];
  const animalIndex = animales.findIndex(
    (elem) => elem.getNombre() === animalClass
  );
  document.querySelector(
    ".modal-body"
  ).innerHTML = `<img src="assets/imgs/${animales[
    animalIndex
  ].getImg()}" style="height:200px" class="mx-auto d-block">
  <p class="text-white text-center">${animales[animalIndex].getEdad()}</p>
  <p class="text-white text-center">Comentarios</p>
  <p class="text-white text-center">${animales[animalIndex]._comentarios}</p>`;
  document.querySelector("audio").src = `assets/sounds/${animales[
    animalIndex
  ].getSonido()}`;
  document.querySelector("audio").play();
};
