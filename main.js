const estado = 'presione-boton';
let patron = [];
let nivel = 0;

const tituloComienzo = document.querySelector('#comienzo');
const botonRojo = document.querySelector('#rojo');
const botonVerde = document.querySelector('#verde');
const botonAmarillo = document.querySelector('#amarillo');
const botonAzul = document.querySelector('#azul');

let boton = [botonRojo, botonVerde, botonAmarillo, botonAzul];

document.addEventListener('click', comenzarJuego);

function comenzarJuego() {
    if (estado === 'presione-boton') {
        nuevoNivel();
    }
}

function nuevoNivel() {
    setTimeout(() => {
        nivel = nivel + 1;
        tituloComienzo.innerText = `Nivel  ${nivel}`;
        let proximoColor = Math.floor(Math.random() * 4);
        let proximoBoton = boton[proximoColor];

        botonClaro(proximoBoton);
        patron.push(proximoBoton);
    }, 500);
}

function botonClaro(boton) {
    botonClaro.classList.add('active');
    setTimeout(() => {
        botonClaro.classList.remove('active');
    }, 2000);
}
