// Declaraciones y asignaciones
/*
var nombreDelaVariableVar
let nombreDeVariableLet
const NOMBREVARIABLE = 'Curso de JavaScript'

nombreDelaVariableVar = 'Pedro';
nombreDelaVariableVar = 'Ricardo';
nombreDelaVariableVar = 'Lucia';
nombreDelaVariableVar = 'maria';

alert(nombreDelaVariableVar);

console.log(NOMBREVARIABLE);
*/
/*
let objeto = {
  nombre: "David",
  edad: "40"
}

let colores = ["Blanco", "Negro", "Azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "amhedriel@gmail.com";
colores.push("Dorado");

*/
/*
// Tipos de datos

let cadena = "Hola, Mundo"; //Tipo String
let numero = 42; // Tipo Number
let esVerdadero = true; // Tipo Boolean
let arreglo = [1, 2, 3]; // Tipo
let objeto = {
  nombre: "David",
  edad: 25
}; // Tipo Object
let nulo = null; // Tipo Null
let indefinido = undefined; // Tipo Undefined

*/

// let mcs = 1e-6; // 5 ceros a la izquierda de 1
// console.log(mcs);

// SCOPE

let x = 5;

{
  let x = 2;
  console.log(x)
}

console.log(x)