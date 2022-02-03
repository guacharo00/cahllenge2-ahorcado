"use strict";

const btnIniciar = document.querySelector(".inicio");
const btnAgregarNueva = document.querySelector(".agregar");
const btnJugarDenuevo = document.querySelector(".nuevo");
const tablero = document.querySelector(".contain");
const palabraContent = document.querySelector(".word");
const palabrasIncorrectasContent = document.querySelector(".letters");
const contador = document.querySelector(".counter");
const img = document.querySelector("#ahorcado");

const palabras = ["PERRO", "AUTO", "GALLINA", "AIRE", "CASA", "NOCHE"];
const pattern = new RegExp("^[A-Z]+$", "i");
let palabraIncorrectaArr = [];
let palabraOculta = "";
let palabraIncorrecta = "";
let palabraRandom = "";
let intentos = 0;
let finJuego = false;

// Funcion para dibujar tablero
const dibujarTablero = () => {
  tablero.style.opacity = 1;

  crearPalabraSecreta(palabras);
  palabraRandom = crearPalabraSecreta(palabras);
  mostrarGuiones(palabraRandom);
  verificarLetra(palabraRandom);
  dibujarAhorcado();
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

// Dibujar palabra incorrecta
const dinujarLetraIncorrecta = (letra) => {
  if (!palabraRandom.includes(letra) && !palabraIncorrectaArr.includes(letra)) {
    palabraIncorrectaArr.push(letra);
    intentos += 1;
    contadorIntentos(intentos);
  }

  palabraIncorrecta = palabraIncorrectaArr.join(" ");
  palabrasIncorrectasContent.style.opacity = 1;
  palabrasIncorrectasContent.textContent = palabraIncorrecta;
};

// Dibujar ahorcado
const dibujarAhorcado = () => {
  img.setAttribute("src", `img/${intentos}.png`);
};

// Fin del juego
const juegoTerminado = () => {
  finJuego = true;
};
console.log(finJuego);
// Contador de intentos
const contadorIntentos = (intentos) => {
  if (intentos <= 9) {
    contador.textContent = `${intentos} / 9`;
    dibujarAhorcado();
  } else {
    juegoTerminado();
  }
};

// Iniciar nuertro juego
btnIniciar.addEventListener("click", (e) => {
  e.preventDefault();
  dibujarTablero();
  palabraIncorrectaArr = [];
  palabraIncorrecta = "";
  palabrasIncorrectasContent.textContent = palabraIncorrecta;
  intentos = 0;
  contador.textContent = `${intentos} / 9`;
  img.setAttribute("src", `img/${intentos}.png`);
});

// btnJugarDenuevo.addEventListener("click", () => {});
