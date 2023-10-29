# 2. Variables
[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/001utilizarJavaScript.md "1. Formas de utilizar JavaScript") 
[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/002tiposDeDatos.md "Datos")

---
- [Concepto](#concepto)
- [Declarar](#declarar)
- [Inicializar](#inicializar)
- [Multiples variables](#multiples-variables)
- [``camelCase`` Nombrar Variables](#camelcase-nombrar-variables)
    - [Nombres descriptivos](#nombres-descriptivos)
    - [Índices y contadores](#índices-y-contadores)
    - [Constantes, clases y variables](#constantes-clases-y-variables)
    - [**`camelCase`**](#camelcase)

## Concepto

Una variable es un espacio vacío que nosotros separamos en memoria para guardar un dato a los que ponemos un nombre como "caja".

Las variables en JavaScript se crean **(declaran)** mediante la palabra reservada ``var``. En realidad hay tres tipos de declaraciones: ``var``, ``let`` y ``const``. Estas dos últimas forman parte de ECMAScript 2015 (ES6) standard y són las recomendables por cuestiones de buenas prácticas.

La palabra reservada ``let`` se utiliza para declarar una o más variables (separadas por coma) y, opcionalmente, inicializar a un valor.

Si cuando se **declara** una variable se le **asigna** también un valor, se dice que la variable ha sido **inicializada**. En JavaScript no es obligatorio inicializar las variables, ya que se pueden declarar por una parte y asignarles un valor posteriormente.

El nombre de una variable también se conoce como **identificador**.

En JavaScript no se indica el tipo de variable al declararla, por eso decimos que es un lenguaje de ***tipado dinámico***. JavaScript entiende que una variable es de un tipo determinado cuando le asignamos un valor; por ejemplo si le asignamos un número (sea entero o real) JavaScript entiende que es de tipo ``Number``. Si el valor cambia entonces cambia su tipo.

```js
    let caja = "papel";
```
En este ejemplo vemos que la variable se llama ``caja`` y tiene asignado un **dato** `papel`, pero al ser variable podemos cambiar su "contenido".

```js
    let caja = "Punta bola";
```
Con esto vemos que una variable pude cambiar el **dato** que contenga con el tiempo, por eso el nombre de `variable`; es un espacio que guardamos en nuestro programa pra reutilizarlo, si queremos usar esta `variable`:

```js
    let caja = "Punta bola";
// Usaremos alert() que es una función que nos permite mostrar algo en pantalla por medio de una ventana emergente

    alert(caja);
// Y observamos el resultado

>Punta bola
```
Ahora debemos de tener en cuenta que tenemos [**tipos de datos**](002tiposDeDatos.md).

## Declarar

Nosotros cuando ``declaramos`` una variable tenemos 3 formas de declararla:

- `var`
- `let`
- `const`

Para declarar no hace falta dar un valor, es para definir que tipo de alcance va a tener.

Cada una de estas tiene sus características, los cuales `const` y ``let`` aparecieron en ECMAScript 6 y cambian el anterior uso que se daba a las variables. Sepamos que estos trabajan con bloques.

Cuando declaramos una variable hacemos lo siguiente:

```js
var numero = 15;
```
Estamos ``declarando`` la variable `var` a `numero =` el valor `15`, sin embargo hoy en día este tipo de declaraciones con `var` se lo puede considerar malas prácticas debido a que lo volvemos una variable `global`, lo cual no suele ser lo más recomendable, aprovechando este tipo de problemas debemos utilizar `let` en caso de variables o `const` en caso de constantes, por lo que nombraríamos estas variables como variables de "bloque" que simplemente afectará solamente el bloque en el que se encuentra.

```js
let numero = 15;
``` 
Ahora veamos `const` y cómo es eso de las declaraciones con ``const``, pero veamos cómo funciona, utilizaremos `alert()` para poder ver los resultados en pantalla.

``` js
const nombre = "David";

alert(nombre);

//> David
```
Si intentamos re declarar la variable con otro valor nos dará un error que podremos ver en consola.

``` js
const nombre = "David";

nombre = "Suarez";

alert(nombre);

//> Uncaught ReferenceError: numero is not defined
``` 
Nos sale error, la constante solo se puede declarar una vez y noa puede modificar su valor.

## Inicializar

Para inicializar una variable ya declarada debemos de darle valor, en nuestro caso: `let numero;` está en memoria y para inicializarla debemos darle un valor.

```js
// Declarada
let numero

// Inicializada
numero = 29;

alert(numero);

//> 29
```
Ahora tenemos nuestra variable `numero` inicializada y vemos el valor gracias a `alert()`

Nosotros también podemos declararla e inicializarla al mismo tiempo
```js
let numero = 29;

alert(numero);

//> 29
```
Incluso podemos modificar el valor:

```js
let numero = 29;

numero = 20;

alert(numero);

//>20
```
`const` se debe declarar e inicializar en el mismo momento, no se puede declarar y después inicializar.

## Multiples variables

Veamos un ejemplo con la función de `console.log()` el cual es menos intrusivo que un `alert()` y nos permite ver los resultados en la consola del navegador, podemos abrirlo con F12.
```js
let numero, numero2, numero3;

numero = 2;
numero2 = 9;
numero3 = 12;

console.log(numero);
console.log(numero2);
console.log(numero3);

//>2
//>9
//>12
```
Podemos declarar las variables multiples de esta forma:

```js
let numero, 
numero2, 
numero3;
```
De esta forma es un poco más visual la cantidad de variables que tenemos.

## ``camelCase`` Nombrar Variables

Una de las tareas a priori más sencilla, pero a la misma vez de las más complejas, es la de ponerle un ***buen*** nombre a una variable (*o a cualquier otro elemento de programación que necesite un nombre*). Los programadores necesitan utilizar variables en sus códigos, y además que estas variables tengan nombres que representen claramente la información que contienen.

Dejar nombres bien claros es muy importante para nosotros, ya que si necesitamos volver a trabajar con dicho código (*o hacer modificaciones*) nos resultará mucho más fácil. Sin embargo, esto cobra aún mayor importancia si otras personas tienen que revisar o modificar nuestro código, ya que ellos no están tan familiarizados con nuestro código y les ayudará mucho a tardar menos tiempo en comprendedlo.

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

``precioProducto``

---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/001utilizarJavaScript.md "1. Formas de utilizar JavaScript") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/002tiposDeDatos.md "Datos")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#2-variables "Ir al título")