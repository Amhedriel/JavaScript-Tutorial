# Función cuadrado

Empecemos con "cuadrado", recordemos que tenemos distintas formas de ir definiendo una función y veremos una, la que más le gusta en 2da posición al Mission Commander.

~~~js
const cuadrado = function(x) {
    return x * x;
}
let numero = 4;
let numeroAlCuadrado = cuadrado(numero);
console.log(numeroAlCuadrado);
~~~

Veamos que: la constante `const cuadrado =` se recomienda que para las funciones se utilicen "**constantes**" que ahora se convierte en una función `function` lo que hace es definir que la constante cuadrado será un función  `const cuadrado = function (x) {}` la cual recibe en sus parámetros una `(x)` y nos regresará `{return x * x;};` que se encuentra en su bloque de código, y la palabra reservada `return` lo que nos devuelve un valor, en este caso nos devuelve el resultado de nuestra función, que aún no tiene un valor establecido.

Ahora bien, definiremos el número ***x*** como ***4*** `let numero = 4;` y cómo llamamos a las funciones, en este caso con esto `cuadrado(numero)`, esta es una función que sirve para elevar un número al cuadrado, esto podemos nosotros asignar a una variable: `let numeroAlCuadrado = cuadrado(numero);` entonces nosotros imprimiremos `console.log(numeroAlCuadrado)`.

Muy bien, a nuestra función le va a llegar un número `(x)`, entonces a este número x le vamos a retornar ``return x * x``; después del bloque de la función nosotros definimos el valor de `(x)` como 4 `let numero = 4;` después `let numeroAlCuadrado =` será asignado como la función `= cuadrado(numero)` lo que quiere decir: asignar a la variable *let numeroAlCuadrado* el valor de la función realizada de *cuadrado(numero)* recordemos que *cuadrado* es *x * x* lo que nos regresará en este caso un número, un valor que será el resultado del bloque de la función:

~~~js
let numero = 4;

const cuadrado = function(4) {
    return 4 * 4;
}
~~~

Que sería *4 * 4 (16)* por lo tanto según la función `cuadrado` y la variable ``numero`` serán asignados a una nueva variable `let numeroAlCuadrado` y queremos mostrar el valor de `numeroAlCuadrado` en pantalla.

~~~js
const cuadrado = function(x) {
  return x * x;
}
let numero = 4;
let numeroAlCuadrado = cuadrado(numero);
console.log(numeroAlCuadrado);

16
~~~

Probemos cambiando la variable `let numero = x;`

~~~js
const cuadrado = function(x) {
  return x * x;
}
let numero = 8;
let numeroAlCuadrado = cuadrado(numero);
console.log(numeroAlCuadrado);

64
~~~

# Función en la función

Ahora haremos una suma de un cuadrado mas otro cuadrado

~~~js
const cuadrado = function(x) {
  return x * x;
}
let numero = 8;
let numero2 = 19;
let sumaNumeroAlCuadrado = cuadrado(numero) + cuadrado(numero2);
console.log(sumaNumeroAlCuadrado);

425
~~~

Esta es la mejor forma de trabajar en lugar de estar replicando código.



---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJsMedio/README "Regresar a página anterior") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSMedio/001.1_llamarUnaFunci%C3%B3n.md "Llamada")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")