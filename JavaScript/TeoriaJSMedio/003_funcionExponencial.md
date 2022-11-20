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





~~~js
~~~
~~~js
~~~
~~~js
~~~
~~~js
~~~



---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSMedio/001.1_llamarUnaFunci%C3%B3n.md "Llamar") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSMedio/003 "")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")