# Ciclo for con iteración controlada

Se refiere a que nosotros tenemos un `for`, a este `for` nosotros le vamos a decir los argumentos que queramos, para hacer las cosas necesarias:

~~~js
console.log("\n************* For **************\n");
// variable para for que comienza en 0
let numeroFor = 0

// de 0 hasta menor o igual a 12; y si cumple 0 = 0 + 1 eh imprime el resultado
for (numeroFor ; numeroFor <= 12; numeroFor = numeroFor + 1) {
  console.log(numeroFor);
}

// una vez que deje de cumplirse el ciclo termina, y aquí muestra este mensaje en consola
console.log("Aquí salimos del for " + numeroFor);

~~~

Podemos agregar que los **``;``** son las condiciones de nuestro ciclo: desde donde `for (numeroFor ; ` hasta donde `numeroFor <= 12;` y con que espacio le vamos a ir sumando `numeroFor = numeroFor + 1) {` en todos los espacios deben ir básicamente la misma variable, en este caso dijimos: desde 0 hasta 12 irás sumando de uno en uno y cada vez que cuente lo que está dentro del bloque de código nos enseñará el proceso, en este caso con un `{console.log(numeroFor);}` y una vez termine el ciclo entonces nos imprimirá el resultado final `console.log("Aquí salimos del for " + numeroFor)` que será **13** porque recordemos que la condición es `numeroFor <= 12;` así que una vez que el contador llega a ser <= a **12** le suma 1, entonces se vuelve **13** y al no cumplir la condición `numeroFor <= 12;` se sale del ciclo e imprime el último número al que llego, en este caso **13**

~~~js
console.log("\n************* For **************\n");
let numeroFor = 0
for (numeroFor ; numeroFor <= 12; numeroFor = numeroFor + 1) {
  console.log(numeroFor);
}
console.log("Aquí salimos del for " + numeroFor);

 0
 1
 2
 3
 4
 5
 6
 7
 8
 9
 10
 11
 12
 Aquí salimos del for 13
~~~
Como refuerzo del ejemplo, si nosotros quisiéramos que el resultado sea **12** debemos indicar que la condición sea "menor a" en lugar de "menor o igual a" `numeroFor < 12`
~~~js
console.log("\n************* For **************\n");

let numeroFor = 0
for (numeroFor ; numeroFor <= 12; numeroFor = numeroFor + 1) {
  console.log(numeroFor);
}
console.log("Aquí salimos del for " + numeroFor);

 0
 1
 2
 3
 4
 5
 6
 7
 8
 9
 10
 11
 Aquí salimos del for 12
~~~

Como pudimos notar, la diferencia con respecto a los anteriores ciclos es que en lugar de tener dentro del bloque de código la condición simplemente la tenemos antes del bloque de código lo que hace "más fácil" en cuestiones de en qué momento debemos detenernos. Pero en otra realidad o en el mundo real tanto `while` como `do while` no son tan utilizados, por la parte del procesamiento que necesitan para poder cumplir las diferentes condiciones, así que normalmente se utilizan más los `for` u otros tipos de estructuras como `map`

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/012_cicloDeIteracionMinimo.md "Ciclo condicional de una iteración mínimo") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/014_evitarAnidarCondicionales.md "Opciones para evitar anidar condicionales")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")