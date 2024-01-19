//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(`La lista generica es ${listaGenerica}`);
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', ' C', ' C++', ' Kotlin', ' Python'];
console.log(`Algunos lenguajes de programacion son: ${lenguajesDeProgramacion}`);
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push(' Java');
lenguajesDeProgramacion.push(' Ruby');
lenguajesDeProgramacion.push(' GoLang');
console.log(`Despues de agregarle algunos lenguajes, la lista es: ${lenguajesDeProgramacion}`);
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function todosLosElementos(){
    console.log(`Los lenguajes son:`);
    for (let lenguajes of lenguajesDeProgramacion) {
        console.log(`${lenguajes}`);
    }
}
todosLosElementos();
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
contador = 0;
function elementosListaInversos(){
    console.log(lenguajesDeProgramacion[lenguajesDeProgramacion.length-contador])
}
while(contador <= lenguajesDeProgramacion.length){
    elementosListaInversos();
    contador++;
}
// Crea una función que calcule el promedio de los elementos en una lista de números.

function promedio(lista){
    let suma = 0;
    for(let i = 0; i<lista.length;i++){
        suma = suma + lista[i];
    }
    let resultado = suma/lista.length;
    console.log(`El promedio de la lista ${lista} es ${resultado}`);
}
promedio([1,2,3,4,5]);
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mayorYMenor(lista){
    let mayor = lista[0];
    let menor = lista[0];
    for(let i = 0; i<lista.length;i++){
        mayor > lista[i] ? mayor = mayor : mayor = lista[i];
        menor < lista[i] ? menor = menor : menor = lista[i];
    }
    console.log(`El mayor numero de la lista ${lista} es ${mayor} y el menor es ${menor}`);
}
mayorYMenor([12,24,34,34,65]);
// Crea una función que devuelva la suma de todos los elementos en una lista.
function suma(lista){
    let suma;
    for(let i = 0; i<lista.length-1;i++){
        suma = suma + listaNumeros[i];
    }
    console.log(`la suma de la lista ${lista} es ${suma}}`);
}
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posicioEnLaLista(lista, numeroBuscado){
    let i;
    for(i = 0; i<lista.length; i++){
        if (lista[i] == numeroBuscado) {
            console.log(`El numero buscado "${numeroBuscado}" esta en la posicion ${i} de la lista ${lista}`);
            return i;
        }
    }
    i = -1;
    console.log(`El numero buscado ${numeroBuscado} esta en la posicion ${i} de la lista ${lista}`);
    return i;
}
posicioEnLaLista([1,2,3,4,5,6,7], 6);
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaListas(listaA,listaB){
    let sumaPorPosiciones = [];
    for(let i = 0 ; i < listaA.length; i++){
        sumaPorPosiciones[i] = listaA[i]+listaB[i];
    }console.log(`La suma por posiciones de las listas ${listaA} y ${listaB} es ${sumaPorPosiciones}`);
}
sumaListas([1,2,3,4],[5,6,7,8])
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número