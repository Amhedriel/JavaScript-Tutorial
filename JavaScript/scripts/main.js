const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola, Mundo!';

// Estructura de código
/*
alert("Hola");
alert("Mundo");

Hola
Mundo
*/


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

/*
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
*/

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

// Sintaxis
/*
new Number(123);
var a = new Number('123'); // a === 123 es falso
var b = Number('123'); // b === 123 es true

a instanceof Number; // es true
b instanceof Number; // es true
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
/*
// -3 divide por 1 con 3 ceros
1e-3 === 1 / 1000; //0.001

// -6 divide por 1 con 6 ceros
1.23e-6 === 1.23 / 1_000_000; // 0.00000123

// Un ejemplo con un número mayor
1234e-2 === 1234 / 100; // 12.34, el punto decimal se mueve 2 veces

console.log(1e-3);
console.log(1.23e-6);
console.log(1234e-2);
*/

// Números hexadecimales
/*
console.log(0xff); // 255
console.log(0xFF); // 255 (lo mismo en mayúsculas o minúsculas)

let a = 0b11111111; // binario de 255
let b = 0o377; // octal de 255

alert(a === b); // true, el mismo número 255 en ambos lados
*/
/*
 // Utilizando el objeto `Number` para modificar todos los objetos `Number`
miNumero = 10;
console.log(miNumero);

miNumero = new Number(65);
console.log(miNumero);

Number.prototype.descripcion = null;

miNumero.descripcion = "Velocidad del viento";

console.log(miNumero);
*/
/*
// toString
let num = 255;

alert( num.toString(16)); // ff
alert( num.toString(2));  // 11111111
*/


/*---------------STRINGS----------------*/

/*
let guestList = `Invitados:
* juan
* Pedro
* María
`;

alert(guestList); 
*/
/*
for (let char of 'Hola') {
  alert(char); // H,o,l,a (char se convierte en "H", luego "o", luego "l", etc.)
}
*/
/*
// Comparar cadenas

let a = "a"
let b = "b"

if (a < b) {  // true
  console.log(a + "es menor que" + b)
  }
  else if (a > b){
    console.log(a + "es mayor que" + b)
  }
    else {
    console.log(a + "y" +b+ "son iguales.")
  }
*/

// MAYUSCULAS minusculas
/*
alert("Interfaz".toUpperCase());
alert("Interfaz".toLowerCase());
*/
/*
console.log("Interfaz"[0].toLowerCase());
console.log("interfaz"[0].toUpperCase());
*/
/*
function esIgual(str1, str2){
  return str1.toUpperCase() === str2.toUpperCase()

} // esIgual
*/
/*
let str = "Widget con id";

console.log(str.indexOf("Widget"));
console.log(str.indexOf("widget"));

console.log(str.indexOf("id"));

alert(str.indexOf("id", 2));
*/

/*
const str = "Tres tristes tigres trigan trigo en un trigal, con tres tristes trigos trigrando por tres tigres";

let objetivo = "tres"; // busquemos por él

let pos = 0;

console.log(str);
console.log(objetivo);
console.log(pos);

while (true){
  let encontrarPos = str.indexOf(objetivo, pos);
  if(encontrarPos == -1) break;
  
  alert(`Encontrado en ${encontrarPos}`);
  pos = encontrarPos + 1;
  
  console.log(pos);
  
}
*/
/*
const str = "Tres tristes tigres trigan trigo en un trigal, con tres tristes trigos trigrando por tres tigres";

let objetivo = "tres"; // La palabra que buscamos.

let pos = -1;

while ((pos = str.indexOf(objetivo, pos +1))!= -1){
  alert(pos)
};
*/
/*
let str = "Widget con id";

if (str.indexOf("widget")){
  alert("Lo encontramos"); // no funciona
}
*/

// alert("Widget con id".includes("Widget")); // true
// alert("Hola".includes("Adiós")); // false

// alert("Widget".includes("id")); // true
// alert("Widget".includes("id", 3)); // false, desde la posición 3 no hay "id"

// alert( "Widget".startsWith("Wid")); // true, "Widget" comienza con "Widget"
// alert( "Widget".endsWith("get")); // true, "Widget" termina con "get"

// let str = "stringify";
// alert( str.slice(0, 5)); // 'strin', el substring desde 0 hasta 5 (sin incluir 5)
// alert( str.slice(0, 1)); // 's', desde 0 hasta 1, pero sin incluir 1, por lo que solo el caracter en 0 


// let str = "stringify";
// // esto es lo mismo para substring
// alert( str.substring(2, 6) ); //"ring"
// alert( str.substring(6, 2) ); //"ring"

// // ...pero no para slice:
// alert( str.substring(2, 6) ); //"ring" (lo mismo)
// alert( str.substring(6, 2) ); //"" (un string vacío)

// let str = "stringify";
// alert( str.substr(2, 4)); // "ring", desde la 2nda posición toma 4 caracteres

// let str = "stringify";
// alert( str.substr(-4, 2)); // "ring", desde la 2nda posición toma 4 caracteres

// alert ("a" > "Z"); // true
// alert ("Österrich" > "Zealand"); // true

// mayúsculas y minúsculas tiene códigos diferentes
// alert("Z".codePointAt(0)); // 90
// alert("z".codePointAt(0)); // 122
// alert("z".codePointAt(0).toString(16)); // 7a (si necesitamos el valor del código en hexadecimal)
// alert("z".codePointAt(0).toString(2)); // 1111010 (binario)

// alert( String.fromCodePoint(90)); // Z
// alert( String.fromCodePoint(0x5a)); // Z con hexadecimal

// let str = "";

// for(let i = 65; i <= 220; i++){
//   str += String.fromCodePoint(i);
// }
// console.log(str);

// alert("Österreich".localeCompare("Zealand") ); // -1






