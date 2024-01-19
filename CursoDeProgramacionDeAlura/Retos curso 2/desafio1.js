let titulo = document.querySelector('h1');
titulo = 'Hora del desafio';

function botonConsole(){
    alert('El boton fue clicado');
}

function botonPrompt(){
    let ciudad = prompt('Ingresa el nombre de alguna ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}
function botonAlert(){
    alert('Yo amo JS');
}

function botonSuma(){
    let valor1 = parseInt(prompt('Ingrese el primer valor'));
    let valor2 = parseInt(prompt('Ingrese el segundo valor'));
    alert(`La suma es ${valor1+valor2}`)
}