// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

function edad (n){
    return 2020-n;
}


let name = prompt("Digite su nombre:");
let fecha_n = parseInt(prompt("Digite su año de nacimiento:"));

console.log( "Hola "+ name + " Grandioso su año de nacimiento es: "+ fecha_n + " Y su edad es:"+ edad(fecha_n) );