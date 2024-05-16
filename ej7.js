// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

// 5
// 6
// 7
// 8
// 9
// 10
// NOTA: - Puedes asumir que el primer número siempre va a ser menor o igual que el segundo. - Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.

let num1 = parseInt(prompt("Digite el primer numero del rango"));
let num2 = parseInt(prompt("Digite el segundo numero del rango"));
if (num1<num2){
    for ( let i = num1;i<=num2;i++ ) {
        console.log(i);
    }
}
else{
    for ( let i = num2;i<=num1;i++ ) {
        console.log(i);
    }   
}