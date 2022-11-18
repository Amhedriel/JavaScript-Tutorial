# Flujo condicional

Es un modo de explicar cual es la diferencia entre hacer un `var` y hacer un `let`.

## `if` y `else`
Nosotros vimos que nos dán una respuesta basados en los operadores lógicos y basadas en ciertas condiciones.

~~~js
// variables let, es utilizado en código más limpio
let number1 = 2;
let number2 = 6;
console.log("\n************* if / else **************\n");
// respuestas con operadores lógicos con estas condiciones
if (number1 > number2 && number2 > 5) {
  // si tenemos var puede ser usada globalmente
  var variableVar = 4;
  // let no puede salir de estas llaves
  let variableLet = 5;
  console.log("El número 1 es mayor que número 2");
}
// var fuera de la función
console.log(variableVar)
else if( number1 == number2 || number1 < 3){
  console.log("Los números son iguales");
}
else {
  console.log("El número 2 es mayor que número 1");
}
~~~
Veamos que:

~~~js
// let fuera de función, así que pueden utilizarse en toda la función
let number1 = 2;
let number2 = 6;
console.log("\n************* if / else **************\n");
// aquí empezando el flujo condicional
if (number1 > number2 && number2 > 5) {
  console.log("El número 1 es mayor que número 2");
}
else if( number1 == number2 || number1 < 3){
  console.log("Los números son iguales");
}
else {
  console.log("El número 2 es mayor que número 1");
}
~~~

Recordemos el flujo condicional:

Inicializamos las **variables** tipo `let` `let number1 = 2;` y ``let number2 = 6;`` 
* SI `if` se cumple esa condición entonces continúa con su flujo:

  `if (number1 > number2 && number2 > 5){}` entonces `{console.log("El número 1 es mayor que número 2");}` se mostrará en pantalla. *En caso de que `if` no sea `true` será un `else if` o `else`*

* SI NO `else if` se cumple esa condición entonces haz esto:

  `else if ( number1 == number2 || number1 < 3){}` y mostrará `{console.log("Los números son iguales");}` en pantalla

* NO `else` se cumple tampoco esa condición entonces haz esto:

  `else{}` y mostrará `{console.log("El número 2 es mayor que número 1");}`



~~~js
let number1 = 2;
let number2 = 6;

console.log("\n************* if / else **************\n");

if (number1 > number2 && number2 > 5) {
  console.log("El número 1 es mayor que número 2");
}

  else if( number1 == number2 || number1 < 3){
    console.log("Los números son iguales");
  }

    else {
       console.log("El número 2 es mayor que número 1");
    }

Los números son iguales
~~~
