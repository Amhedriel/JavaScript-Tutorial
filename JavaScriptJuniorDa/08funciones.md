# Funciones
[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/007.1forInOf.md "Array elements")
[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/0)

---

* [Definición](#definición "")
* [Crear funciones](#crear-funciones "")
* [Notación de declaración](#notación-de-declaración "")
* [Funciones Flecha](#funciones-flecha "")
    * [Vinculación](#vinculación-crear-funciones-asignándolas-en-variables "")
* [***`return`***](#return "")
* [Parámetros](#parámetros "")
* [***`scope`***](#scope "")

## Definición

Una función es una porción de código, que se le pone un nombre digamos "sumar", porque ese código lo que hace es sumar, normalmente para sumar se escribiría todo el bloque de código nuevamente, pero en una función el nombre que le coloquemos será el que ejecute todo el código de vuelta.

El concepto de envolver en una pieza de programa en un valor tiene muchos usos. Esto nos da una forma de estructurar programas más grandes, reducir la repetición, asociar nombres con subprogramas, y de aislar estos subprogramas unos con otros.

Una definición de función es una vinculación regular donde el valor de la vinculación es una función. Por ejemplo, este código define *cuadrado* para referirse a una función que produce el cuadrado de un número dado:

```js
const cuadrado = function (x) {
  return x * x;
};

console.log(cuadrado(12));
```
---

## Crear funciones
Una función es creada con una expresión que comienza con la **palabra clave** `function`. Las funciones tienen un conjunto de **parámetros** (en este caso solo ``(x)``) y un **cuerpo** o **bloque de código**, que contiene las declaraciones `{ return x * x; };` que deben ser ejecutadas cuando se llame a la función `console.log(cuadrado( ));`.

Una función puede tener múltiples parámetros o ningún parámetro en absoluto. En el siguiente ejemplo, `hacerSonido` no lista ningún nombre de parámetro, mientras que **potencia** enumera dos

```js
const hacerSonido = function() {
  console.log("Pling!");
};
hacerSonido(); // > Pling!

const potencia = function(base, exponente){
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
};

console.log(potencia(2, 10)); // > 1024
```
Los parámetros de una función se comportan como vinculaciones regulares, pero sus valores iniciales están dados por el **llamador** de la función, no por el código en la función en sí.

## Notación de declaración

Hay una forma ligeramente más corta de crear una vinculación de función. Cuando la palabra clave `function` es usada al comienzo de una declaración, funciona de una manera diferente.

```js
function cuadrado( x ) {
  return x * x;
}
```
Esta es una *declaración* de función. la declaración define la vinculación `cuadrado` y la apunta a la función dada. Esto es un poco más fácil de escribir, y no requiere un punto y coma después de la función.

Hay una sutileza con esta forma de definir una función.

```js
console.log("El futuro dice: ", futuro());

function futuro(){
  return "Nunca tendrán autos voladores.";
}

// > El futuro dice: Nunca tendrán autos voladores.
```
Veamos otro ejemplo más:

```js
function saludar() {
  respuesta = prompt("¡Hola!, ¿Cómo fue tu día?");
  if (respuesta == "bien") {
    alert ("Me alegra");
  } else {
    alert("Una pena" );
  }
};
```
Con esto ya tendríamos una función, lo que hace es saludar cada vez que se la ejecuta
```js
saludar();
```
La idea es que ahorramos código, en lugar de llamar ese bloque de código completo cada vez que necesitemos llamar a alguien podremos hacerlo simplemente llamando a la función (`saludar()`).

## Funciones Flecha

Existe una tercera notación para funciones, que se ve muy diferente de las otras. En lugar de la palabra clave `function`, usa una flecha `=>`.

```js
const potencia = (base, exponente) => {
  let resultado = 0;

  for (let cuenta = 0; cuenta < exponente; cuenta++){
    resultado += base;
  }

  return resultado;
}

console.log( potencia(5,10) );

// > 50
```
La flecha viene después de la lista de parámetros, y es seguida por el cuerpo de la función. Expresa algo así como "esta entrada (los parámetros `(base, exponente)`) produce este resultado (el cuerpo( `for` ))"

Cuando solo haya un solo nombre de parámetro, los paréntesis alrededor de la lista de parámetros pueden ser omitidos. Si el cuerpo es una sola expresión, en lugar de un bloque en llaves, esa expresión será retornada por parte de la función. Así que estas dos definiciones de `cuadrado` hacen la misma cosa:

```js
const cuadrado1 = (x) => { return x * x; };

console.log(cuadrado1(5)); // > 25
// ---------
const cuadrado2 = (x) => x * x;

console.log(cuadrado1(5)); // > 25
```
Cuando una función de flecha no tiene parámetros, su lista de parámetros es solo un conjunto vacío de paréntesis.

```js
const bocina = () =>{
  console.log("Toot");
};

bocina();

// > Toot
```
Oh para abreviar:
```js
const bocina = () => console.log("Toot");

bocina();

// > Toot
```
Ambas funciones, `flecha` y `function`, hacen casi lo mismo, menos por un detalle menor que veremos más adelante, se añadieron para que fuera posible escribir pequeñas expresiones de funciones de una manera menos verbosa.

```js

const saludar = nombre => document.write(`¡ Hola ${nombre}! ¿Como estás?`);

saludar ("David");

// > ¡ Hola David! ¿Como estás?
```

---

## ***Vinculación, Crear funciones asignándolas en variables***
Cada vinculación tiene un *alcance*, que corresponde a la parte del programa en donde la vinculación es visible. Para vinculaciones definidas fuera de cualquier función o bloque, el alcance es todo el programa, se puede referir a estas vinculaciones en donde sea que quieras. Estas son llamadas globales.

Vinculaciones declaradas con `let` y `const` son, de hecho, locales al *bloque* donde estén declarados, así que si creas uno de esas dentro de un ciclo, el código antes y después del ciclo no puede "verlas".

La excepción es cuando vinculaciones múltiples tienen el mismo nombre, en ese caso, el código solo puede ver dentro de la función `dividirEntreDos` se refiera a `numero`, estará viendo su *propio* `numero`, no el `numero` de alcance global.


```js
const dividirEntreDos = function(numero) {
  return numero / 2;
}
let numero = 10; // > 50
console.log(dividirEntreDos(100)); 

console.log (numero); // > 10
```
Podemos verlo de esta forma
```js
const dividirEntreDos = function(numero) {
  return numero / 2;
}
// let numero = 10;
console.log(dividirEntreDos(100)); 

// console.log (numero);
// > 50
```
Y
```js
let numero = 10;

console.log (numero); 

// > 10
```
pero continuando con el ejemplo de `saludar` podemos decir que:
```js
let saludar = function() {
  respuesta = prompt("¡Hola!, ¿Cómo fue tu día?");
  if (respuesta == "bien") {
    alert ("Me alegra");
  } else {
    alert("Una pena" );
  }
};
```
Estaríamos guardando la función en una variable que se llama ``saludar``.

## ***`return`***
En una función, "una cosa el lo que hace, y otra cosa es lo que retorna".

Recordemos que hasta ahora las funciones tienen 2 partes, una donde las **declaramos** y otra donde las **llamamos** y tiene que cumplir un objetivo. No debemos crear una función que haga de todo, debemos dividirlo en partes pequeñas, escalables y mantenibles.

El `return` es para que nos devuelva un valor, para que el bloque de código se convierta en un **tipo de dato**, es para que la función no quede en nada.

```js
function saludar() {
  alert("hola");
};

let saludo = saludar();

document.write(saludo);

// > hola
// > undefined
```
Si no regresamos un **tipo de dato** específico por parte de nuestra función, nos devolverá un **tipo de dato** ``undefined``, porque prácticamente la función `saludar()` no nos está devolviendo ningún **tipo de dato**, pero si colocamos un retorno ``return``
```js
function saludar() {
  alert("hola");
  return "La función se ejecuto correctamente";
};

let saludo = saludar();

document.write(saludo);

console.log(typeof(saludar));

// > hola
// > La función se ejecuto correctamente
// > function
```
Veamos, la variable `saludo` se vuelve `saludar()` y este `saludar()` tiene como valor lo que `retorna`. Como `saludar()` está retornando esto `return "La función se ejecuto correctamente";` entonces `saludo` será esto `"La función se ejecuto correctamente"`. entonces, `saludar()` es igual a lo que la función retorna `return "La función se ejecuto correctamente";`.

Si la función retornara 3 en pantalla nos aparecería 3 `return 3;`

Algo que también debemos saber es que cuando la función retorna un valor *finaliza la función*, algo parecido al `break`

## Parámetros
Las funciones no son funciones sin parámetros, sin que puedan variar lo que hacen.

Los parámetros son variables que se declaran y crean en una función, encerradas entre paréntesis y separadas por coma.

Supongamos que tenemos una función que suma 2 números:

```js
let num1 = 23;
let num2 = 12;

function suma(){
  let res = num1 + num2;
  console.log(res);
}

suma();

// > 35
```
Nada del otro mundo, sin embargo, que pasaría si quisiéramos sumar valores distintos, sin tener que estar cambiando las variables a mano, hacer la suma llamando `suma()`. Para eso están los parámetros.
```js
// nosotros diremos que num1 se definirá en el paréntesis y num2 también se definirá entre el paréntesis
function suma(num1, num2){
  let res = num1 + num2;
  console.log(res);
}

// llamamos a la función con los números que nosotros queremos sumar
suma(12, 23); // > 35

// Veamos que en lugar de definir las variables, nosotros definimos las variables cuando llamamos a la función
suma(22, 23); // > 45
```
De esta manera lo hacemos de forma dinámica. Hacer esto `(num1, num2)` y esto `suma(12, 23)` es igual a:

```js
// let num1;
// let num2;
// las variables las declaramos entre los paréntesis de la función
suma(num1, num2)

// llamamos a la función con los parámetros que nosotros queremos
suma(12, 23);
// al colocar los valores entre estos paréntesis estamos inicializando los parámetros con estos valores, es como si:
// num1 = 12;
// num2 = 23;
```
De esta manera nosotros estamos declarando las variables para que trabajen dentro de la función, y cuando nosotros le pasamos un valor al llamar la función es inicializar la variable que trabaja dentro de la función.

```js
function suma(num1, num2){

  // retornaremos el valor de la variable "res"
  return res = num1 + num2;
}

suma(12, 23);
document.write(res);

// > 35
```
Con `strings`
```js
function saludar(nombre) {
  let frase = `¡ Hola ${nombre}! ¿Como estás?`;
  document.write(frase);
}

saludar("David");

// > ¡ Hola David! ¿Como estás?
```
O también podemos convertir la variable en global para que se muestre por fuera de la función.
```js
function saludar(nombre) {
  return frase = `¡ Hola ${nombre}! ¿Como estás?`;

}

saludar("David");
document.write(frase);

// > ¡ Hola David! ¿Como estás?
```


## Scope
Es cuando creamos una variable en la función, por fuera de la función no existe, el **scope** de las funciones es regional, solo son globales si se utiliza `var`, por eso es recomendable declarar las variables con `let` en nuestras funciones.

Las funciones tiene un **scope** global.


---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/007.1forInOf.md "Array elements") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/0 "Bucles for in/of")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#funciones "Ir al título")