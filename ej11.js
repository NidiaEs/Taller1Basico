// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

// const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

// El resultado debería ser el siguiente:

// 11
// NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.

const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];
let contador = 0;

for (let i of nums) {
    if ( nums[i] === 0 ) contador++ ;
}

console.log("Total de numeros 1:"+contador);