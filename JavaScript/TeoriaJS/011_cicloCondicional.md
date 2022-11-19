# Ciclo condicional

Que van a hacer los ciclos? van a repetir procesos una y otra, otra, otra... vez y tenemos diferentes tipos de ciclos empezando por:

## **`while`**

`while` significa "mientras", el ciclo continúa siempre y cuando se cumpla una condición ``while (numberWhile <= 12) {}`` podemos pensar que este `while` fuera un `if` cíclico:
~~~js
// variable let
let numberWhile = 5;
// Empezando While
while (numberWhile <= 12) {
  console.log(numberWhile);
  numberWhile = numberWhile + 2;
}
console.log("Aquí ya salió del while " + numberWhile);
~~~

Este ``while`` nos dice que: mientras la variable `numberWhile` sea `<= 12` entonces imprimiremos el `numberWhile` con `console.log` y a este `numberWhile` le sumaremos `+ 2`; una vez el ciclo deje de cumplirse entonces el `while` dejará de repetir el código y saltará al siguiente bloque `console.log("Aquí ya salió del while " + numberWhile);`, en este caso mostrando en pantalla "`Aquí ya salió del while 13`"

~~~js
console.log("\n************* While **************\n");
let numberWhile = 5;
while (numberWhile <= 12) {
  console.log(numberWhile);
  numberWhile = numberWhile + 2;
}
console.log("Aquí ya salió del while " + numberWhile);

5
7
9
11
Aquí ya salió del while 13
~~~
