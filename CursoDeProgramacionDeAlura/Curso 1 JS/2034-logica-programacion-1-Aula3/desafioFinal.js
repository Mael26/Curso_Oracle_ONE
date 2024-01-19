//Variables
let rango = parseInt(prompt("Ingresa el valor maximo de tu juego"));
let numeroSecreto = Math.floor(Math.random()*rango)+1;
let numeroUsuario = 0;
let intentos = 0;
let numeroDeIntentos = Math.floor(4+(rango*0.03));

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${rango} por favor:`));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición                                     //intentos == 1?   si       no
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
        intentos++;
    }
    if (intentos>numeroDeIntentos){
        alert(`Superaste al numero de ${numeroDeIntentos+1} intentos maximos, el numero era ${numeroSecreto}`);
        break;
    }
}