//Variables
let numeroSecreto = 2;
let numeroUsuario;
let contador = 1;
let palabraVeces = "vez";

while(numeroSecreto != numeroUsuario){
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}, lo hiciste en ${contador} ${palabraVeces}`);
    }else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
    }
    contador += 1;
    palabraVeces = "veces";

}