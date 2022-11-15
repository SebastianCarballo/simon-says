let estado = 'click';
let patron = [];
let nivel = 0;
let patronIndiceJugador = 0;

const tituloComienzo = document.querySelector('#comienzo');
const botonRojo = document.querySelector('#rojo');
const botonVerde = document.querySelector('#verde');
const botonAmarillo = document.querySelector('#amarillo');
const botonAzul = document.querySelector('#azul');

let boton = [botonRojo, botonVerde, botonAmarillo, botonAzul];

document.querySelector('#play').onclick = function () {
    comenzarJuego();
};
botonRojo.addEventListener('click', presionarBoton);
botonVerde.addEventListener('click', presionarBoton);
botonAmarillo.addEventListener('click', presionarBoton);
botonAzul.addEventListener('click', presionarBoton);

function comenzarJuego() {
    if (estado === 'click' || estado === 'Game Over') {
        nuevoNivel();
        patron = [];
        nivel = 0;
        patronIndiceJugador = 0;
    }
}

function nuevoNivel() {
    estado = 'click';
    setTimeout(() => {
        nivel += 1;
        tituloComienzo.innerText = `Nivel  ${nivel}`;
        let proximoColor = Math.floor(Math.random() * 4);
        let proximoBoton = boton[proximoColor];

        botonClaro(proximoBoton);
        patron.push(proximoBoton);

        patronIndiceJugador = 0;

        estado = 'esperando-jugador';
    }, 500);
}

function botonClaro(boton) {
    boton.classList.toggle('active');
    setTimeout(() => {
        boton.classList.remove('active');
    }, 2000);
}

function presionarBoton(event) {
    if (estado === 'esperando-jugador') {
        const boton = event.target;
        if (boton === patron[patronIndiceJugador]) {
            patronIndiceJugador = patronIndiceJugador + 1;
            botonClaro(boton);

            nuevoNivel();
        } else {
            estado = 'Game Over';
            tituloComienzo.innerText = 'Game Over';
        }
    }
}
