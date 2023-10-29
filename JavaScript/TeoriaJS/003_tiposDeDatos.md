# Tipos de datos

Ahora veremos los tipos de datos que se pueden almacenar en una variable:

* Seis tipos de datos **primitivos**, controlados por el `operador typeof`

    * [`number`](/JavaScript/TeoriaJS/003.1_number.md)     -> ``typeof instance === "number"``
    * [`string`](/JavaScript/TeoriaJS/003.2_strings.md)    -> ``typeof instance === "string"``
    * [`boolean`](/JavaScript/TeoriaJS/003.3_booleanos.md) -> ``typeof instance === "boolean"``
    * [`symbol`](#symbol)      -> ``typeof instance === "symbol"``
    * [`undefined`](#undefined)-> ``typeof instance === "undefined"``

    * [`bigint`](#bigint)      -> ``typeof instance === "bigint"``


* [`null`]() -> ``typeof instance === "object"``. Tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra `null`;

* ``object`` -> ``typeof instance === "object"``. Tipo estructural especial que no es de "datos" pero para cualquier instancia de objeto *construido* que también se utiliza como estructuras de datos: 
  - ***new*** `Object`, 
  - ***new*** `Array`, 
  - ***new*** `Map`, 
  - ***new*** `Set`, 
  - ***new*** `WeakSet`, 
  - ***new*** `Date` 
  - y casi todo lo hecho con la palabra clave ***new*** **;**

* `function`: Una estructura sin datos, aunque también responde al operador `typeof`: `typeof instance === "function"`. Esta simplemente es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor `Object`.

### ***`typeof`***

Tengamos en cuenta que el único propósito valioso del uso del operador `typeof` es verificar el tipo de dato. Si deseamos verificar cualquier "Tipo Estructural" derivado de `object`, no tiene sentido usar ``typeof`` para eso, ya que siempre recibiremos "``object``". La forma correcta de comprobar qué tipo de Objeto estamos usando es la palabra clave `instanceof`. Pero incluso en ese caso, puede haber conceptos erróneos.

---

## Recordemos que:

### Tipos de datos de JavaScript

JavaScript es un lenguaje de programación de tipado dinámico, lo que significa que las variables pueden contener diferentes tipos de datos en momentos diferentes.

* Ejemplo:

~~~js
// Tipos de datos

let cadena = "Hola, Mundo";   // Tipo String
let numero = 42;              // Tipo Number
let esVerdadero = true;       // Tipo Boolean
let arreglo = [1, 2, 3];      // Tipo Array
let objeto = {
    nombre: "David",
    edad: 25
    };                        // Tipo Object
let nulo = null;              // Tipo Null
let indefinido = undefined;   // Tipo Undefined

~~~



---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/002.1_constantes.md "Constantes") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/003.1_number.md "Number (números)")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")