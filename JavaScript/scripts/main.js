const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola, Mundo!';

/*--------VARIABLES--------*/
/*
const COLOR_RED = "#F00";
const COLOR_GREEN = "0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// Elegimos un color
let color = COLOR_BLUE;
alert(color); // #00f
*/

// Trabajando con variables
// Declara dos variables: admin y name.
let admin,
nombre;

// Asigna el valor "John" a "nombre"
nombre = "John";
console.log(nombre);

// Copia el valor de nombre a admin.
admin = nombre;

//  Muestra el valor de admin con alert()
// alert(admin);

/*--------NUMBER--------*/

// alert(1 / 0); // Infinity
// alert(Infinity); // Infinity

// alert( "no es un número" / 2); // NaN, tal división es errónea
/*
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log( "not a number" / 2 -1); // NaN
console.log(NaN ** 0); // 1
*/

// Escribir con guion bajo
/*
const BILLON = 1000000000;

let milMillones = 1_000_000_000;

console.log(BILLON);
console.log(milMillones);
*/

// Acortando ceros
/*
const BILLON = 1e9; // 1 billon USA, literalmente: 1 y 9 ceros
console.log(BILLON);

alert( 7.3e9); // 7.3 mil de millones (tanto) 7300000000 como 7_300_000_000)
*/
/*
1e3 === 1*1000; // e3 significa *1000
alert(1e3);

1.23e6 === 1.23 * 1_000_000; // e6 significa *1000000
console.log(1.23e6);
*/

// Cantidades pequeñas
/*
const MCS = 0.000_001;
console.log(MCS);

let mcs = 1e-6; // 5 ceros a la izquierda de 1
console.log(mcs);
*/

// -3 divide por 1 con 3 ceros
1e-3 === 1 / 1000; //0.001

// -6 divide por 1 con 6 ceros
1.23e-6 === 1.23 / 1_000_000; // 0.00000123

// Un ejemplo con un número mayor
1234e-2 === 1234 / 100; // 12.34, el punto decimal se mueve 2 veces

console.log(1e-3);
console.log(1.23e-6);
console.log(1234e-2);
