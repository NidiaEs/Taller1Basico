// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:

// Hola Mundo
// Hola Mundo
// Hola Mundo
// Hola Mundo
// Hola Mundo

let limite = parseInt(prompt("Digite el numero de veces que quiere que se repita la frase:"));
let frase = prompt("Digite la frase:");

for ( let i = 0 ; i <= limite ; i++ ) {
    console.log(frase);
}