# Ciclo condicional de una iteración mínimo

A diferencia del ciclo condicional `while`, este es un ciclo condicional con al menos una iteración por lo tanto `while`: ingresa y luego pregunta; en cambio con `do while`: pregunta y luego ingresa

## **``do while``**

~~~js
console.log("\n************* Do While **************\n");
let numeroDoWhile = 22;
// ingresando
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
// arriba, preguntando while (numeroDoWhile < 20);
console.log("Aquí sale del Do While " + numeroDoWhile);

24

Aquí sale del Do While 24
~~~

Lo que sucede es que: de la variable `let numeroDoWhile = 22;` que vale 22 ingresa al bloque de `do {}` y realiza el procedimiento `do { numeroDoWhile = numeroDoWhile + 2;console.log(numeroDoWhile); }`, **ingresa** `let` que vale 22 y `do` le asigna otro valor `numeroDoWhile = numeroDoWhile + 2;` por lo tanto **22 + 2 = 24** ahora `numeroDoWhile = 24` con este nuevo valor asignado por el bloque de `do {}` *(lo que indica que ingresó el procedimiento)* procede recién a comparar valores **"preguntar"** `while (numeroDoWhile < 20);` dado que el valor de ``numeroDoWhile;`` ahora es 24, no cumple con la comparación, por lo que termina el ciclo e imprime el valor actual de 24 `console.log("Aquí sale del Do While " + numeroDoWhile);`

Veamos otro ejemplo:
~~~js
console.log("\n************* Do While **************\n");
let numeroDoWhile = 12;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aquí sale del Do While " + numeroDoWhile);
14
16
18
20
Aquí sale del Do While 20
~~~

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/011_cicloCondicional.md "Ciclo condicional") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/013_cicloForItercacionControlada.md "Ciclo for con iteración controlada")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")