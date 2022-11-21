# Función exponencial

En el primer capitulo vimos una función que realiza la operación de variable al **cuadrado**, pero si nosotros quisieramos definir quién será la base y quién el exponente por ejemplo 4 <sup><small>10</small></sup>, si esto lo tuviéramos que hacer sin una función, deberíamos estar colocando la base **4** multiplicar por si misma la cantidad de veces que tenga el exponente **10**.

Eso es un *ciclo* básicamente y son los que acabamos de ver, pero ahora vamos a poner eso dentro de una función.

~~~js
const exponencial = function (base, exponente) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

console.log(exponencial(4,3))

64
~~~

Tenemos nuestra constante exponencial y esto es una función la cual recibe 2 parámetros, las cuales va a recibir primero una base y va a recibir el exponente.

Entonces nuestra `const exponencial = function (base, exponente) {}` nuestro resultado va a ser 1 `let resultado = 1;` porque va a ser 1?, porque es al que vamos a estar multiplicando (en matemáticas, cualquier número multiplicado por uno es el mismo número) y después tenemos: `for (let i = 0; i < exponente; i++){}` **for** desde **let** la **i = 0** esta es la variable de iteración, desde `i = 0` hasta, recordemos que el `;` dentro del `for` significa **hasta** `i < exponente;` y esto va a tener un salto de iteración de ``i++`` que este **i++** significa: *"a la variable de iteración i se le debe sumar 1"*, que sería lo mismo que: `numeroFor = numeroFor + 1` (i-- es igual a i - 1), ahora bien, lo que intentamos hacer dentro de este `for` es intentar llegar a este exponente `exponente;` lo que iremos sumando de uno en uno, una vez tengamos nuestra primera iteración entonces vamos a multiplicar nuestro resultado por la base `resultado *= base;`.

En el ejemplo nuestra base es 4 y el exponente es 3 o sea, cuatro al cubo 4<sup><small>3</small></sup>

Cómo funciona con 4 al cubo

~~~js
// Creamos la constante "exponencial" donde se almacenará los resultados de (base, exponente)
// Donde base será 4 y exponente será al cubo (3) porque estamos pidiendo "exponencial de (4, 3)"
const exponencial = function (base, exponente) {
  // Entonces comenzaremos con el contador "let resultado = 1;" para que empiece a contar el exponente desde el 1 hasta, en este caso 3
  let resultado = 1;
  // Vamos al "for" que consultará "let i = 0;" desde i es igual a 0 a i es menor a 3, pregunta
  // "i < exponente;" la variable de iteración leet es menor a exponente requerido? (3)
  // Como i vale 0 entonces i es menor a exponente (3) por lo tanto i debe sumar 1 o sea "i++"
  // Que es lo mismo a i que vale 0 se suma 1, i ahora es igual a 1
  for (let i = 0; i < exponente; i++){
        // Entonces, "resultado *= base;" resultado que vale 1 por la base es igual a 4
        resultado *= base;
  };

    // Al llegar hasta acá y aún cumple el "for" repite el ciclo de iteración
    // i ahora es igual a 1; si i que vale 1 es menor a exponente que vale 3 entonces i suma uno más
    // i++, entonces i ahora vale 2
  for (let i = 1; i < exponente; i++){
        // Entonces, "resultado *= base;" resultado que ahora vale 4 por la base que es 4
        // Ahora resultado pasa a valer 16
        resultado *= base;
  };
    // Al llegar hasta acá y aún cumple el "for" repite el ciclo de iteración
    // i ahora es igual a 2; si i que vale 2 es menor a exponente que vale 3 entonces i suma uno más
    // i++, entonces i ahora vale 3
    for (let i = 2; i < exponente; i++){
        // Entonces, "resultado *= base;" resultado que ahora vale 4 por la base que es 16
        // Ahora resultado pasa a valer 64
        resultado *= base;
  };

    // Al llegar hasta acá y ya no cumple el "for" no repite del todo el ciclo de iteración
    // i ahora es igual a 3; si i que vale 3 ya no es menor a exponente que vale 3 entonces concluye el programa y salta a return

    for (let i = 3; i < exponente; i++){

        resultado *= base;

    // Al concluir con el ciclo "for" entonces nos retorna o regresa el resultado
    return resultado;
};
// con "console.log()" imprimiremos en pantalla el resultado de la variable "const exponencial = function (base, exponente) {}
// que sería "exponencial(4,3)"
console.log(exponencial(4,3));

// el resultado de la exponencial es :
64

// Fin del programa
~~~

Otra forma de poder mostrarlo sería:

~~~js
const exponencial = function (base, exponente) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
};


let resultadoExponencial = exponencial(4, 3);
console.log(resultadoExponencial);

64
~~~

Con otro exponencial:

~~~js
const exponencial = function (base, exponente) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
};


let resultadoExponencial = exponencial(2, 17);
console.log(resultadoExponencial);

131072
~~~

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSMedio/001.1_llamarUnaFunci%C3%B3n.md "Llamar") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSMedio/003 "")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")