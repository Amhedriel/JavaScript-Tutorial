console.log('Hola Mundo') // comentarios

//-------VARIABLES---------//
/*
// DATOS

Strings
numbers -->int/float
bool -->true/false
arrays -->o listas
objects
maps
dictionary

// ALMACENAR DATOS
let
var
const


let libro = 'El programador pragmático'; //string
let entero = 100; // integers
let decimal = 1.967456; // float

// booleanos
let autorizado = true; // verdadero
let seleccionado = false; // falso
*/

//--------ESTRUCTURAS DE DATOS----------//

/*
//Son algo más complejas como las listas que nos permiten guardar muchos tipos de datos de forma ordenada

let numeros = [23, 45, 16, 37, 3, 99, 22]; // lista de números
let animales = ['perro', 'gato', 'tigre']; // lista de texto
let datosMixtos = ['texto', 69, true, ['lista dentro de otra lista']]; // lista de datos mixtos

// Mapas, Objetos, Diccionarios que nos permiten acceder muy rápido a una propiedad con solo una llave

// creamos un objeto que mapea números a texto y aparecerá ordenado, en este caso 07 antes que 10
let jugadores = {
  10: 'Messi', 
  07: 'Cristiano Ronaldo'
};

// objeto que mapea texto a texto
let paises = {
  EC: "Ecuador",
  MX: "México",
  AR: "Argentina"
};

// objeto que mapea texto a listas
let emails = {
  "Juan": ["juan@gamil.com"],
  "Ricardo": ["ricardo@gmail.com",
              "ricardo@outlook.com"
            ]
};
*/

//-----------CONSTANTES------------//

// Su valor no puede ser cambiado

// const PI = 3.1416;
// const cumpleaños = 12-08-1983;

//-----------OPERADORES------------//

/*
// Son símbolos para realizar operaciones +, -, *, /, %
console.log(1 + 1);
console.log(1 - 1);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

// Operadores comparativos para comparar un valor con otro

console.log(4 == 4); // comparar el valor de 4 que es true
// Significa verdadero porque 4 si es igual a 4.

console.log(4 == '4'); // comparar el valor de 4 pero con un texto que es verdadero 
// Nos sale verdadero porque solo estamos comparando valores, no DATOS.

// Pero si queremos saber el tipo de DATOS.
console.log(4 === '4'); // comparar el valor de 4 pero con un texto que es falso

// para el operador diferente !=
console.log(4 != 5); // TRUE

console.log(4 < 5); // menor que, TRUE
console.log(4 >= 5); // mayor o igual que, FALSE

// Operadores lógicos &&

console.log(true && true); // TRUE lo demás es falso
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Operadores lógicos ||

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false); // FALSE, el resto es verdadero
*/

//-------------CONDICIONALES--------------//

/*
// Nos permite controlar el flujo de nuestro código basado en nuestras condiciones

// if else
let autorizado = true;

if (autorizado){ // estamos incluyendo la variable autorizado aquí
  console.log("Puede Ingresar"); // Mostraremos el mensaje si el if se cumple con true

} else { // pero si no es verdadero entonces
  console.log("No puede ingresar"); // Muestra este mensaje
}

// > Puede Ingresar

let estaAutorizado = false;

if (estaAutorizado){ // estamos incluyendo la variable autorizado aquí
  console.log("Puede Ingresar"); // Mostraremos el mensaje si el if se cumple con true

} else { // pero si no es verdadero entonces
  console.log("No puede ingresar"); // Muestra este mensaje
}

// > No puede ingresar

// En los condicionales podemos utilizar operadores comparativos

let entero = 100;

if (entero === 99) {
  console.log("Es 99");
} else if (entero === 100) {
  console.log("Es 100");
} else {
  console.log("No es ni 99 ni 100");
}

// > Es 100

// Switch

let color = "amarillo";

switch (color) { // le pasamos un argumento que será comparado con cada condición
  case "verde":  // verde
    console.log("Éxito");
    break;
  case "amarillo": // amarillo
    console.log("Advertencia");
    break;
  default: // incluso las que nos son verde ni amarillo
    console.log("Error");
    break;
}

// > Advertencia
*/

//--------------FUNCIONES----------------//

/*
// Las funciones son un bloque de código que podemos guardar y reutilizar usando function y argumentos

function sumar(primero, segundo){ // en este caso 2 argumentos para operar
  return primero + segundo; // Palabra clave return que regresa un valor de esta función que será la suma de primero + segundo

}
// el código dentro de "sumar" no se llama hasta que llamemos a la función
sumar (3,4); // Para llamar el código dentro de la función
let resultado = sumar (3,4); // Para guardar el código de la función en una variable
console.log(resultado); // para imprimir el resultado en una consola

//> 7

// Podemos crear otras funciones, como para multiplicar

function multiplicar(primerNum, segundoNum) {
  console.log(primerNum * segundoNum); //esta parte es el que se imprime en pantalla
}
multiplicar(100 , 2); 

// > 200

// pero en este caso no estamos retornando nada

// Otra función podría ser para imprimir el primer elemento de una lista

function imprimirPrimerElemento(lista){
  console.log(lista[0]);  //esta parte es el que se imprime en pantalla
}

let animales = ["perro", "gato", "tigre"];
imprimirPrimerElemento(animales);

// >perro

// Función un poco más compleja

function ordenadoRapido(lista) {
  if(lista.length <= 1) {
    return lista;
  }
    let pivote = lista [0];
    let izquierda = [];
    let derecha = [];
    for (let i = 1; i < lista.length; i++) {
      lista[i] < pivote ? izquierda.push(lista[i]) : derecha.push(lista[i]);
    }
    return ordenadoRapido(izquierda).concat(pivote, ordenadoRapido(derecha));
};

let numeros = [23, 45, 16, 37, 3, 99, 22]; // Si pasamos una lista de números desordenados

let listaOrdenada = ordenadoRapido(numeros); // a la función ordenadoRapido vamos a tener una lista ordenada

console.log(listaOrdenada); // y al imprimir el resultado, obtenemos una lista ordenada

// >[
// >  3, 16, 22, 23,
// > 37, 45, 99
// >]
*/

//------------BUCLES O CICLOS-------------//

/*
//Con los bucles podemos repetir secciones de nuestro código muchas veces, estos son excelentes para navegar por cada elemento en una lista y así correr
// el mismo código par cada elemento

let animales = ["perro", "gato", "tigre"];

// Un bucle para imprimir cada elemento de una lista, for y creamos un let para guardar cada elemento "animal"
for (let animal of animales) { // usamos la palabra clave of e incluimos la lista que queremos iterar "animales"
  console.log(animal);// el código que se va a aplicar a cada uno de los elementos, de momento imprimiremos cada elemento

}

// >perro
// >gato 
// >tigre

// Podemos crear bucles para realizar operaciones más complejas

let numeros = [23, 45, 16, 37, 3, 99, 22]

function multiplicar(primero, segundo) {
  console.log(primero * segundo);
}

for (let numero of numeros) {
  multiplicar(numero, 2); // En este caso multiplicaremos cada número en la lista por 2
}

// >46   
// >90   
// >32   
// >74   
// >6    
// >198  
// >44   

// While

// Que lo utilizaremos para imprimir todos los números desde 100 en la variable "entero" hasta 911 en la variable "emergencia"
let entero = 100;
let emergencia = 911;

while (entero <= emergencia) {
  console.log(entero);
  entero++; // esto aumenta el valor con 1 en cada iteración
}
// >100
// >101
// >102
// >103
// .
// .
// .
// >908
// >909
// >910
// >911
*/

//-----------------POO---------------//

/*
// Programación Orientada a Objetos
// La idea es tomar cualquier concepto del mundo real y transformarlo a código. Aquí todo se convierte en un objeto

// Aquí tenemos un objeto que se llama JavaScript

let javascript = {
  nombre: "javaScript",
  año: 1995,  // estos objetos pueden tener métodos
  descripcion: function(){     // para ello crearemos la propiedad descripción igual y escribiremos una función
    console.log(`${this.nombre} fue creado en ${this.año}`) // lo que queremos imprimir aqui son las propiedades para eso usamos "this." que se refiere a este objeto
  } 
};

javascript.descripcion(); // para verlo lo escribimos como si fuera una función.
// >javaScript fue creado en 1995
*/

//---------------CLASES--------------//


/*
// Las clases determinan la estructura o el esquema que va a tener un objeto utilizando la palabra clave "class" usando un "constructor"

// class Lenguaje {    // el nombre de la clase es Lenguaje
//   constructor(nombre, año){ // esta función "constructor" corre cuando se crea un objeto, y queremos que cada objeto tenga la propiedad "nombre", "año"
//     this.nombre = nombre; // usaremos la palabra "this" que se refiere a la clase lenguaje, ".nombre" será una propiedad y asignaremos el argumento del nombre
//     this.año = año; // hacemos lo mismo en año
//   }
//   descripcion(){    // Y vamos a crear un método, creamos un método llamado "descripción"
//     console.log(`${this.nombre} fue creado en ${this.año}`); // imprimiremos el "nombre", el texto y el "año"
//   }
// }

// let javascript = new Lenguaje ('JavaScript', 1995); // Para crear un nuevo objeto a partir de esta clase escribiremos la palabra clave "new " con "Lenguaje", el nombre "JavaScript", año "1995" y lo guardamos en let
// javascript.descripcion(); // Ahora llamaremos el método de "JavaScript.descripcion();"

//> javaScript fue creado en 1995

// Simplificación y reutilización

class Lenguaje {    // el nombre de la clase es Lenguaje
  constructor(nombre, año){ // esta función "constructor" corre cuando se crea un objeto, y queremos que cada objeto tenga la propiedad "nombre", "año"
    this.nombre = nombre; // usaremos la palabra "this" que se refiere a la clase lenguaje, ".nombre" será una propiedad y asignaremos el argumento del nombre
    this.año = año; // hacemos lo mismo en año
  }
  descripcion(){    // Y vamos a crear un método, creamos un método llamado "descripción"
    console.log(`${this.nombre} fue creado en ${this.año}`); // imprimiremos el "nombre", el texto y el "año"
  }
}
let javascript = new Lenguaje ('JavaScript', 1995); // 
javascript.descripcion();
let html = new Lenguaje ('HTML', 1993);
html.descripcion();
let css = new Lenguaje ('CSS', 1996);
css.descripcion();

// >JavaScript fue creado en 1995
// >HTML fue creado en 1993      
// >CSS fue creado en 1996       
*/

//--------------MÓDULOS--------------//



// Ahora el proyecto será tan grande que es imposible trabajar con un solo archivo para esto tenemos Módulos que nos permiten dividir nuestro código en cientos o miles de archivos para que sea más fácil organizarlos y trabajar con cada uno de ellos.
// En nuestro proyecto crearemos otro archivo con el nombre de modulo.js, y dentro de éste crearemos la función restar con la palabra clave "export {restar};"

// Ahora en index.js utilizaremos:

import {restar} from './modulo.js';

restar(10, 2);

// Ahora crearemos otro archivo llamado package.json y su contenido: {"type": "module"} y corremos nuestro código de index.js.

//> 8

// Y así es como se crean las bibliotecas o librerías.

