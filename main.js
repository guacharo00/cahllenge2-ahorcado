"use strict";

const btnIniciar = document.querySelector(".inicio");
const btnAgregarNueva = document.querySelector(".agregar");
const tablero = document.querySelector(".contain");
const palabraContent = document.querySelector(".word");

const palabras = ["PERRO", "AUTO", "GALLINA", "AIRE", "CASA", "NOCHE"];
const pattern = new RegExp("^[A-Z]+$", "i");
let palabraOculta = "";

const dibujarTablero = () => {
  tablero.style.opacity = 1;
};

const crearPalabraSecreta = (palabras) => {
  const indicePalabra = Math.floor(Math.random() * palabras.length);
  const palabraSecreta = palabras[indicePalabra];

  return palabraSecreta;
};

const mostrarGuiones = (palabra) => {
  palabraOculta = "_ ".repeat(palabra.length);
  console.log(palabraOculta);
  palabraContent.textContent = palabraOculta;
};

btnIniciar.addEventListener("click", (e) => {
  e.preventDefault();
});
dibujarTablero();
crearPalabraSecreta(palabras);
mostrarGuiones(crearPalabraSecreta(palabras));

document.addEventListener("keydown", (e) => {
  if (pattern.test(e.key)) console.log(e.key);
});
