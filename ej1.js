// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

function suma(num1,num2){
    return num1 + num2;
}
let n1 = parseInt(prompt("Digite el primer numero:"));
let n2 = parseInt(prompt("Digite el segundo numero:"));

console.log(`El resultado de la suma es:`+suma(n1,n2));