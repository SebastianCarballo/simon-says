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
	estado = 'esperado-patron';
	setTimeout(() => {
		nivel += 1;
		tituloComienzo.innerText = `Nivel  ${nivel}`;
		const proximoColor = Math.floor(Math.random() * 4);
		const proximoBoton = boton[proximoColor];
		iluminarBoton(proximoBoton);
		patron.push(proximoBoton);
		patronIndiceJugador = 0;
		estado = 'esperando-jugador';
	}, 500);
}

function iluminarBoton(boton) {
	boton.classList.toggle('active');
	setTimeout(() => {
		boton.classList.toggle('active');
	}, 200);
}

function presionarBoton(event) {
	if (estado === 'esperando-jugador') {
		const boton = event.target;
		if (boton === patron[patronIndiceJugador]) {
			patronIndiceJugador = patronIndiceJugador + 1;
			iluminarBoton(boton);
			if(patronIndiceJugador === patron.length){
				nuevoNivel();
			}
		} else {
			estado = 'Game Over';
			tituloComienzo.innerText = 'Game Over';
		}
	}
}
