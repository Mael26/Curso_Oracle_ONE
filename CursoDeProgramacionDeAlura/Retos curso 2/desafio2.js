/*
1. Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function saludo(){
    console.log("¡Hola, mundo!");
}
saludo();
/*
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/
function saludar(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
saludar("Juan");
/*
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/
function doble(numero){
    console.log(`El doble de ${numero} es ${numero*2}`);
    return numero*2;
}
/*
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/
function promedio(a,b,c) {
    let suma = a + b + c;
    let promedio = suma / 3;
    console.log(`El promerdio de ${a}, ${b} y ${c} es ${promedio}`);
    return promedio;
}
promedio(1,2,3);
/*
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
*/
function mayor(a,b){
    console.log(`El mayor numero entre ${a} y ${b} es: ${a > b ? a : b}`);
}
mayor(1,2);
mayor(2,1)
/*
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/
function cuadrado(a){
    console.log(`El cuadrado de ${a} es ${a*a}`);
    return a*a;
}
cuadrado(3)
