# Valores booleanos y operadores

Estos valores booleanos básicamente viene en ``true`` o ``false`` porque nada más pueden tener esos 2 estados o boolean y estas condiciones las podemos en flujos con operadores lógicos y los flujos condicionales.

## Operadores

Con las condicionales se pueden usar los operadores lógicos **"< > = == === !="** y cada una tiene una funcionalidad de comparación entre elementos.

~~~JS
console.log("\n************* Condicionales **************\n");

console.log(numero1 != numero2);
~~~
Ej: Veamos las variables y la condición del procedimiento

~~~JS
var numero1 = 5;
let numero2 = 17;

console.log(numero1 != numero2);
~~~
En esta condicional le estamos preguntando al algoritmo si numero1 es diferente a numero2 y sale `true` porque realmente 5 es diferente a 17.

Ahora veamos otra condicional.

~~~js
var numero1 = 5;
let numero2 = 17;

console.log(numero1 > numero2);
~~~

En esta condicional estamos preguntando si numero1 es mayor a numero2, por lo tanto: 5 es mayor a 17? `falso`.

Intentemos diferentes casos:

~~~js
console.log(numero1 === numero1);
console.log(numero1 < numero2);
console.log(numero3 != numero2);
~~~

Con estas condicionales deberían ser todas true, porque en todas se cumplen.

estas condicionales las podemos estar utilizando para que nos regrese `true` o `false` y basado en eso hacer nuestros ciclos condicionales.

## **``== ``o ``===``**

La diferencia entre ``==`` e ``===`` es que el primero solo revisa los valores, por lo que no es muy exacto y el otro no solo revisa los valores, también revisa los tipos de datos.