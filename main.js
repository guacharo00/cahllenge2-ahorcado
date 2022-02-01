"use strict";

const btnIniciar = document.querySelector(".inicio");
const btnAgregarNueva = document.querySelector(".agregar");
const tablero = document.querySelector(".contain");
const palabraContent = document.querySelector(".word");
const palabrasIncorrectasContent = document.querySelector(".letters");

const palabras = ["PERRO", "AUTO", "GALLINA", "AIRE", "CASA", "NOCHE"];
const pattern = new RegExp("^[A-Z]+$", "i");
const palabraIncorrectaArr = [];
let palabraOculta = "";
let letrasIncorrectas = [];
let palabraRandom = "";

// Funcion para dibujar tablero
const dibujarTablero = () => {
  tablero.style.opacity = 1;
  crearPalabraSecreta(palabras);
  palabraRandom = crearPalabraSecreta(palabras);
  mostrarGuiones(palabraRandom);
  verificarLetra(palabraRandom);
};

// Crear palabra secreta
const crearPalabraSecreta = (palabras) => {
  const indicePalabra = Math.floor(Math.random() * palabras.length);
  const palabraSecreta = palabras[indicePalabra];
  return palabraSecreta;
};

// Mostrar guiones en HTML
const mostrarGuiones = (palabra) => {
  palabraOculta = "_ ".repeat(palabra.length);
  palabraContent.textContent = palabraOculta;
};

// Verificar si es letra o numero
const verificarLetra = (palabra) => {
  document.addEventListener("keypress", (e) => {
    let letra = e.key;
    letra = letra.toUpperCase();
    if (pattern.test(letra)) {
      dibujarLetraCorrecta(letra);
      dinujarLetraIncorrecta(letra);
    }
  });
};

// Dibujar la letra correcta
const dibujarLetraCorrecta = (letra) => {
  const palabraOclultaArr = palabraOculta.split(" ");

  palabraOclultaArr.map((wd, i) => {
    if (palabraRandom[i] === letra) {
      palabraOclultaArr[i] = letra;
    }
  });
  palabraOculta = palabraOclultaArr.join(" ");
  palabraContent.textContent = palabraOculta;
};

const dinujarLetraIncorrecta = (letra) => {
  if (!palabraRandom.includes(letra)) {
    palabraIncorrectaArr.push(letra);
  }

  const palabraIncorrecta = palabraIncorrectaArr.join(" ");
  palabrasIncorrectasContent.textContent = palabraIncorrecta;
};

// Iniciar nuertro juego
btnIniciar.addEventListener("click", (e) => {
  e.preventDefault();
});
dibujarTablero();
