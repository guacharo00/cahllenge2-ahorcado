"use strict";

const btnIniciar = document.querySelector(".inicio");
const btnAgregarNueva = document.querySelector(".agregar");
const btnJugarDenuevo = document.querySelector(".nuevo");
const tablero = document.querySelector(".contain");
const palabraContent = document.querySelector(".word");
const palabrasIncorrectasContent = document.querySelector(".letters");
const contador = document.querySelector(".counter");
const img = document.querySelector("#ahorcado");
const messageText = document.querySelector(".message");

const palabras = ["PERRO", "AUTO", "GALLINA", "AIRE", "CASA", "NOCHE"];
const pattern = new RegExp("^[A-Z]+$", "i");
let palabraIncorrectaArr = [];
let palabraOculta = "";
let palabraIncorrecta = "";
let palabraRandom = "";
let intentos = 0;
let finJuego = false;
let message = "";
let gano = false;
let perdio = false;

// Funcion para dibujar tablero
const dibujarTablero = () => {
  tablero.style.opacity = 1;

  crearPalabraSecreta(palabras);
  palabraRandom = crearPalabraSecreta(palabras);
  mostrarGuiones(palabraRandom);
  verificarLetra(palabraRandom);
  dibujarAhorcado();
  messageText.textContent = "Intenta Adivinar la palabra";
  messageText.classList.remove("win");
  messageText.classList.remove("lose");
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
    if (!gano && !perdio) {
      let letra = e.key;
      letra = letra.toUpperCase();
      if (pattern.test(letra)) {
        dibujarLetraCorrecta(letra);
        dinujarLetraIncorrecta(letra);
      }
    }

    gano || perdio ? (btnJugarDenuevo.style.opacity = 1) : "";
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
  jugadorGana(palabraRandom);
};

// Dibujar palabra incorrecta
const dinujarLetraIncorrecta = (letra) => {
  if (
    !palabraRandom.includes(letra) &&
    !palabraIncorrectaArr.includes(letra) &&
    intentos < 9
  ) {
    palabraIncorrectaArr.push(letra);
    intentos += 1;
    contadorIntentos(intentos);
    jugadorPierde(intentos);
  }

  palabraIncorrecta = palabraIncorrectaArr.join(" ");
  palabrasIncorrectasContent.style.opacity = 1;
  palabrasIncorrectasContent.textContent = palabraIncorrecta;
};

// Dibujar ahorcado
const dibujarAhorcado = () => {
  img.setAttribute("src", `img/${intentos}.png`);
};

// Contador de intentos
const contadorIntentos = (intentos) => {
  if (intentos <= 9) {
    contador.textContent = `${intentos} / 9`;
    dibujarAhorcado();
  }
  return intentos;
};

// Fin del juego
const jugadorGana = (palabra) => {
  const palabraArr = palabraOculta.split(" ");
  const palabraVerificar = palabraArr.join("");

  if (palabra === palabraVerificar) {
    gano = true;
    console.log("Usuario Gano");
    messageText.classList.add("win");
    messageText.textContent = "!Felicidades 🎉, Has ganado!";
  }
};

// Jugador pierde
const jugadorPierde = (intentos) => {
  if (intentos >= 9) {
    perdio = true;
    console.log("Usuario Pierde");
    messageText.classList.add("lose");
    messageText.textContent = "!Has perdido 😵, intenta denuevo!";
  }
};

// Resetear
const resetear = () => {
  palabraIncorrectaArr = [];
  palabraIncorrecta = "";
  palabrasIncorrectasContent.textContent = palabraIncorrecta;
  intentos = 0;
  contador.textContent = `${intentos} / 9`;
  img.setAttribute("src", `img/${intentos}.png`);
  gano = false;
  perdio = false;
  btnJugarDenuevo.style.opacity = 0;
};

// mostrar boton jugar denuevo
if (gano || perdio) btnJugarDenuevo.style.opacity = 1;

// Iniciar nuertro juego
btnIniciar.addEventListener("click", (e) => {
  e.preventDefault();
  // dibujarTablero();
  resetear();
});
dibujarTablero();
btnJugarDenuevo.addEventListener("click", () => {
  dibujarTablero();
  resetear();
});
// !Has perdido 😵, intenta denuevo!
