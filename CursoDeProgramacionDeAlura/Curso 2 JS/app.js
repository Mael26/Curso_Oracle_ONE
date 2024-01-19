let listaNumerosSecretos = [];
let numeroMaximo = 10;
let numeroSecreto;
generarNumeroSecreto();
let intentos = 1;



function verificarIntento(){
    let numeroIngresado = parseInt(document.getElementById('numeroIngresado').value);
    numeroIngresado === numeroSecreto ? ganar() : numeroIngresado<numeroSecreto ? asignarTextoElemento('p', 'El numero secreto es mayor') : asignarTextoElemento('p', 'El numero secreto es menor');
    intentos++;
    limpiar();
}

function ganar(){
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('intentar').setAttribute('disabled', true);
}
function limpiar(){
    document.getElementById("numeroIngresado").value = " ";
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
    listaNumerosSecretos.includes(numeroSecreto) ?  generarNumeroSecreto() : listaNumerosSecretos.push(numeroSecreto);
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', `Selecciona un numero entre 1 y ${numeroMaximo}`);

function finDelJuego(){
    asignarTextoElemento('p', 'El juego ha acabado');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('intentar').setAttribute('disabled', true);
}

function reiniciarJuego(){
    limpiar();
    intentos = 1;
    asignarTextoElemento('p', `Selecciona un numero entre 1 y ${numeroMaximo}`);
    listaNumerosSecretos.length==numeroMaximo  ? finDelJuego(): generarNumeroSecreto();
    document.getElementById('intentar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}