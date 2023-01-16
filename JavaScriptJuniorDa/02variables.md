# 2. Variables

## Concepto .-

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

//> 29
```
Ahora tenemos nuestra variable `numero` inicializada,
```
```
```
```
```
```


---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/001utilizarJavaScript.md "1. Formas de utilizar JavaScript") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/002tiposDeDatos.md "Datos")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")