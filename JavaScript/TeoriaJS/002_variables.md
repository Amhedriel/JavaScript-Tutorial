# **Variables**

* [Variables en JavaScript](#variables-en-javascript)
* [Cómo se definen variables](#cómo-se-definen-variables)
- [Sintaxis o Nombrar Variables](#sintaxis-o-nombrar-variables)
    - [Nombres descriptivos](#nombres-descriptivos)
    - [Índices y contadores](#índices-y-contadores)
    - [Constantes, clases y variables](#constantes-clases-y-variables)
    - [**`camelCase`**](#camelcase)
* [Case Sensitive](#case-sensitive)
* [Tipos de datos](#tipos-de-datos)
* [Constantes](#constantes-const)
* [Number](#number)
* [Strings](#strings)
* [Boolean](#boolean)
* [Symbol](#symbol)
* [Undefined](#undefined)
* [Bigint](#bigint)
* [Null](#null)

## **Variables en JavaScript**

Una **variable** es un espacio que nosotros guardamos en memoria como un "almacén con un nombre" para guardar datos, y dependiendo de la **variable** pueden cambiar.

Cuando hablamos en cosas de programación nosotros vamos a tener cosas que son **variables**, estas variables son como cajas a los que le podemos asignar un valor y ese valor cambiará con respecto a cómo vayamos modificando el programa.

## Cómo se definen variables

Nosotros en programación tenemos lo que e definen como palabras reservados, que són comandos que utilizaremos para hacer uso dentro del desarrollo.

En nuestro caso estamos usando JavaScript y para definir una variable debemos usar la palabra reservada **var** que está casi en desuso hoy en día, pero también tenemos otra llamada **let** que es la más utilizada.

* Las variables se pueden **declarar** con la palabra reservada ***"var"***, estas variables se pueden considerar como globales.
* También se pueden **declarar** con la palabra reservada ***"let"*** y estas serán usadas dentro de un bloque de código.
* Igualmente está la **declaración** con la palabra reservada ***"const"*** y se usarán cuando el valor no cambie.

Para generar una **variable** en JavaScript, generalmente usamos `let`.

```js
    let nombreDeLaVariable;
```
Tras declarar una variable, puedes asignarle un valor:

```js
nombreDeLaVariable = "Bob";
```
Puedes hacer las dos cosas en la misma línea si se necesita:

```js
let nombreDeLaVariable = "Bob";
```
Podemos obtener el valor de la variable llamándola por su nombre:

```js
nombreDeLaVariable;
```
Después de haberle dado un valor a la variable, se puede volver a cambiarlo:

```js
let nombreDeLaVariable = "Bob";
nombreDeLaVariable = "Steve";
```
Otro ejemplo:

La siguiente declaración genera (declara, define) una variable con el nombre `message`:

```js
let message;
```
Ahora podemos introducir datos en ella al utilizar el operador de asignación `=`:

```js
let message;

message = "Hola";
```
La cadena ahora está almacenada en el área de la memoria asociada con la variable. La podemos acceder utilizando el nombre de la variable:

```js
let message;
message = "Hola";

alert(message); // Muestra en pantalla emergente el contenido de la variable
```
Para ser concisos, podemos combinar la declaración de la variable y su asignación en una sola línea:

```js
let message = "Hola"; // Define una variable "let message" y le asigna el valor "Hola"

alert(message); // Muestra en pantalla emergente el contenido de la variable
```
También se puede declarar variables múltiples en una sola línea:

```js
let user = "John", age = 25, message = "Hola";
```
Esto puede parecer más corto, pero no lo recomendamos. Por el bien de la legibilidad usar una línea por variable.

```js
let user = "John";
let age = 25;
let message = "Hola";
```
Algunas personas definen múltiples en estilo multilínea:

```js
let user = "John",
    age = 25,
    message = "Hola";
```
Estilo coma primero

```js
let user = "John"
    , age = 25
    , message = "Hola";
```
Técnicamente, todas estas variantes hacen lo mismo. Así que, es cuestión de gusto personal y preferencia estética.

También podemos declarar dos variables y copiar datos de una a la otra.

```js
let hello = "Hola mundo!";

let message;

// Se copia "Hola mundo" de hello a message
message = hello;

// Veamos, ambas variables contienen los mismos datos
alert(hello); // Hola mundo!
alert(message); // Hola mundo!
```

|VARIABLE|DESCRIPCIÓN       |EJEMPLO   |
|---     |---               |---       |
|`string`|Esto es una secuencia de texto conocido como cadena. Para indicar que la variable es una cadena, el valor se debe escribir entre comillas|` let miVariableCadena = "Bob"; `|
|`number`|Esto es un número. Los números no tienen comillas|` let miVariableNumeral = 10; `|
|`boolean`|Tienen valor verdadero/falso. `true/false` son palabras especiales en JS, y no necesitan comillas|` let miVariableBooleano = true; `|
|`array`|Una estructura que permite almacenar varios valores en una sola referencia|` let miVariable =[1, "Bob", "Steve", 10];` Se llama a cada miembro del `array` así: `miVariable[0]`, `miVariable[1]`, etc.|
|`object`|Básicamente cualquier cosa. todo en JavaScript es un objeto y puede ser almacenado en una variable. mantén esto en mente mientras aprendes. |`let miVariable = document.querySelector('h1');`|

```
```
Entonces, ¿para qué necesitamos las variables? las variables son necesarias para hacer cualquier cosa interesante en programación. Si los valores no pudieran cambiar, entonces no podrías hacer nada dinámico, como personalizar un mensaje de bienvenida de un usuario que visita tu página, cambiar la imagen que se muestra en una galería de imágenes, etc.

---

## Sintaxis o Nombrar Variables 

Una de las tareas más sencillas, pero a la misma vez de las más complejas, es la de ponerle un ***buen*** nombre a una variable (*o a cualquier otro elemento de programación que necesite un nombre*). Los programadores necesitan utilizar variables en sus códigos, y además que estas variables tengan nombres que representen claramente la información que contienen.

Dejar nombres bien claros es muy importante para nosotros, ya que si necesitamos volver a trabajar con dicho código (*o hacer modificaciones*) nos resultará mucho más fácil. Sin embargo, esto cobra aún mayor importancia si otras personas tienen que revisar o modificar nuestro código, ya que ellos no están tan familiarizados con nuestro código y les ayudará mucho a tardar menos tiempo en comprenderlo.

Los nombres de las variables tienen ciertas reglas, no se puede escribir cualquier cosa, si queremos declarar una variable principalmente lo haremos con el método de `camelCase` empezando con minúscula, pero también debemos saber que se puede iniciar con mayúsculas para `clases` generalmente, guión bajo `_`, signo de dólar `$` o todas `MAYÚSCULAS` pero esta última para `const`:

```js
let variable = "Nombre"
let Variable = "Nombre"
let _variable = "Nombre"
let $variable = "Nombre"
const VARIABLE = "Nombre"
```
Son las únicas maneras de poder declarar una variable de cualquier tipo, sin embargo algunas tienen sus convenciones y el para qué se utilizan.

Veamos unas **convenciones** a la hora de establecer nombres en nuestro código. No es obligatorio pero es muy recomendable.

### **Nombres descriptivos**

Una mala costumbre habitual cuando se empieza en la programación, es darle un nombre **poco descriptivo** de la información que contiene. simplemente porque es más corto y manejable.

Es muy común tener que volver hacia atrás en nuestro código a cambiar nombres de variables porque hemos cambiado de parecer o porque se nos ha ocurrido un nombre mejor. Esto seguirá ocurriendo hasta que adquirimos cierta experiencia.

> Evitar nombres poco claros:
>
> ``tmp``, ``a``, ``b2``, ``variable2``, etc..

### **Índices y contadores**

A lo anterior, hay una pequeña excepción. Cuando trabajamos en bucles for (o bucles en general), donde el ámbito de una variable que actúa como contador (índice) es muy reducido (esa variable solo existe y afecta al interior del bucle), se suelen utilizar nombres de variables cortos para ser más productivo y claro.

> Las variables que actúan como contador suelen nombrarse con una letra minúscula
> empezando desde ``i`` (*de índice*): ``i``, ``j``, ``k``... 
> A veces, también se usan letras como ``a``, ``b``, ``c``... o la inicial minúscula de lo que representan:
> **``c`` para un contador, ``p`` para una posición**, etc...

### **Constantes, clases y variables**

Las ``constantes`` son variables especiales que no varían su valor a lo largo del programa:

La convención adoptada con las constantes es que deben ir siempre en **MAYÚSCULAS**.

Las ``clases`` son estructuras de código más complejas que veremos más adelante. Es importante recordar que los nombres de las clases se escriben siempre capitalizadas:

**Mayúsculas** la primera letra y el resto en minúsculas.

Las variables, por último, siempre deben empezar por letra minúscula. Independientemente de que sea ``variable``, ``constante`` o ``clase``, su nombre nunca podrá empezar por un ***número***, sino que debe empezar por una letra o carácter. Si lo compruebas, verás que es imposible nombrar una variable que empiece por número.

### ***`camelCase`***

Al margen del nombre que utilicemos para nombrar una variable, función u otro elemento, tenemos el estilo o convención que utilizaremos para escribir nombres compuestos por varias palabras:

Primera palabra, minúsculas. El resto, minúsculas (salvo primera letra). La más usada en JS.

``precioProducto126``

---

## Case Sensitive

Algo que debemos saber es que JavaScript, el término "caseSensitive" se refiere a la sensibilidad de las variables y los identificadores (nombres de variables, funciones, etc.) a las diferencias de mayúsculas y minúsculas.

Cuando una variable es case sensitive, significa que se distingue entre mayúsculas y minúsculas al utilizarlo en el código. esto implica que "variable" y "Variable" se consideran 2 identificadores diferentes en JavaScript.

---
## Tipos de datos

Ahora veremos los tipos de datos que se pueden almacenar en una variable:

* Seis tipos de datos **primitivos**, controlados por el `operador typeof`

    * [`number`](#number)      -> ``typeof instance === "number"``
    * [`string`](#strings)     -> ``typeof instance === "string"``
    * [`boolean`](#boolean)    -> ``typeof instance === "boolean"``
    * [`symbol`](#symbol)      -> ``typeof instance === "symbol"``
    * [`undefined`](#undefined)-> ``typeof instance === "undefined"``
    * [`bigint`](#bigint)      -> ``typeof instance === "bigint"``

* [`null`]() -> ``typeof instance === "object"``. Tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra `null`;

* ``object`` -> ``typeof instance === "object"``. Tipo estructural especial que no es de "datos" pero para cualquier instancia de objeto *construido* que también se utiliza como estructuras de datos: ***new*** `Object`, ***new*** `Array`, ***new*** `Map`, ***new*** `Set`, ***new*** `WeakSet`, ***new*** `Date` y casi todo lo hecho con la palabra clave ***new***;

* `function`: Una estructura sin datos, aunque también responde al operador `typeof`: `typeof instance === "function"`. Esta simplemente es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor `Object`.

Tengamos en cuenta que el único propósito valioso del uso del operador `typeof` es verificar el tipo de dato. Si deseamos verificar cualquier "Tipo Estructural" derivado de `object`, no tiene sentido usar ``typeof`` para eso, ya que siempre recibiremos "``object``". La forma correcta de comprobar qué tipo de Objeto estamos usando es la palabra clave `instanceof`. Pero incluso en ese caso, puede haber conceptos erróneos.
    
---
~~~JS
console.log("\n************* Variables **************\n");
var numero1 = 4;
let numero2 = 6;
const numero3 = 0;
~~~

Veamos un ejemplo de var/let y otro de const:

~~~js
numero1 = numero1 + 2
3
numero3 = numero3 + 2
VM449:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:9
~~~
Como vemos una variable constante no puede cambiar de valor, por lo tanto al tratar de asignarle `=` otro valor nos muestra un error, por lo tanto una constante no se puede modificar.

Ahora si nosotros queremos ver las formas de imprimir acá:
Lo que haremos es concatenar `+`
    console.log("Número 1: " + numero1 + " Número 2: " + numero2);
`numero1` es la `var numero1 = 4;` y `numero2` es `var numero2 = 6;` y así podemos estar imprimiendo las variables `console.log("Número 1: " + "Número 2: ");`

## Constantes `const`

Las variables **constantes** presentan un ***ámbito de bloque*** (`block` *scope*) tal y como lo hacen las variables definidas usando la instrucción `let`, con la particularidad de que el valor de una **constante** no puede cambiarse a través de la reasignación. Las **constantes** ***NO se pueden re declarar***.

Al declarar una variable con `const` se crea una constante cuyo alcance puede ser **global o local para el bloque en el que se declara**. Es necesario **inicializar** la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara.

Una constante **NO puede compartir su nombre** con una función o variable en el mismo ámbito.

Revisar documentación oficial de la MDN para las instrucciones de cómo se comporta `const`.

Para declarar una variable constante (inmutable) use `const`:

```js
const myBirthday = "12.8.1983";
```
Las variables utilizando `const` no pueden ser alterada. Al intentarlo causaría un error:

```js
const myBirthday = "12.8.1983";

myBirthday = "01. 01. 1998"; // Error no se puede reasignar la constante
```

---
## Number

El tipo `number` en JavaScript representa tanto números enteros (int) como de punto  flotante (float). En otros lenguajes de programación puede existir diferentes tipos numéricos, por ejemplo: Integers, Floats, Doubles, Bignums, etc.

El constructor `Number` contiene constantes y métodos para trabajar con número. Valores de otro tipo pueden ser convertidos a números usando la función `Number()`.

```js
let n = 123;
n = 12.345;
```

Operaciones para números, `*`, `/`, `+`, `-`, y demás.

Además de los números comunes, existen los llamados "valores numéricos especiales" que también pertenecen a este tipo de datos: `Infinity`, `-Infinity` y `NaN`.

* `Infinity` representa el infinito matemático. Es un valor especial que es mayor que cualquier número.

Podemos obtenerlo como resultado de la división por cero:

```js
alert(1 / 0); // Infinity
```
O simplemente hacer referencia a él directamente:

```js
alert(Infinity); // Infinity
```
* `NaN` representa un error de cálculo. Es el resultado de una operación matemática incorrecta o indefinida, por ejemplo:

```js
alert( "no es un número" / 2); // NaN, tal división es errónea
```
Cualquier otra operación sobre `NaN` devuelve `NaN`:

```js
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log( "not a number" / 2 -1); // NaN
```
Por lo tanto, si hay un `NaN` en alguna parte de una expresión matemática, se propaga a todo el resultado (con una única excepción: `NaN ** 0` es `1`).

El `script` nunca se detendrá con un error fatal ("morir"). En el peor de los casos, obtendremos ``NaN`` como resultado.

---
## Strings
Las cadenas (Strings) son caracteres que pueden ser una frase o palabra y estas pueden darse con comillas dobles "", simples '' o invertidas ``
la diferencia es que con las invertidas podemos agregar variables dentro de la cadena con la sintaxis ${}

~~~js
console.log("\n************* Cadenas **************\n");
var frase1 = "Ejemplo comillas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);
~~~

---
## Boolean

---
## Symbol

---
## Undefined

las variables `undefined` son variables declaradas pero que no tienen un valor definido actualmente se la vamos a dar cuando la inicialicemos.

        let numero;

Es: hasta que encontremos un valor no está definida, existe en el programa pero no está definida.

---
## Bigint

---
## Null

Las variables ``null`` están definidas e inicializadas, le estamos indicando que está vacía.

        let numero = null;

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/001.1_estructuraDelCodigo.md "Estructura del código") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/003_strings.md "strings (cadenas)")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")