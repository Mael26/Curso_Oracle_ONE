/*
1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/
function imc(altura, peso){
    let imc = peso/(altura**2)
    console.log(`El IMC para la altura ${altura} y el peso ${peso} es de ${imc}`)
}
imc(1.72, 65);
/*
2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/
function factorial(numero){
    let resultadoDelFactorial;
    let numeroOriginal = numero;
    if (numero == 0 || numero == 1){
        resultadoDelFactorial = 0;
    }else {
        resultadoDelFactorial = numero;
        while(numero > 1){
            numero--;
            resultadoDelFactorial  = resultadoDelFactorial * numero;
        }
    }
    console.log(`El factorial de ${numeroOriginal} es ${resultadoDelFactorial}`);
    return resultadoDelFactorial;
}
factorial(0);
factorial(1);
factorial(4);
/*
3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas
     puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/
function dolarACOP(doalres){
    let pesos = doalres * 3941.71;
    console.log(`${pesos} son los esos equivalentes a $ ${doalres} Dolares`)
    return pesos;
}
dolarACOP(1000);
/*
4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
*/
function area(altura, anchura){
    let areaFormula = anchura * altura;
    console.log(`El Area de un rectangulo con base ${anchura} y altura ${altura} es de: ${areaFormula}`);
    return areaFormula;
}
area(5, 8);
/*
5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/

function  areaCircular(radio){
    const PI = Math.PI;
    let areaCirculo = PI * radio * radio;
    console.log (`el area del circulo es ${areaCirculo}`);
    return areaCirculo;
}
areaCircular(9);

/*
6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/
function tablaMultiplicar (n) {
    contador = 1;
    while (contador <= 10){
        console.log(`${n} * ${contador} = ${n*contador}`);
        contador++;
    }
}
tablaMultiplicar(2);