/*
1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
*/
console.log("¡Hola, Bienvenidos y bienvenidas!");
/*
2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
*/
let nombre = "Miguel Angel";
console.log(`¡Hola: ${nombre}!`);
/*
3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
*/
alert(`¡Hola: ${nombre}!`);
/*
4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
    Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
*/
let lenguajeFavorito = prompt("¿Cual es tu lenguaje de programacion favorito?");
console.log(`${lenguajeFavorito}`);
/*
5. Sumar valores
*/
let valor1 = 2;
let valor2 = 1;
let resultado = valor1 + valor2;
console.log(`El resultado es ${resultado}`);
/*
6. Restar valores
*/
let valor12 = 2;
let valor22= 1;
let resultado2 = valor1 - valor2;
console.log(`El resultado es ${resultado2}`);
/*
7. La edad
*/
let edadUsuario = prompt("Ingeresa tu edad");
alert(`${edadUsuario >= 18 ? "Eres mayor de edad" : "Eres menor de edad"}`);
/*
8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
*/
let numero = prompt("Ingresa un numero");
if (numero > 0 ){
    alert(`El numero ${numero} es positivo`)
}else if (numero == 0){
    alert (`el numero ${numero} es cero`)
}else{
    alert(`El numero ${numero} es negativo`)
}
/*
9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
*/
let num = 1;
while(num <= 10){
    console.log(`Numero ${num}`);
    num++;
}
/*
10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/
let nota = 10;
alert(`${nota >= 7 ? "Aprovado" : "Reprobado"}`);
/*
11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
*/
console.log(Math.random());
/*
12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
*/
console.log(Math.floor(Math.random()*10)+1);
/*
13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
*/
console.log(Math.floor(Math.random()*1000)+1);

